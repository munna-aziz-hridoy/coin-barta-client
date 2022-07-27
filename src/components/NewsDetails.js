import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Markup } from "interweave";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ServerUrlContext } from "..";
import useGetUser from "../hooks/useGetUser";
import Nav from "../pages/navbar/Nav";

const NewsDetails = () => {
  const serverUrl = useContext(ServerUrlContext);
  const { id } = useParams();
  const [selectedNews, setSelectedNews] = useState({});
  const [user] = useGetUser(serverUrl);
  useEffect(() => {
    fetch(`${serverUrl}/api/v1/news/get-single-news?id=${id}`)
      .then((res) => res.json())
      .then((data) => setSelectedNews(data.result));
  }, [serverUrl, id]);

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
              Published in: {selectedNews?.createDate?.split("T")[0]}
            </p>
            <p className="text-[15px] font-light text-gray-500 my-4">
              Category: {selectedNews?.category}
            </p>
          </div>
          <div className="max-h-[530px] overflow-hidden">
            <img className="w-full h-full" src={selectedNews?.image} alt="" />
          </div>
          <div className="px-4 py-14">
            <Markup content={selectedNews?.content} />
          </div>
          <div className="my-16 w-full md:w-[60%] lg:w-[45%]">
            <h3 className="text-lg md:text-2xl font-semibold">Comments</h3>
            <div className="px-10 flex flex-col gap-5">
              {/* comments */}
              <div className="border-b-[1px] border-gray-300 pb-3">
                <p className="my-8 ">
                  Tron TRX-এর পতন হয়েছে ০.৫৮ শতাংশ। এর ফলে এর দাম হয়েছে ০.০৮২৫
                  ডলার।
                </p>
                {user?.admin && (
                  <div className="flex justify-end items-center gap-4 ">
                    <button className="flex justify-center items-center py-1 px-3 rounded-sm bg-gray-500 text-slate-50 gap-3">
                      <FontAwesomeIcon icon={faPenToSquare} /> <span>Edit</span>
                    </button>
                    <button className="flex justify-center items-center py-1 px-3 rounded-sm bg-red-500 text-slate-50 gap-3">
                      <FontAwesomeIcon icon={faTrash} /> <span>Delete</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className="mx-5 max-w-[150px] lg:max-w-[300px] flex flex-col justify-between gap-4
      "
        >
          <img
            //   className="mt-10 "
            src="https://trickbd.com/wp-content/uploads/2020/02/24/5e53cb86d908f.jpg"
            alt=""
          />
          <img
            //   className="mt-10"
            src="https://trickbd.com/wp-content/uploads/2020/02/24/5e53cb86d908f.jpg"
            alt=""
          />
          <img
            //   className="mt-10"
            src="https://trickbd.com/wp-content/uploads/2020/02/24/5e53cb86d908f.jpg"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default NewsDetails;
