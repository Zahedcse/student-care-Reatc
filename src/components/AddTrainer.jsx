import Nav from "./Nav";
import {useContext} from 'react'
import { StudentContext } from "../contexts/StudentCon";
import {Link} from 'react-router-dom'
/* eslint-disable jsx-a11y/anchor-is-valid */
const AddTrainer = () => {
    // const [isEditable, setIsEditable] = useState(false)
    // const [ editedStudent , setEditedStudent ] = useState(null)

    const valueObject = useContext(StudentContext)

    const changeHandler = (e) => {
        valueObject.setAllValues({...valueObject.allValues , [e.target.name]: e.target.value})
    }

    const trainerHandler = (e) => {
        e.preventDefault()
        const newTrainer = {
            id: Date.now(),
            name: valueObject.allValues.name,
            address: valueObject.allValues.address,
            phone: valueObject.allValues.phone
        }
        valueObject.setTrainerList([...valueObject.trainerList, newTrainer])
        valueObject.setAllValues('', '', '')
        console.log(newTrainer);
    }
   
    return (
        <div className="m-7 bg-slate-100 h-screen" >
            <Nav/>
            <div className="p-4 max-w-sm mt-11 mx-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" action="#">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Add Trainer</h5>
                    <div>
                        <label for="Name" className="block mb-2 text-sm font-medium text-left ml-2 text-gray-900 dark:text-gray-300">Name</label>
                        <input type="Name" name="name" id="name" className="input" placeholder="Enter Your Name" value={valueObject.allValues.name} onChange={changeHandler}  required="" />
                    </div>
                    <div>
                        <label for="Address" className="block mb-2 text-sm font-medium text-left ml-2 text-gray-900 dark:text-gray-300">Address</label>
                        <input type="email" name="address" id="address" className="input" placeholder="Chittagong" value={valueObject.allValues.address} onChange={changeHandler}  required="" />
                    </div>
                    <div>
                        <label for="Phone" className="block mb-2 text-sm font-medium text-left ml-2 text-gray-900 dark:text-gray-300">Phone</label>
                        <input type="Phone" name="phone" id="Phone" className="input" placeholder="01846********" value={valueObject.allValues.phone} onChange={changeHandler}  required="" />
                    </div> 
                    <Link to={"/Trainers"}>
                        <a><button type="submit" class="btn btn-edit" onClick={(e)=>trainerHandler(e)} >Add Trainer</button></a>
                    </Link>                    
                </form>
            </div>
        </div>
        
    )
}
export default AddTrainer;