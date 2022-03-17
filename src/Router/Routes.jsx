import { BrowserRouter , Routes, Route } from "react-router-dom";
import AddCourse from "../components/AddCourse";
import AddStudent from "../components/AddStudent";
import AddTrainer from "../components/AddTrainer";
import Courses from "../components/Courses";
import AllStudent from "../components/Home";
import Trainers from "../components/Trainers";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AllStudent />} />
                <Route path="/Add-Trainer" element={<AddTrainer/>} />
                <Route path="/Add-Student" element={<AddStudent/>} />
                <Route path="/Trainers" element={<Trainers/>} />
                <Route path="/Add-Course" element={<AddCourse/>} />
                <Route path="/Courses" element={<Courses/>} />
            </Routes>
        </BrowserRouter>

    )
}
export default Router;
