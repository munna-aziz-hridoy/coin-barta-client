import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ServerUrlContext } from "../..";
import useGetUser from "../../hooks/useGetUser";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";

const UpdateEmail = () => {
  const [showPass, setShowPass] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const serverUrl = useContext(ServerUrlContext);
  const [user, loading] = useGetUser(serverUrl, refetch);
  console.log(user);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleUpdateUser = (data) => {
    const { email, newPassword, oldPassword } = data;
    if (!email && !newPassword && !oldPassword) {
      toast.error("No changes");
      return;
    }
    if (!oldPassword && newPassword) {
      toast.error("Current Password Doesn't match");
      return;
    }
    if (oldPassword && !newPassword) {
      toast.error("Enter New Password");
      return;
    }
    if (oldPassword) {
    }

    fetch(`${serverUrl}/api/v1/admin/update-admin`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        reset();
        if (data?.success) {
          toast.success("Successfully Updated");
          setRefetch(!refetch);
          sessionStorage.removeItem("accessToken");
          sessionStorage.setItem("accessToken", data?.token);
        } else {
          toast.error("Something is wrong");
        }
      });
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="flex md:h-screen justify-center items-center ">
      <div className="card w-full bg-base-100 shadow-xl max-w-3xl pb-5">
        <div className="card-body ">
          <h2 className="text-center m-5 text-2xl font-bold ">
            Change Your Email
            <br />
            And Password
          </h2>
          <div className="flex justify-center items-center w-full md:w-[40rem] md:mx-auto">
            <form onSubmit={handleSubmit(handleUpdateUser)} className="w-full">
              {/* new email and password */}
              <div className="w-full">
                {/* email */}
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Enter New Email</span>
                  </label>
                  <input
                    {...register("email", {
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid Email!",
                      },
                    })}
                    defaultValue={user?.email}
                    type="email"
                    className="input input-bordered w-full "
                  />
                  <label className="label">
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                {/*current password */}
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Current Password</span>
                  </label>
                  <div className="relative">
                    <p
                      onClick={() => setShowPass(!showPass)}
                      className="absolute  right-5 cursor-pointer top-2"
                    >
                      <FontAwesomeIcon icon={showPass ? faEye : faEyeSlash} />
                    </p>
                    <input
                      {...register("oldPassword", {
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
                {/*  new password */}
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
                        minLength: {
                          value: 6,
                          message: "Must be 6 characters!",
                        },
                      })}
                      type={showPass ? "text" : "password"}
                      placeholder="Enter New Password"
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
    </div>
  );
};

export default UpdateEmail;
