import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import ReactPaginate from 'react-paginate'
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { ServerUrlContext } from '../..'
import useCategory from '../../hooks/useCategory'
import DashBoardNav from './DashBoardNav'

const Category = () => {
    const categoryRef = useRef()
    const [refetch, setRefetch] = useState(false)
    const [errorText, setErrorText] = useState('')
    const serverUrl = useContext(ServerUrlContext)
    const [categories] = useCategory(serverUrl, refetch)
    const [currentItems, setCurrentItems] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)
    const itemsPerPage = 10

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage
        console.log(`Loading items from ${itemOffset} to ${endOffset}`)
        setCurrentItems(categories.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(categories.length / itemsPerPage))
    }, [itemOffset, itemsPerPage, categories])

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % categories.length
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        )
        setItemOffset(newOffset)
    }

    const handleAddCategory = () => {
        const categoryField = document.getElementById('category-field')
        const category = categoryField.value
        if (!category) {
            return setErrorText('Please add any category')
        }
        fetch(`${serverUrl}/api/v1/categories/add-category`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem(
                    'accessToken'
                )}`,
            },
            body: JSON.stringify({ name: category }),
        })
            .then((res) => res.json())
            .then((data) => {
                setRefetch(!refetch)
                console.log(data)
                categoryField.value = ''
                toast.success('Category Added')
            })
    }

    const handleUpdateCategory = (id) => {
        const updatedCategoryField = document.getElementById('update-category')
        if (!updatedCategoryField.value) {
            return setErrorText('Please add any category')
        }

        fetch(`${serverUrl}/api/v1/categories/update-category?id=${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ name: updatedCategoryField?.value }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setRefetch(!refetch)
                toast.success('Category Updated')
            })
    }

    const handleCategoryPublish = (id) => {
        fetch(`${serverUrl}/api/v1/categories/pulish-category?id=${id}`, {
            method: 'PATCH',
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setRefetch(!refetch)
            })
    }

    return (
        <>
            <DashBoardNav />
            <div className="py-20 mx-4 bg-white  md:min-h-[110vh] overflow-x-auto relative">
                <div className="mx-auto overflow-scroll md:overflow-hidden container bg-gray-100 text-gray-900 shadow">
                    <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
                        <div className="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
                            <div className="flex items-center font-bold text-2xl">
                                Category : {categories.length}
                            </div>
                        </div>
                        <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                            <div className="lg:ml-6 flex items-center">
                                <label
                                    for="my-modal-category"
                                    className="bg-gray-200 mt-4 transition duration-150 ease-in-out focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300 rounded md:font-bold  font-normaltext-indigo-700 px-5 h-8 flex items-center text-sm"
                                >
                                    Add New Category
                                </label>
                                <label
                                    for="my-modal-category"
                                    className="text-white mt-4 ml-4 cursor-pointer focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 w-8 h-8 rounded flex items-center justify-center"
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
                                </label>
                                {/* Modal Category*/}
                                <input
                                    type="checkbox"
                                    id="my-modal-category"
                                    class="modal-toggle"
                                />
                                <div class="modal modal-bottom sm:modal-middle">
                                    <div class="modal-box relative">
                                        <label
                                            for="my-modal-category"
                                            class="btn btn-sm btn-circle absolute right-2 top-2"
                                        >
                                            ✕
                                        </label>
                                        <h3 class="font-bold text-lg mb-4">
                                            Please Input Category Name
                                        </h3>

                                        <input
                                            id="category-field"
                                            type="text"
                                            name="category"
                                            placeholder="Category Name"
                                            class="input input-bordered  w-full max-w-xs"
                                        />

                                        <label
                                            for="my-modal-category"
                                            onClick={handleAddCategory}
                                            class="btn ml-5 btn-outline"
                                        >
                                            Add
                                        </label>
                                        {errorText && (
                                            <p className="text-sm text-red-400 text-center">
                                                {errorText}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <table className="min-w-full bg-gray-900    ">
                            <thead>
                                <tr className="w-full h-16 border-gray-900  bg-gray-100  border-b py-8">
                                    <th className="pl-8 text-gray-900 md:font-bold  font-normal    pr-6 text-left text-sm tracking-normal leading-4">
                                        Name
                                    </th>

                                    <th className="text-gray-900 md:font-bold  font-normal    pr-6 text-left text-sm tracking-normal leading-4">
                                        Creating Date
                                    </th>
                                    <th className="text-gray-900 md:font-bold  font-normal    pr-6 text-left text-sm tracking-normal leading-4">
                                        Creating Time
                                    </th>
                                    <th className="text-gray-900 md:font-bold  font-normal    pr-6 text-left text-sm tracking-normal leading-4">
                                        Edit
                                    </th>

                                    <td className="text-gray-900 md:font-bold  font-normal    pr-8 text-left text-sm tracking-normal leading-4">
                                        Publish
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems?.map((category) => {
                                    const date =
                                        category?.createdDate.split('T')[0]
                                    const time = category?.createdDate
                                        .split('T')[1]
                                        .split('.')[0]
                                    return (
                                        <tr
                                            className="h-24 odd:bg-gray-50  even:bg-gray-100 border-gray-300 border-b"
                                            data-aos="fade-right"
                                            data-aos-duration="2000"
                                        >
                                            <td className="text-sm px-6 whitespace-no-wrap text-gray-900 md:font-semibold font-normal   tracking-normal leading-4">
                                                {category?.name}
                                            </td>

                                            <td className="text-sm pr-6 whitespace-no-wrap text-gray-900 md:font-semibold font-normal   tracking-normal leading-4">
                                                {date}
                                            </td>
                                            <td className="text-sm pr-6 whitespace-no-wrap text-gray-900 md:font-semibold font-normal   tracking-normal leading-4">
                                                {time}
                                            </td>
                                            <td className="pr-8 relative">
                                                <button className=" cursor-pointer focus:outline-none">
                                                    <label
                                                        for={`my-modal-edit-${category._id}`}
                                                        className="text-gray-900 p-2 border-transparent rounded-full border md:font-bold  font-normal hover:bg-green-600  hover:text-gray-100 duration-500 cursor-pointer"
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faPenToSquare}
                                                        />
                                                    </label>
                                                    {/* Modal Edit*/}
                                                    <input
                                                        type="checkbox"
                                                        id={`my-modal-edit-${category._id}`}
                                                        class="modal-toggle"
                                                    />
                                                    <div class="modal modal-bottom sm:modal-middle">
                                                        <div class="modal-box relative">
                                                            <label
                                                                for={`my-modal-edit-${category._id}`}
                                                                class="btn btn-sm btn-circle absolute right-2 top-2"
                                                            >
                                                                ✕
                                                            </label>
                                                            <h3 class="font-bold text-lg mb-4">
                                                                Update Category
                                                                Name
                                                            </h3>

                                                            <div class="form-control w-full ">
                                                                <label class="label">
                                                                    <span class="label-text font-bold">
                                                                        Previous
                                                                    </span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    placeholder="Type here"
                                                                    class="input input-bordered w-full"
                                                                    value={
                                                                        category?.name
                                                                    }
                                                                    disabled
                                                                />
                                                            </div>
                                                            <div class="form-control w-full ">
                                                                <label class="label">
                                                                    <span class="label-text font-bold">
                                                                        New
                                                                    </span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    placeholder="New Category Name"
                                                                    class="input input-bordered w-full "
                                                                    id="update-category"
                                                                />
                                                            </div>

                                                            <label
                                                                for={`my-modal-edit-${category._id}`}
                                                                onClick={() =>
                                                                    handleUpdateCategory(
                                                                        category?._id
                                                                    )
                                                                }
                                                                class="btn ml-5 mt-10 btn-outline"
                                                            >
                                                                Update
                                                            </label>
                                                        </div>
                                                    </div>
                                                </button>
                                            </td>

                                            <td className="pr-8 relative">
                                                <input
                                                    type="checkbox"
                                                    class="toggle toggle-primary"
                                                    checked={category?.publish}
                                                    onChange={() =>
                                                        handleCategoryPublish(
                                                            category?._id
                                                        )
                                                    }
                                                />
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div>
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
    )
}

export default Category
