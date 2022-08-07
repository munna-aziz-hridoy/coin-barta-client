import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ServerUrlContext } from "../..";
import useNews from "../../hooks/useNews";
import DashBoardNav from "./DashBoardNav";

const ManageAllNews = () => {
  const serverUrl = useContext(ServerUrlContext);
  const [refetch, setRefetch] = useState(false);
  const [news] = useNews(serverUrl, refetch);

  const handleNewsPublish = (id) => {
    fetch(`${serverUrl}/api/v1/news/publish-news?id=${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => setRefetch(!refetch));
  };

  return (
    <>
      <DashBoardNav />
      <div className="py-20  bg-white  md:min-h-[110vh] overflow-hidden">
        <div className="mx-auto overflow-auto container bg-slate-100 text-gray-800 shadow rounded">
          <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
            <div className="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
              <div className="flex items-center text-gray-800 text-2xl">
                News:
              </div>
            </div>
            <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
              <div className="lg:ml-6 flex items-center">
                <button className="bg-gray-200 transition duration-150 ease-in-out focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300 rounded md:font-bold  font-normal text-indigo-700 px-5 h-8 flex items-center text-sm">
                  <Link to="/addNews">Add News</Link>
                </button>
                <Link
                  to="/addNews"
                  className="text-white  ml-4 cursor-pointer focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 w-8 h-8 rounded flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-plus"
                    width={28}
                    height={28}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={12} y1={5} x2={12} y2={19} />
                    <line x1={5} y1={12} x2={19} y2={12} />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full">
            <table className="min-w-full bg-white    ">
              <thead>
                <tr className="w-full h-16 border-gray-300  bg-slate-100  border-b py-8">
                  <th className="pl-8 text-gray-700 md:font-bold  font-normal    pr-6 text-left text-sm tracking-normal leading-4">
                    Photo
                  </th>

                  <th className="text-gray-700 md:font-bold  font-normal    pr-6 text-left text-sm tracking-normal leading-4">
                    <p>Title</p>
                  </th>
                  <th className="text-gray-700 md:font-bold  font-normal    pr-6 text-left text-sm tracking-normal leading-4">
                    <p>Category</p>
                  </th>

                  <th className="text-gray-700 md:font-bold  font-normal    pr-6 text-left text-sm tracking-normal leading-4">
                    <p>Date</p>
                  </th>

                  <th className="text-gray-700 md:font-bold  font-normal    pr-6 text-left text-sm tracking-normal leading-4">
                    <p> Edit</p>
                  </th>

                  <th className="text-gray-700 md:font-bold  font-normal    pr-8 text-left text-sm tracking-normal leading-4">
                    Publish
                  </th>
                </tr>
              </thead>
              <tbody>
                {news?.map((item) => {
                  const { title, createDate, images, _id, category, publish } =
                    item;
                  const date = createDate.split("T")[0];
                  const time = createDate.split("T")[1].split(".")[0];

                  return (
                    <tr
                      className=" odd:bg-slate-50  even:bg-slate-100 border-gray-300 border-b"
                      data-aos="fade-right"
                      data-aos-duration="2000"
                    >
                      <td className="pr-8 text-left text-sm tracking-normal leading-4 flex justify-center items-center">
                        <Link
                          to={`/news/${_id}`}
                          className="h-24 w-24 flex justify-center items-center"
                        >
                          <img
                            className="w-full h-auto"
                            src={images[0]}
                            alt=""
                          />
                        </Link>
                      </td>
                      <td className="pr-8 text-left hover:underline text-sm tracking-normal leading-4">
                        <Link to={`/news/${_id}`}>{title}</Link>
                      </td>
                      <td className="pr-8 text-left text-sm tracking-normal leading-4">
                        {category}
                      </td>
                      <td className="pr-8 text-left text-sm tracking-normal leading-4">
                        <span>Date: {date}</span>
                        <br />
                        <span>Time: {time}</span>
                      </td>
                      <td className="pr-8 text-left text-sm tracking-normal leading-4">
                        <Link
                          to={`/update-news/${_id}`}
                          className="text-gray-700 p-2 border-transparent rounded-sm border md:font-bold  font-normal hover:bg-gray-800 hover:text-slate-100 duration-500 cursor-pointer"
                        >
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </Link>
                      </td>
                      <td className="pr-8 relative">
                        <input
                          type="checkbox"
                          className="toggle toggle-primary"
                          checked={publish}
                          onChange={() => handleNewsPublish(_id)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageAllNews;
