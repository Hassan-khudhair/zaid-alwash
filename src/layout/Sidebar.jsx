import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignCenter, faBell, faHome, faLock, faNewspaper, faUser } from '@fortawesome/free-solid-svg-icons'
import imglogo from './../assets/img/zaid-alwash.png';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
    const location = useLocation();
    const dashbord = location.pathname==='/dashbord' ? "active-page " : "";
    const CoursesClass = location.pathname.match(/dashbord\/MngCourses/) ? "active-page " : "";
    const StuedentsClass = location.pathname.match(/dashbord\/students/) ? "active-page " : "";
    const NotificaionClass = location.pathname.match(/dashbord\/notification/) ? "active-page " : "";
    const Profileclass = location.pathname.match(/dashbord\/profile/) ? "active-page " : "";


    return (
        <>
            <div className="sidebar">
                <div className="head-sidebar">
                    <Link to='/' className='link-head'>
                        <img src={imglogo} alt='logo-pic' />
                        <h3>ziad alwash</h3>
                    </Link>

                </div>
                <hr />
                <div className="list-sidebar">
                    <ul>
                        <Link className='link-list-sidebar' to="/dashbord">
                            <li className={dashbord} >
                                <FontAwesomeIcon icon={faHome} className='icon-list-sidebar' />
                                <p>Dashbord</p>
                            </li>
                        </Link>
                        <Link className='link-list-sidebar' to="/dashbord/MngCourses">
                            <li className={CoursesClass}>
                                <FontAwesomeIcon icon={faNewspaper} className='icon-list-sidebar' />
                                <p>الكورسات</p>
                            </li>
                        </Link>
                        <Link className='link-list-sidebar' to="/dashbord/students">
                            <li className={StuedentsClass}>
                                <FontAwesomeIcon icon={faAlignCenter} className='icon-list-sidebar' />
                                <p>حسابات الطلاب </p>
                            </li>
                        </Link>
                        <Link className='link-list-sidebar' to="/dashbord/notification">
                            <li className={NotificaionClass}>
                                <FontAwesomeIcon icon={faBell} className='icon-list-sidebar' />
                                <p>التنبيهات</p>
                            </li>
                        </Link>
                        <Link className='link-list-sidebar' to="/dashbord/profile">
                            <li className={Profileclass}>
                                <FontAwesomeIcon icon={faUser} className='icon-list-sidebar' />
                                <p>Profile</p>
                            </li>
                        </Link>
                        <Link className='link-list-sidebar' to="/">
                            <li>
                                <FontAwesomeIcon icon={faLock} className='icon-list-sidebar' />
                                <p>Log Out </p>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar