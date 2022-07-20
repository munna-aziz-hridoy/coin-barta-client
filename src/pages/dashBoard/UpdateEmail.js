import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ServerUrlContext } from "../..";

const UpdateEmail = () => {
  const [showPass, setShowPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [errorText, setErrorText] = useState("");
  const serverUrl = useContext(ServerUrlContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleUpdateUser = (data) => {
    const { newEmail, newPassword, oldEmail, oldPassword, newConfirmPassword } =
      data;
    console.log(newPassword, newConfirmPassword, data);
    if (newPassword !== newConfirmPassword) {
      return setErrorText("password did not match");
    }
    console.log("hello");
    fetch(`${serverUrl}/api/v1/admin/update-admin`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="flex md:h-screen justify-center items-center ">
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center m-5 text-2xl font-bold ">
            Change Your Email
            <br />
            And Password
          </h2>
          <form
            onSubmit={handleSubmit(handleUpdateUser)}
            className="flex flex-col md:flex-row justify-center items-start gap-20"
          >
            {/* old email and password */}
            <div className="w-full">
              {/* email  */}
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Enter Old Email</span>
                </label>
                <input
                  {...register("oldEmail", {
                    required: {
                      value: true,
                      message: "Email is required!",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email!",
                    },
                  })}
                  type="email"
                  placeholder="previous@gmail.com"
                  className="input input-bordered w-full "
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              {/* password */}
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Enter Old Password</span>
                </label>
                <div className="relative">
                  <p
                    onClick={() => setShowNewPass(!showNewPass)}
                    className="absolute  right-5 cursor-pointer top-2"
                  >
                    <FontAwesomeIcon icon={showNewPass ? faEye : faEyeSlash} />
                  </p>
                  <input
                    {...register("oldPassword", {
                      required: {
                        value: true,
                        message: "Password is required!",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be 6 characters!",
                      },
                    })}
                    type={showNewPass ? "text" : "password"}
                    placeholder="Your Password"
                    className="input input-bordered w-full "
                  />
                </div>
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            {/* new email and password */}
            <div className="w-full">
              {/* email */}
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Enter New Email</span>
                </label>
                <input
                  {...register("newEmail", {
                    required: {
                      value: true,
                      message: "Email is required!",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email!",
                    },
                  })}
                  type="email"
                  placeholder="previous@gmail.com"
                  className="input input-bordered w-full "
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              {/* password */}
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">New Password</span>
                </label>
                <div className="relative">
                  <p
                    onClick={() => setShowPass(!showPass)}
                    className="absolute  right-5 cursor-pointer top-2"
                  >
                    <FontAwesomeIcon icon={showPass ? faEye : faEyeSlash} />
                  </p>
                  <input
                    {...register("newPassword", {
                      required: {
                        value: true,
                        message: "Password is required!",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be 6 characters!",
                      },
                    })}
                    type={showPass ? "text" : "password"}
                    placeholder="Your Current Password"
                    className="input input-bordered w-full "
                  />
                </div>
                <label className="label">
                  {errors.current_password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.current_password.message}
                    </span>
                  )}
                  {errors.current_password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.current_password.message}
                    </span>
                  )}
                </label>
              </div>
              {/* confirm new password */}
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Confirm New Password</span>
                </label>
                <div className="relative">
                  <p
                    onClick={() => setShowPass(!showPass)}
                    className="absolute  right-5 cursor-pointer top-2"
                  >
                    <FontAwesomeIcon icon={showPass ? faEye : faEyeSlash} />
                  </p>
                  <input
                    {...register("newConfirmPassword", {
                      required: {
                        value: true,
                        message: "Password is required!",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be 6 characters!",
                      },
                    })}
                    type={showPass ? "text" : "password"}
                    placeholder="Your Current Password"
                    className="input input-bordered w-full "
                  />
                </div>
                <label className="label">
                  {errors.current_password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.current_password.message}
                    </span>
                  )}
                  {errors.current_password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.current_password.message}
                    </span>
                  )}
                </label>
                <input className="btn w-full " type="submit" value="CHANGE" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmail;
