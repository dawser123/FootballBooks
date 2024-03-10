import Modal from "./UI/Modal";
import { useForm } from "react-hook-form";
import Button from "./UI/Button";
const Newsletter = ({
  isSubscriptionSuccess,
  setIsSubscriptionSuccess,
  isNewsletterShown,setIsNewsletterShown
}) => {
  const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "test@gmail.com",
    },
  });
  const onSubmit = () => {
    setIsSubscriptionSuccess(true);
    reset();
  };
  const handleModalClose = () => {
    setIsNewsletterShown(false);
    setIsSubscriptionSuccess(false);
  };
  return (
    <>
      <Modal
        isOpen={isNewsletterShown}
        onClose={handleModalClose}
        title={!isSubscriptionSuccess ? "Subscribe to newsletter" : ""}
      >
        {!isSubscriptionSuccess ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full px-5 md:max-w-[70%]"
          >
            <input
              noValidate
              autoComplete="off"
              type="email"
              placeholder="Email address"
              className="bg-pr w-full p-2 text-xl text-secondary-text-color outline-none placeholder:text-lg  placeholder:text-secondary-text-color"
              {...register("email", {
                required: "Enter valid email",
                pattern: {
                  value: validateEmail,
                  message: "Enter valid email and try again.",
                },
              })}
            />
            {errors.email && (
              <p className="my-2 font-bold text-red-400">
                {errors.email.message}
              </p>
            )}
            <Button type="submit" className="mt-5 py-3 uppercase duration-300 ">
              Subscribe
            </Button>
          </form>
        ) : (
          <div className="flex h-full flex-col items-center   justify-center gap-5 text-lg text-green-500">
            <span className="text-xl font-bold">Subscription successful !</span>
            <Button onClick={handleModalClose} className="py-3">
              Close
            </Button>
          </div>
        )}
      </Modal>
    </>
  );
};
export default Newsletter;
