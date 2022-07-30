import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";
import { ServerUrlContext } from "../..";
import NewsCard from "../../components/NewsCard";
import useNews from "../../hooks/useNews";
import Nav from "../navbar/Nav";

const CategoryNews = () => {
  const serverUrl = useContext(ServerUrlContext);
  const { category } = useParams();
  //   console.log(category);
  //   const [news, setCategoryNews] = useState([]);
  const [news] = useNews(serverUrl, true);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  //   useEffect(() => {
  //     fetch(`${serverUrl}/api/v1/news/category-news?category=${category}`)
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   }, [category, serverUrl]);

  const publishedNews = news?.filter(
    (item) => item.publish === true && item.category === category
  );

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(publishedNews.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(publishedNews.length / itemsPerPage));
  }, [itemOffset, publishedNews]);

  //   console.log(itemOffset);
  //   console.log(publishedNews);
  //   console.log(itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % publishedNews.length;
    console.log(newOffset);
    setItemOffset(newOffset);
  };

  return (
    <>
      <Nav />
      <section className="flex max-w-7xl mx-auto justify-center items-start">
        <div className=" grid grid-cols-1 ml-5 xl:ml-0 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
          {currentItems?.map((item) => (
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
      <div className="mr-[400px]">
        <>
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
            activeLinkClassName="active"
          />
        </>
      </div>
    </>
  );
};

export default CategoryNews;
