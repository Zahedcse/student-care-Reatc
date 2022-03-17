import Nav from "./Nav";

const AddCourse = () => {
    return (
       <div>
            <Nav/>
            <div class="p-4 max-w-sm mt-11 mx-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form class="space-y-6" action="#">
                    <h5 class="text-xl font-medium text-gray-900 dark:text-white">Add Course</h5>
                    <div>
                        <label for="Name" class="block mb-2 text-sm font-medium text-left ml-2 text-gray-900 dark:text-gray-300">Name</label>
                        <input type="Name" name="Text" id="name" class="input" placeholder="Enter your Name" required="" />
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-left ml-2 text-gray-900 dark:text-gray-300">Address</label>
                        <input type="email" name="Text" id="email" class="input" placeholder="Chittagong" required="" />
                    </div>
                    <div>
                        <label for="Phone" class="block mb-2 text-sm font-medium text-left ml-2 text-gray-900 dark:text-gray-300">Phone</label>
                        <input type="Phone" name="Text" id="Phone" class="input" placeholder="01846********" required="" />
                    </div> 
                    <button type="submit" class="btn btn-edit">Add Course</button>
                    
                </form>
            </div>
        </div>
    )
}
export default AddCourse;