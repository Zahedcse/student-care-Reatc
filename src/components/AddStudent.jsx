// import Courses from "./Courses";
import { useContext} from "react";
import { StudentContext } from "../contexts/StudentCon";
import {Link} from "react-router-dom";
import Nav from "./Nav";

const AddStudent = () => {
    const valueObject = useContext(StudentContext);
    
    const changeHandler = (e) => {
        valueObject.setStudent({
            ...valueObject.student, [e.target.name]: e.target.value
        })
    }
    const submitHandler = (e) => {
        const newStudent = {
            id: Date.now(),
            name: valueObject.student.name,
            address: valueObject.student.address,
            phone: valueObject.student.phone,
            course: valueObject.student.course,
            trainer: valueObject.student.trainer
        }
        e.preventDefault()
        valueObject.setStudentList([...valueObject.studentList, newStudent])
        valueObject.setStudent('', '', '', '', '')
        console.log(newStudent);
    }
    
    return (
         <div className="m-7 bg-slate-100 h-screen">
            <Nav/>
            <div class="p-4 max-w-sm mt-11 mx-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form class="space-y-6" action="#">
                    <h5 class="text-xl font-medium text-gray-900 dark:text-white">Add Student</h5>
                    <div>
                        <label for="Name" class="block mb-2 text-sm font-medium text-left ml-2 text-gray-900 dark:text-gray-300">Name</label>
                        <input type="text" name="name" id="name" class="input" placeholder="Enter your Name" value={valueObject.student.name} onChange={changeHandler} required=""/>
                    </div>
                    <div>
                        <label for="address" class="block mb-2 text-sm font-medium text-left ml-2 text-gray-900 dark:text-gray-300">Address</label>
                        <input type="text" name="address" id="address" class="input" placeholder="Chittagong" value={valueObject.student.address} onChange={changeHandler} required=""/>
                    </div>
                    <div>
                        <label for="phone" class="block mb-2 text-sm font-medium text-left ml-2 text-gray-900 dark:text-gray-300">Phone</label>
                        <input type="number" name="phone" id="phone" class="input" placeholder="+880123434**" value={valueObject.student.phone} onChange={changeHandler} required=""/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-left ml-2 text-gray-900 dark:text-gray-300" htmlFor="course_name">Course Name</label>
                        <select onChange={changeHandler} className="input" name="course" id="">
                            <option  >Select Course</option>
                            {   
                                valueObject.courseList.map(course => (
                                <option value={course.name}>{course.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-left ml-2 text-gray-900 dark:text-gray-300" htmlFor="course_name">Trainer Name</label>
                        <select onChange={changeHandler} className="input"  name="trainer" id="">
                            <option >Select Trainer</option>
                            {   
                                valueObject.trainerList.map(trainer => (
                                <option value={trainer.name} >{trainer.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <Link to={"/"}><button type="submit" class="btn btn-edit" onClick={(e)=>submitHandler(e)} >Add Student</button></Link>
                </form>
            </div>
        </div>
    )
}
export default AddStudent;