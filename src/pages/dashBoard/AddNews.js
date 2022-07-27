import React, { useContext, useEffect, useState } from "react";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import NewsContentEditor from "../../components/NewsContentEditor";
import useCategory from "../../hooks/useCategory";
import { ServerUrlContext } from "../..";
import { useForm } from "react-hook-form";

const AddNews = () => {
  const serverUrl = useContext(ServerUrlContext);
  const [content, setContent] = useState("");
  const [errorText, setErrorText] = useState("");
  const [categories] = useCategory(serverUrl);
  const [publishedCategories, setPublishedCategories] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    setPublishedCategories(
      categories.filter((category) => category.publish === true)
    );
  }, [categories]);

  const handleAddNews = (data) => {
    if (!content) {
      return setErrorText("Please Add some content");
    }
    setErrorText("");
    const news = { ...data, content };
    console.log(news);
  };

  return (
    <div className="flex  justify-center items-center ">
      <div className="card w-full bg-base-100 shadow-xl  pb-5">
        <div className="card-body ">
          <h2 className="text-center m-5 text-2xl font-bold ">Add a News</h2>
          <div className="flex justify-center items-center w-full">
            <form
              onSubmit={handleSubmit(handleAddNews)}
              className="w-full"
              action=""
            >
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  {...register("title", {
                    required: "Please Enter a title",
                  })}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full "
                />
                <label className="label">
                  {errors.title && (
                    <span className="label-text-alt text-red-500">
                      {errors.title.message}
                    </span>
                  )}
                </label>
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Conent</span>
                </label>

                <NewsContentEditor setContent={setContent} />
                {errorText && (
                  <span className="label-text-alt text-red-500">
                    {errorText}
                  </span>
                )}
              </div>
              <div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Select Category</span>
                  </label>
                  <select
                    {...register("category", {
                      required: "Please select a category",
                    })}
                    className="select select-bordered"
                    defaultValue={"Select One"}
                  >
                    <option disabled>Select One</option>
                    {publishedCategories?.map((category, index) => (
                      <option key={index}>{category.name}</option>
                    ))}
                  </select>
                  {errors.category && (
                    <span className="label-text-alt text-red-500">
                      {errors.category.message}
                    </span>
                  )}
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Select Img</span>
                  </label>
                  <input type="file" name="" id="" />
                </div>
              </div>
              <div>
                <button className="btn btn-outline mt-5">Upload</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNews;
