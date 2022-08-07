import {
  faObjectGroup,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Markup } from "interweave";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ServerUrlContext } from "..";
import useNews from "../hooks/useNews";
import Nav from "../pages/navbar/Nav";
import NewsCard from "./NewsCard";
import Spinner from "./Spinner";

const SearchResult = () => {
  const serverUrl = useContext(ServerUrlContext);
  const [searchResults, setSearchResults] = useState(null);
  const { searchValue } = useParams();
  const [news] = useNews(serverUrl);
  useEffect(() => {
    const searchNews = news?.filter(
      (item) =>
        (item.publish &&
          item.title.toLowerCase().includes(searchValue.toLowerCase())) ||
        item.content.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResults(searchNews);
  }, [news, searchValue]);

  if (searchResults === null) {
    return <Spinner />;
  }

  if (searchResults?.length === 0) {
    return (
      <>
        <Nav />
        <div className="min-h-[67vh] flex justify-center items-center">
          <h2 className="text-gray-400 text-2xl font-semibold">
            No result found
          </h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Nav />
      <section className="flex max-w-7xl mx-auto justify-center items-start">
        <div className=" grid grid-cols-1 ml-5 xl:ml-0 md:grid-cols-2 xl:grid-cols-3 gap-10 my-10">
          {searchResults?.map((item) => (
            <NewsCard key={item._id} news={item} />
          ))}
        </div>
        <div className="mx-5 max-w-[150px] lg:max-w-[300px]">
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
        </div>
      </section>
      {/* <div className=" grid grid-cols-1 ml-5 xl:ml-0 md:grid-cols-2 xl:grid-cols-3 gap-10 my-10">
        {searchResults?.map((news) => {
          //   const { _id, title, content, category, image } = news;
          return <NewsCard news={news} />;
        })}
      </div> */}
    </>
  );
};

export default SearchResult;
