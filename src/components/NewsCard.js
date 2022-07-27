import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faGripVertical } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  console.log(news);
  return (
    <div class="max-w-xs bg-white rounded border border-gray-200 shadow-md ">
      <Link to={`/news/${news._id}`}>
        <img class="rounded-t" src={news?.image} alt="" />
      </Link>
      <div class="p-5">
        <Link to={`/news/${news._id}`}>
          <h5 class="mb-2 text-lg hover:underline font-bold tracking-tight text-gray-900 ">
            {news?.title}
          </h5>
        </Link>
        <div className="w-full flex justify-between items-center mt-6">
          <p className="flex justify-start items-center gap-2">
            <FontAwesomeIcon icon={faGripVertical} />
            <span>{news?.category}</span>
          </p>
          <p className="flex justify-start items-center gap-2">
            <FontAwesomeIcon icon={faClock} />
            <span>{news?.createDate.split("T")[0]}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
