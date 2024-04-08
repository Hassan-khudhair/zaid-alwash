import React from 'react'
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import Courses from './pages/Student/Courses';
import Home from './pages/Student/Home';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Lectures from './pages/Student/Lectures';
import Chapter from './pages/Student/Chapter';
import Videos from './pages/Student/Videos';
import './assets/style/App.css';
import './assets/style/admin.css';
import NavbarLayout from './components/NavbarLayout';
import Dashbord from './pages/Teacher/Dashbord';
import SidebarLayout from './components/SidebarLayout';
import ManageCourses from './pages/Teacher/ManageCourses';
import ManageChapter from './pages/Teacher/ManageChapter';
import ManageLectures from './pages/Teacher/ManageLectures';
import ManageStudents from './pages/Teacher/ManageStudents';
import MngHomeWorks from './pages/Teacher/MngHomeWorks';
import Notification from './pages/Teacher/Notification';
import Profile from './pages/Teacher/Profile';


function App() {

  return (
    <div>
      <BrowserRouter >
                <Routes>
                    <Route element={<NavbarLayout/>}>
                        <Route index element={< Home />} />
                        <Route path='/signup' element={<SignUp />} />
                        <Route path='/signin' element={<SignIn />} />
                        <Route path='/courses' element={<Courses />} />
                        <Route path='/courses/chapter' element={<Chapter />} />
                        <Route path='/courses/chapter/lectuers' element={<Lectures />} />
                        <Route path='/courses/chapter/lectuers/videos' element={<Videos />} />
                    </Route>
                    <Route element={<SidebarLayout  />}>
                      <Route path='/dashbord' element={<Dashbord />} />
                      <Route path='/dashbord/MngCourses' element={<ManageCourses />} />
                      <Route path='/dashbord/MngCourses/MngChapter' element={<ManageChapter />} />
                      <Route path='/dashbord/MngCourses/MngChapter/MngLec' element={<ManageLectures />} />
                      <Route path='/dashbord/MngCourses/MngChapter/MngLec/MngHomework' element={<MngHomeWorks />} />
                      <Route path='/dashbord/students' element={<ManageStudents />} />
                      <Route path='/dashbord/notification' element={<Notification />} />
                      <Route path='/dashbord/profile' element={<Profile />} />
                    </Route>
                </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
