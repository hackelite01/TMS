import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import Signup from "../Pages/Signup";
import { TestSpeed } from "../Pages/Test";
import TypingTech from "../Pages/Typingtech";
import Test from "../Pages/Typingtest";


function AllRoutes() {
    
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/testspeed" element={<Test />} />
                <Route path="/testspeed/test" element={<TestSpeed />} />
                <Route path="/testspeed/test1" element={<Test1 />} />
                <Route path="/testspeed/test2" element={<Test2 />} />
                <Route path="/techniques" element={<TypingTech />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    );
} 
export default AllRoutes;