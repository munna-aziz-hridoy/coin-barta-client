import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ServerUrlContext } from '../..'
import useCategory from '../../hooks/useCategory'

const Nav = () => {
    const serverUrl = useContext(ServerUrlContext)
    const [categories] = useCategory(serverUrl)
    const navigate = useNavigate()

    const filtered = categories.filter((category) => category.publish === true)

    const handleSearch = () => {
        const searchField = document.getElementById('searchInput')
        const searchValue = searchField.value
        navigate(`/searchResult/${searchValue}`)
    }

    return (
        <section className="bg-[#FABF2C] px-4">
            <div className=" max-w-7xl mx-auto">
                <div className="navbar p-0">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label
                                tabindex="0"
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabindex="0"
                                className="menu menu-compact dropdown-content mt-3 shadow bg-base-300 rounded-box w-52"
                            >
                                <li>
                                    <Link to="/" className="text-lg">
                                        কন্টাক
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className=" hidden lg:flex">
                            <ul className="gap-10 menu-horizontal">
                                {filtered?.map((item) => {
                                    return (
                                        <li>
                                            <Link
                                                to={`/${item.name}`}
                                                className="text-lg py-0"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <input
                            type="text"
                            id="searchInput"
                            placeholder="Search"
                            className="py-2 rounded-l-lg pl-3"
                        />
                        <button
                            onClick={handleSearch}
                            className="bg-slate-200 rounded-r-lg  p-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-5"
                                fill="#fff"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Nav
