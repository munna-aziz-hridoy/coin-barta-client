import React from 'react'
import { Link } from 'react-router-dom'
import DashBoardNav from './DashBoardNav'

const ManageAllNews = () => {
    return (
        <>
            <DashBoardNav />
            <div className="py-20  bg-white  md:min-h-[110vh] overflow-hidden">
                <div className="mx-auto overflow-scroll container bg-gray-800 text-gray-500 shadow rounded">
                    <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
                        <div className="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
                            <div className="flex items-center text-gray-200 text-2xl">
                                News:
                            </div>
                        </div>
                        <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                            <div className="lg:ml-6 flex items-center">
                                <button className="bg-gray-200 transition duration-150 ease-in-out focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300 rounded md:font-bold  font-normaltext-indigo-700 px-5 h-8 flex items-center text-sm">
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
                                <tr className="w-full h-16 border-gray-300  bg-gray-800  border-b py-8">
                                    <th className="pl-8 text-gray-200 md:font-bold  font-normal    pr-6 text-left text-sm tracking-normal leading-4">
                                        Photo
                                    </th>

                                    <th className="text-gray-200 md:font-bold  font-normal    pr-6 text-left text-sm tracking-normal leading-4">
                                        <p>Title</p>
                                    </th>
                                    <th className="text-gray-200 md:font-bold  font-normal    pr-6 text-left text-sm tracking-normal leading-4">
                                        <p>Body</p>
                                    </th>
                                    <th className="text-gray-200 md:font-bold  font-normal    pr-6 text-left text-sm tracking-normal leading-4">
                                        <p>Date</p>
                                    </th>

                                    <th className="text-gray-200 md:font-bold  font-normal    pr-6 text-left text-sm tracking-normal leading-4">
                                        <p> Edit</p>
                                    </th>

                                    <td className="text-gray-200 md:font-bold  font-normal    pr-8 text-left text-sm tracking-normal leading-4">
                                        Delete
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {products.map((product) => ( */}
                                <tr
                                    // key={product._id}
                                    className="h-24 odd:bg-gray-600  even:bg-gray-800 border-gray-300 border-b"
                                    data-aos="fade-right"
                                    data-aos-duration="2000"
                                >
                                    <td className="md:pl-8 pl-4 pr-6 leading-4">
                                        <div className="h-10 w-14">
                                            <img
                                                className="h-full w-full  overflow-hidden shadow"
                                                // src={product.img}
                                                alt=""
                                            />
                                        </div>
                                    </td>

                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-200 md:font-semibold font-normal   tracking-normal leading-4">
                                        <p className="mb-2">
                                            {/* {product.product_name} */}
                                        </p>
                                        <small>
                                            {/* {product.supplier_name} */}
                                        </small>
                                    </td>
                                    <td className="text-sm hidden md:block mt-5 pr-6 whitespace-no-wrap text-gray-200 font-normal  max-w-[300px]     tracking-normal leading-4">
                                        <div className=" ">
                                            {/* {product.body.slice( */}

                                            {/* )} */}
                                        </div>
                                    </td>

                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-200 md:font-semibold font-normal     tracking-normal leading-4">
                                        {/* <p>${product.price}</p>
                                    <p>par {product.unit}</p> */}
                                    </td>

                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-200 md:font-semibold font-normal   tracking-normal leading-4">
                                        {/* {product.quantity} */}
                                    </td>

                                    <td className="pr-8 relative">
                                        <button
                                            // onClick={() =>
                                            //     handleDelete(
                                            //         product._id
                                            //     )
                                            // }
                                            className=" cursor-pointer focus:outline-none"
                                        >
                                            <div className="text-gray-100 p-2 border-transparent rounded-full border md:font-bold  font-normal hover:bg-red-600 duration-500 cursor-pointer">
                                                {/* <FontAwesomeIcon
                                                icon={
                                                    faTrashCan
                                                }
                                            /> */}
                                            </div>
                                        </button>
                                    </td>
                                </tr>
                                {/* ))} */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageAllNews
