/* eslint-disable jsx-a11y/anchor-is-valid */

import { useContext } from "react";
import { StudentContext } from "../contexts/StudentCon";
import Nav from "./Nav";

const Trainers = () => {
    const {trainerList} = useContext(StudentContext)
    return (
        <div className="m-7 bg-slate-100 h-screen">
            <Nav/>
            <h1 class="text-xl font-medium m-4">All Trainers</h1>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden shadow-md sm:rounded-lg">
                            <table class="min-w-full">
                                <thead class="bg-gray-400 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                            ID
                                        </th>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                            Name
                                        </th>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                            Address
                                        </th>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                            Phone
                                        </th>
                                        
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                            Actions
                                        </th>   
                                    </tr>
                                </thead>
                                <tbody> 
                                    {
                                        trainerList.map(trainer => (
                                             <tr class="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600">
                                        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {trainer.id}
                                        </td>
                                        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {trainer.name}
                                        </td>
                                        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                           {trainer.address}
                                        </td>
                                        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {trainer.phone}
                                        </td>
                                        <td class="py-4 px-6 text-sm font-medium text-center whitespace-nowrap">
                                            <a type="button" class="btn-edit">Edit</a>
                                            <a type="button" class="btn-delete">Delete</a>
                                        </td>
                                            </tr>
                                    ))
                                   }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Trainers;