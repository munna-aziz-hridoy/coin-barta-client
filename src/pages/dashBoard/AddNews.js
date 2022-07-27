import React, { useContext, useEffect, useState } from "react";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import NewsContentEditor from "../../components/NewsContentEditor";
import useCategory from "../../hooks/useCategory";
import { ServerUrlContext } from "../..";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import DashBoardNav from "./DashBoardNav";

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

  const handleAddNews = (newsData) => {
    console.log(content);
    const { title, newsImage, category } = newsData;
    console.log(category);
    if (!content) {
      console.log("not working");
      return setErrorText("Please Add some content");
    }

    setErrorText("");

    const uploadedImg = newsImage[0];
    const formData = new FormData();
    formData.append("image", uploadedImg);

    const imgbbAPIkey = "52ad69453d156ba9876338195fd1a8a5";
    const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIkey}`;
    fetch(url, { method: "POST", body: formData })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const image = data.data.url;
          const news = { title, category, content, image };
          console.log(news);
          fetch(`${serverUrl}/api/v1/news/post-news`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(news),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.success) {
                toast.success("Successfully added news");
                reset();
              }
            });
        }
      });
  };

  return (
    <>
      <DashBoardNav />
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
                    <input
                      type="file"
                      name=""
                      id=""
                      {...register("newsImage", {
                        required: "Please insert an image",
                      })}
                    />
                    {errors.newsImage && (
                      <span className="label-text-alt text-red-500">
                        {errors.newsImage.message}
                      </span>
                    )}
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
    </>
  );
};

export default AddNews;
