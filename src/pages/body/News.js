import React from 'react'
import NewsCard from '../../components/NewsCard'
import Nav from '../navbar/Nav'

const News = () => {
    return (
        <>
            <Nav />
            <section className="flex max-w-7xl mx-auto ">
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </div>
                <div className="mx-5 max-w-[300px]">
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
        </>
    )
}

export default News
