import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ServerUrlContext } from '../..'
import useCategory from '../../hooks/useCategory'

const Nav = () => {
    const serverUrl = useContext(ServerUrlContext)
    const [categories] = useCategory(serverUrl)
    return (
        <section className="bg-[#FABF2C] px-4">
            <div className=" max-w-7xl mx-auto">
                <div class="navbar p-0">
                    <div class="navbar-start">
                        <div class="dropdown">
                            <label tabindex="0" class="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
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
                                class="menu menu-compact dropdown-content mt-3 shadow bg-base-300 rounded-box w-52"
                            >
                                {categories?.map((item) => (
                                    <li>
                                        <Link
                                            to={`/${item.name}`}
                                            className="text-lg py-0"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div class=" hidden lg:flex">
                            <ul class="gap-10 menu-horizontal">
                                {categories?.map((item) => (
                                    <li>
                                        <Link
                                            to={`/${item.name}`}
                                            className="text-lg py-0"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                                {/* <li>
                  <Link to="/" className="text-lg py-0">
                    নিউস
                  </Link>
                </li>
                <li>
                  <Link to="/tutorial" className="text-lg py-0">
                    {" "}
                    টিউটরিয়াল
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-lg py-0">
                    কন্টাক
                  </Link>
                </li> */}
                            </ul>
                        </div>
                    </div>

                    <div class="navbar-end">
                        <input
                            type="text"
                            placeholder="Search"
                            class="py-2 rounded-l-lg pl-3"
                        />
                        <button class="bg-slate-200 rounded-r-lg  p-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-5"
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
