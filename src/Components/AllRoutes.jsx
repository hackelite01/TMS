import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import Signup from "../Pages/Signup";
import Test from "../Pages/Typingtest"; // Import the Test component
import TestSpeed from "../Pages/Test"; // Import the TestSpeed component
import TestSpeed1 from "../Pages/Test1"; // Import the TestSpeed1 component
import TestSpeed2 from "../Pages/Test2"; // Import the TestSpeed2 component
import TypingTech from "../Pages/Typingtech";

function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/testspeed" element={<Test />} />
                <Route path="/testspeed/test" element={<TestSpeed />} />
                <Route path="/test1" element={<TestSpeed1 />} /> {/* Corrected component name */}
                <Route path="/test2" element={<TestSpeed2 />} /> {/* Corrected component name */}
                <Route path="/techniques" element={<TypingTech />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    );
}

export default AllRoutes;
