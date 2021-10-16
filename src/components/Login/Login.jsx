import Button from "@restart/ui/esm/Button";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const Login = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register,reset, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data)
    reset()
  };
  return (
    <div className="w-25 mx-auto my-5 border p-4">
       <h2 className="text-center">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label htmlFor="email" className="mt-4 mb-2">
          Email
        </label>
        <div>
        <input
            type="email"
            {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            id="email"
          />
         {errors.email && (
            <span className="text-danger">{errors.email?.message}</span>
          )}
        </div>

        {/* include validation with required or other standard HTML validation rules */}

        <label htmlFor="password" className="mt-4 mb-2">
          Password
        </label>
        <div className="mb-2">
        <input
            type="password"
            id="password"
            {...register("password")}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />
          {/* errors will return when field validation fails  */}
          {errors.password && (
            <span className="text-danger">{errors.password?.message}</span>
          )}
              </div>
              
        <p>
          Don't have a account{" "}
          <Link to="/register" className="text-decoration-none">
            Create new account
          </Link>
        </p>

        <Button type="submit" className="btn btn-danger my-1 w-100">
          {" "}
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
