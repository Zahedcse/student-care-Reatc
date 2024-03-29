/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link } from "react-router-dom";
const Nav = () => {
    const [isActive, setIsActive] = useState(false);
    
    const toggleNav = () => {
        setIsActive(!isActive);
        
    };
    return (
        <nav class="bg-white border-gray-200 px-2 shadow-md sm:px-4 py-2.5 rounded dark:bg-gray-800">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                <a href="#" class="flex items-center">
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Student Care</span>
                </a>
                <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <Link to={"/"}>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current={toggleNav}>Home</a>
                            </li>
                        </Link>
                        <Link to={"/Add-Student"}>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current={toggleNav}>Add Student</a>
                            </li>
                        </Link>
                        <Link to={"/Add-Course"}>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current={toggleNav}>Add Course</a>
                            </li>
                        </Link>
                        <Link to={"/Courses"}>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current={toggleNav}>Courses</a>
                            </li>
                        </Link>
                        <Link to={"/Add-Trainer"}>
                        <li>
                            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current={toggleNav}>Add Trainer</a>
                        </li>
                        </Link>
                        <Link to={"/Trainers"}>
                             <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current={toggleNav}>Trainers</a>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
