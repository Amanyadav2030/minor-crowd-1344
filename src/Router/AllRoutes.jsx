import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ForgotPassword from '../components/ForgotPassword'
import Login from '../Page/Login'
import Signup from '../Page/Signup'
import Features from "../components/Features";
import Small from "../components/Small";
import Big from "../components/Big";
import Solo from "../components/Solo";
import Price from "../components/price/Price";
import Project from "../components/project/Project";
import Home from "../pages/Home";
import Timer from "../pages/Timer";
import RequireAuth from '../hoc/RequireAuth'
const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot_password" element={<ForgotPassword />} />
            <Route path="/" element={<Home />} />
            <Route path="/price" element={<Price />} />
            <Route path="/features" element={<Features />} />
            <Route path='/timer' element={
                <RequireAuth>
                    <Timer />
                </RequireAuth>
            } />
            <Route path="/project" element={
                <RequireAuth>
                    <Project />
                </RequireAuth>
            } />
            <Route path="/small" element={<Small />} />
            <Route path="/big" element={<Big />} />
            <Route path="/solo" element={<Solo />} />

        </Routes>
    )
}

export default AllRoutes;
