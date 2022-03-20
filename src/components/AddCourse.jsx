import { useContext} from "react";
import { StudentContext } from "../contexts/StudentCon";
import {Link} from "react-router-dom";
import Nav from "./Nav";

const AddCourse = () => {
    const valueObject = useContext(StudentContext)
   
    const changeHandler = (e) => {
        valueObject.setCourse({
            ...valueObject.course, [e.target.name]: e.target.value
        })
    }
    const submitHandler = (e) => {
        const newCourse = {
            id: Date.now(),
            name: valueObject.course.name,
            duration: valueObject.course.duration,
            trainer: valueObject.course.trainer
        }
        e.preventDefault()
        valueObject.setCourseList([...valueObject.courseList, newCourse])
        valueObject.setCourse('', '', '')
        console.log(newCourse);
    }

    return (
       <div className="m-7 bg-slate-100 max-h-screen scree">
            <Nav/>
            <div class="p-4 max-w-sm mt-11 mx-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form class="space-y-6" action="#">
                    <h5 class="text-xl font-medium text-gray-900 dark:text-white">Add Course</h5>
                    <div>
                        <label for="Name" class="block mb-2 text-sm font-medium text-left ml-2 text-gray-900 dark:text-gray-300">Course Name</label>
                        <input type="Name" name="name" id="name" class="input" placeholder="Enter your Course Name" onChange={changeHandler} value={valueObject.course.name} required="" />
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-left ml-2 text-gray-900 dark:text-gray-300">Duration</label>
                        <input type="text" name="duration" id="duration" class="input" placeholder="6/3/5" onChange={changeHandler} value={valueObject.course.duration} required="" />
                    </div>
                    <div>
                        <select onChange={changeHandler} className="input" name="trainer" id="">
                            <option >Select Trainer</option>
                            {
                                valueObject.trainerList.map(trainer => (
                                    <option value={trainer.name}>{trainer.name}</option>
                                ))
                           }
                        </select>
                    </div> 
                    <Link to={"/trainers"}>
                        <button type="button" class="btn btn-edit" onClick={(e)=>submitHandler(e)} >Add Course</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}
export default AddCourse;