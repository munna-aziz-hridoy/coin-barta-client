import React from "react";

const NewsCard = () => {
  return (
    <div className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md ">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 ">
            আমার সোনার বাংলা। আমি তোমায় ভালোবাসি।
          </h5>
        </a>
        <p className="mb-3 font-normal">
          আমার সোনার বাংলা।আমার সোনার বাংলা।আমার সোনার বাংলা।আমার সোনার
          বাংলা।আমার সোনার বাংলা।আমার সোনার বাংলা।আমার সোনার বাংলা।আমার সোনার
          বাংলা।আমার সোনার বাংলা।আমার সোনার বাংলা।
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
