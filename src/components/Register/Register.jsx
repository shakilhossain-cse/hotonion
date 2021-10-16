import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "@restart/ui/esm/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const Register = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
    .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
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
      <h2 className="text-center">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label htmlFor="name" className="mt-4 mb-2">
          Name
        </label>
        <div>
          <input
            type="text"
            {...register('name')} className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            id="name"
          />
          {errors.name && (
            <span className="text-danger">{errors.name?.message}</span>
          )}
        </div>
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
        <div className="">
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
        <label htmlFor="confirmPassword" className="mt-4 mb-2">
          Confirm Password
        </label>
        <div className="mb-2">
          <input
            {...register('confirmPassword')} className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
            type="password"
            id="confirmPassword"
          />
          {/* errors will return when field validation fails  */}
          {errors.confirmPassword && (
            <span className="text-danger">
             {errors.confirmPassword?.message}
            </span>
          )}
        </div>

        <p>
          Already have a account{" "}
          <Link to="/login" className="text-decoration-none">
            login now
          </Link>
        </p>

        <Button type="submit" className="btn btn-danger my-1 w-100">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
