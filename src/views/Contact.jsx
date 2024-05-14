import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import ContactInfo from "../components/ContactInfo";
const Contact = () => {
  const [msgIsSent, setMsgIsSent] = useState(false);
  const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "Test",
      email: "test@gmail.com",
    },
  });
  const onSubmit = () => {
    setMsgIsSent(true);
    reset();
  };
  return (
    <>
      <h2 className="mb-5 py-5 text-center text-2xl text-primary-text-color">
        Contact us
      </h2>
      <div className="mx-auto flex flex-col items-center justify-center gap-5 md:flex-row md:px-8 mb-10 lg:max-w-[80%]  ">
        <form
          className="w-full max-w-[90%] sm:max-w-[70%]"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full rounded-xl bg-secondary-color ">
            <div className="flex flex-col p-5  ">
              <input
                {...register("name", {
                  required: "Enter your name",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters long",
                  },
                })}
                autoComplete="off"
                type="text"
                placeholder="Name"
                className="border-b-2 bg-transparent p-2 py-5 text-primary-text-color outline-none placeholder:text-lg placeholder:text-primary-text-color"
              />
              {errors.name && (
                <p className="m-2 text-left font-bold text-red-400">
                  {errors.name.message}
                </p>
              )}
              <input
                {...register("email", {
                  required: "Enter valid email",
                  pattern: {
                    value: validateEmail,
                    message: "Enter valid email and try again.",
                  },
                })}
                autoComplete="off"
                type="email"
                placeholder="Email"
                className="border-b-2 bg-transparent p-2 py-5 text-primary-text-color outline-none placeholder:text-lg placeholder:text-primary-text-color"
              />
              {errors.email && (
                <p className="m-2 font-bold text-red-400">
                  {errors.email.message}
                </p>
              )}
              <textarea
                {...register("textarea", {
                  required: "Your message must contain at least 10 characters",
                  minLength: {
                    value: 10,
                    message: "Your message must contain at least 10 characters",
                  },
                })}
                autoComplete="off"
                className="max-h-52 min-h-20 border-b-2 bg-transparent   p-2 text-primary-text-color outline-none  placeholder:text-lg "
                placeholder="Your message"
              ></textarea>
              {errors.textarea && (
                <p className="m-2 font-bold text-red-400">
                  {errors.textarea.message}
                </p>
              )}
              <Button className="mt-5 py-2 uppercase duration-300 ">
                Submit
              </Button>
            </div>
          </div>
        </form>
        <ContactInfo />
        {msgIsSent && (
          <Modal
            title="Your message was sent successfully !"
            isOpen={msgIsSent}
            onClose={() => setMsgIsSent(false)}
          >
            <Button
              onClick={() => setMsgIsSent(false)}
              className="w-[50%] py-2 uppercase sm:w-[40%] lg:max-w-[30%]"
            >
              ok
            </Button>
          </Modal>
        )}
      </div>
    </>
  );
};
export default Contact;
