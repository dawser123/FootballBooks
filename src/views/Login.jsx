import { useContext } from "react";
import Button from "../ui/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
const Login = () => {
  const user = useContext(AuthContext);
  const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "test@gmail.com",
      password: "1234567",
    },
  });
  const onSubmit = (data) => {
    navigate("/");
    user.setUser(data);
    user.setLoggedIn(true);
  };
  return (
    <>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto my-32 md:max-w-[50%]"
      >
        <div className="mx-auto  w-[80%] rounded-xl bg-secondary-color py-5">
          <h2 className="text-center text-xl text-primary-text-color">
            Log in
          </h2>
          <div className="flex flex-col p-5  ">
            <input
              autoComplete="off"
              type="email"
              placeholder="Email address"
              className="border-b-2 bg-transparent p-2 py-5 text-primary-text-color outline-none placeholder:text-lg placeholder:text-primary-text-color"
              {...register("email", {
                required: "Enter valid email",
                pattern: {
                  value: validateEmail,
                  message: "Enter valid email and try again.",
                },
              })}
            />
            {errors.email && (
              <p className="m-2 font-bold text-red-400">
                {errors.email.message}
              </p>
            )}
            <input
              autoComplete="off"
              type="password"
              placeholder="Password"
              className="border-b-2 bg-transparent p-2 py-5 text-primary-text-color outline-none placeholder:text-lg placeholder:text-primary-text-color"
              {...register("password", {
                required: "Password must be at least 6 characters long",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
            />
            {errors.password && (
              <p className="m-2 text-left font-bold text-red-400">
                {errors.password.message}
              </p>
            )}
            <Button type="submit" className="mt-5 py-3 uppercase duration-300 ">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};
export default Login;
// komunukat czy na pewno chcesz sie wylogowac!!!!!!!
