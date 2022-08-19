import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Markup } from "interweave";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ServerUrlContext } from "..";
import useComments from "../hooks/useComments";
import useGetUser from "../hooks/useGetUser";
import Nav from "../pages/navbar/Nav";

const NewsDetails = () => {
  const serverUrl = useContext(ServerUrlContext);
  const [errorText, setErrorText] = useState("");
  const [selectedComment, setSelectedComment] = useState({});
  const [refetch, setRefech] = useState(false);
  const { id } = useParams();
  const [selectedNews, setSelectedNews] = useState({});
  const [user] = useGetUser(serverUrl);
  const [comments] = useComments(serverUrl, id, refetch);
  useEffect(() => {
    fetch(`${serverUrl}/api/v1/news/get-single-news?id=${id}`)
      .then((res) => res.json())
      .then((data) => setSelectedNews(data.result));
  }, [serverUrl, id]);

  const handleAddComment = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    if (!comment) {
      setErrorText("Please add any comment");
      return;
    }
    setErrorText("");
    fetch(`${serverUrl}/api/v1/comments/post-comment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ newsId: id, content: comment }),
    })
      .then((res) => res.json())
      .then((data) => {
        e.target.comment.value = "";
        setRefech(!refetch);
      });
  };

  const handleDelete = (id) => {
    const isConfirm = window.confirm(
      "Are you sure you want to delete this comment?"
    );
    if (!isConfirm) {
      return;
    }
    fetch(`${serverUrl}/api/v1/comments/delete-comment?id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRefech(!refetch);
      });
  };
  const handleUpdateComment = (id) => {
    const editedField = document.getElementById(`modal-edit-field-${id}`);
    const updatedComment = editedField.value;
    fetch(`${serverUrl}/api/v1/comments/update-comment?id=${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ comment: updatedComment }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRefech(!refetch);
      });
  };

  const handleSetSelected = (id) => {
    const matchedComment = comments?.find((comment) => comment._id === id);
    setSelectedComment(matchedComment);
  };

  return (
    <>
      <Nav />
      <section className="flex max-w-7xl mx-auto py-10 justify-center items-start p-5 xl:px-0">
        <div className="w-full ">
          <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
            {selectedNews?.title}
          </h2>
          <div className="flex justify-between items-center pr-10">
            <p className="text-[15px] font-light text-gray-500 my-4">
              Published in: {selectedNews?.createDate?.split(", ")[0]}{" "}
              {selectedNews?.createDate?.split(", ")[1]}
            </p>
            <p className="text-[15px] font-light text-gray-500 my-4">
              Category: {selectedNews?.category}
            </p>
          </div>
          <div className="md:max-h-[530px] overflow-hidden flex items-center gap-4 flex-col md:flex-row">
            {selectedNews?.images?.map((image) => (
              <img
                className="w-[98%] md:w-[45%] h-full md:h-[98%]"
                src={image}
                alt=""
              />
            ))}
            {/* 
            <img
              className="w-[98%] md:w-[45%] h-full md:h-[98%]"
              src={selectedNews?.image}
              alt=""
            />
            <img
              className="w-[98%] md:w-[45%] h-full md:h-[98%]"
              src={selectedNews?.image}
              alt=""
            /> */}
          </div>
          <div className="px-4 py-14">
            <Markup content={selectedNews?.content} />
          </div>
          <div className="border-t-[1px] border-gray-400 pt-8 my-14">
            <form onSubmit={handleAddComment}>
              <p className="text-xl md:text-3xl font-semibold text-gray-600">
                মন্তব্য
              </p>
              <div className="flex gap-5 items-end my-6">
                <textarea
                  name="comment"
                  cols="50"
                  rows="4"
                  placeholder="আপনার মন্তব্য লেখুন..."
                  className="border-2 border-gray-400 focus:border-gray-400 outline-0 rounded p-2"
                ></textarea>
                <input
                  className="btn bg-gray-800 rounded-sm px-5 py-1 text-lg text-semibold text-white"
                  type="submit"
                  value="Post"
                />
              </div>
            </form>
          </div>
          <div className="my-16 w-full md:w-[60%] lg:w-[45%]">
            <h3 className="text-lg md:text-xl font-semibold">
              Recent Comments
            </h3>
            <div className="px-10 flex flex-col gap-5">
              {/* comments */}
              {comments?.map((comment) => (
                <div className="border-b-[1px] border-gray-300 pb-3">
                  <p className="my-8 ">{comment?.comment}</p>
                  {user?.admin && (
                    <div className="flex justify-end items-center gap-4 ">
                      <label
                        onClick={() => handleSetSelected(comment?._id)}
                        for={`modal-edit-${comment?._id}`}
                        className="flex cursor-pointer justify-center items-center py-1 px-3 rounded-sm bg-gray-500 text-slate-50 gap-3"
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                        <span>Edit</span>
                      </label>
                      {/* Modal Edit*/}
                      <input
                        type="checkbox"
                        id={`modal-edit-${comment?._id}`}
                        className="modal-toggle"
                      />
                      <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box relative">
                          <label
                            for={`modal-edit-${comment?._id}`}
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                          >
                            ✕
                          </label>
                          <h3 className="font-bold text-lg mb-4">
                            Update Comment
                          </h3>

                          <div className="form-control w-full ">
                            <label className="label">
                              <span className="label-text font-bold">
                                Comment
                              </span>
                            </label>
                            <textarea
                              type="text"
                              defaultValue={selectedComment?.comment}
                              className="input input-bordered pt-1 w-full "
                              id={`modal-edit-field-${comment?._id}`}
                            />
                          </div>

                          <label
                            for={`modal-edit-${comment?._id}`}
                            onClick={() => handleUpdateComment(comment?._id)}
                            className="btn mt-10 btn-outline"
                          >
                            Update
                          </label>
                        </div>
                      </div>

                      <button
                        onClick={() => handleDelete(comment?._id)}
                        className="flex justify-center items-center py-1 px-3 rounded-sm bg-red-500 text-slate-50 gap-3"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                        <span>Delete</span>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* -------------------- advertise ------------------------- */}
        {/* <div
          className="mx-5 max-w-[150px] lg:max-w-[300px] flex flex-col justify-between gap-4
      "
        >
          <img
            className="mt-10 "
            src="https://trickbd.com/wp-content/uploads/2020/02/24/5e53cb86d908f.jpg"
            alt=""
          />
          <img
            className="mt-10"
            src="https://trickbd.com/wp-content/uploads/2020/02/24/5e53cb86d908f.jpg"
            alt=""
          />
          <img
            className="mt-10"
            src="https://trickbd.com/wp-content/uploads/2020/02/24/5e53cb86d908f.jpg"
            alt=""
          />
        </div> */}
      </section>
    </>
  );
};

export default NewsDetails;
