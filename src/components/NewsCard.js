import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClockRotateLeft,
  faObjectGroup,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  console.log(news);
  return (
    <div class="max-w-xs bg-white rounded border border-gray-200 shadow-md ">
      <Link to={`/news/${news._id}`} target="_blank">
        <img class="rounded-t" src={news?.images[0]} alt="" />
      </Link>
      <div class="p-5">
        <Link to={`/news/${news._id}`} target="_blank">
          <h5 class="mb-2 text-lg hover:underline font-bold tracking-tight text-gray-900 ">
            {news?.title}
          </h5>
        </Link>
        <div className="w-full flex justify-between items-center mt-6">
          <p className="flex justify-start items-center gap-2">
            <FontAwesomeIcon icon={faObjectGroup} />
            <span>{news?.category}</span>
          </p>
          <p className="flex justify-start items-center gap-2">
            <FontAwesomeIcon icon={faClockRotateLeft} />
            <span>{news?.createDate.split(", ")[0]}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
