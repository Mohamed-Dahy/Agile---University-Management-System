import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import StudentLayout from "./layouts/StudentLayout";

import NotImplemented from "./pages/NotImplemented";

import Home from "./pages/Home";
import Facilities from "./pages/Facilities";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";

import AdminDashboard from "./pages/admin/dashboard";


import StudentDashboard from "./pages/student/Dashboard"
import StudentHome from "./pages/student/Home"


function App() {
  return (
    <Routes>

      {/* USER PAGES that should include the Main Layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/facilities" element={<NotImplemented />} />
        <Route path="/dashboard" element={<NotImplemented />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      {/* ADMIN PAGES */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />

      {/* Student PAGES */}
      <Route path="student" element={<StudentLayout/>} >
        <Route path="dashboard" element={<StudentDashboard/>} />
        <Route path="facilities" element={<NotImplemented/>} />
        <Route index element={<StudentHome/>} />
      </Route>


      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
