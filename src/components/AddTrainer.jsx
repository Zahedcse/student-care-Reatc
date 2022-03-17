import Nav from "./Nav";
import {useState} from 'react'

/* eslint-disable jsx-a11y/anchor-is-valid */
const AddTrainer = () => {
    const [allValues, setAllValues] = useState({
        name: '',
        address: '',
        phone: ''
    })
    // const [trainerList, setTrainerList] = useState([])

    const changeHandler = (e) => {
        setAllValues({...allValues , [e.target.name]: e.target.value})
    }
    

    return (
        <div>
            <Nav/>
            <div class="p-4 max-w-sm mt-11 mx-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form class="space-y-6" action="#">
                    <h5 class="text-xl font-medium text-gray-900 dark:text-white">Add Trainer</h5>
                    <div>
                        <label for="Name" class="block mb-2 text-sm font-medium text-left ml-2 text-gray-900 dark:text-gray-300">Name</label>
                        <input type="Name" name="name" id="name" class="input" placeholder="Enter your Name" onChange={changeHandler}  required="" />
                    </div>
                    <div>
                        <label for="Address" class="block mb-2 text-sm font-medium text-left ml-2 text-gray-900 dark:text-gray-300">Address</label>
                        <input type="email" name="address" id="address" class="input" placeholder="Chittagong" onChange={changeHandler}  required="" />
                    </div>
                    <div>
                        <label for="Phone" class="block mb-2 text-sm font-medium text-left ml-2 text-gray-900 dark:text-gray-300">Phone</label>
                        <input type="Phone" name="phone" id="Phone" class="input" placeholder="01846********" onChange={changeHandler}  required="" />
                    </div> 
                    <button type="submit" class="btn btn-edit">Add Trainer</button>
                    
                </form>
            </div>
        </div>
    )
}
export default AddTrainer;