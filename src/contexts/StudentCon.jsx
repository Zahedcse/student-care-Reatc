import { createContext, useState } from "react"

export const StudentContext = createContext();

const StudentProvider = (props) => {
    const [allValues, setAllValues] = useState({
        name: '',
        address: '',
        phone: '',
    })
    const [trainerList, setTrainerList] = useState([])
     const [course, setCourse] = useState({
        name: '',
        duration: '',
        trainer: '',
    })
    const [courseList, setCourseList] = useState([])
    const [student, setStudent] = useState({
        name: '',
        address: '',
        phone: '',
        course: '',
        trainer : ''
    })
    const [studentList, setStudentList] = useState([]);
    
    const [isEditable, setIsEditable] = useState(false)
    const [ editedTrainer , setEditedTrainer ] = useState(null)
    const valueObject = {
        allValues,
        trainerList,
        setAllValues,
        setTrainerList,
        course,
        setCourse,
        courseList,
        setCourseList,
        student,
        setStudent,
        studentList,
        setStudentList,
        isEditable,
        setIsEditable,
        editedTrainer,
        setEditedTrainer
    }

    return (
        <StudentContext.Provider value={valueObject}>
                {props.children}
        </StudentContext.Provider>
    )
}
export default StudentProvider