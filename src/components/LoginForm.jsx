import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const LoginForm = ({ setToggle, formData }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const loginUser = (data) => {
    const userExists = formData.find(
      (val) => val.email === data.email && val.password === data.password
    );

    if (userExists) {
        toast.success("success fully login")
    } else {
        toast.error("register first")

    }

    reset();
  };

  return (
    <div className="flex flex-col gap-3 items-center">
      <form
        onSubmit={handleSubmit(loginUser)}
        className="flex flex-col gap-2 text-center w-[40%]"
      >
        <h1 className="font-bold">Login</h1>
        <input
          {...register("email", { required: true })}
          className="border-2 p-3 rounded"
          type="text"
          placeholder="Email"
        />
        {errors.email ? <p>Enter your email</p> : ""}

        <input
          {...register("password", { required: true })}
          className="border-2 p-3 rounded"
          type="text"
          placeholder="Password"
        />
        {errors.password ? <p>Enter password</p> : ""}

        <input
          className="bg-green-500 p-3 rounded cursor-pointer"
          type="submit"
          value="Login"
        />
      </form>
      <p className="text-[0.8rem]">
        Don't have an account?{" "}
        <span
          onClick={() => setToggle(false)}
          className="text-green-600 cursor-pointer underline"
        >
          Register here
        </span>
      </p>
    </div>
  );
};

export default LoginForm;
