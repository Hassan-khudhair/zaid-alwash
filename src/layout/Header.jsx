import React from 'react'
import zaidalwash from './../assets/img/zaid-alwash.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faBell } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const home = location.pathname === '/' ? "active-navbar" : "";
  const CoursesClass = location.pathname === '/courses' ? "active-navbar" : "";
  const MyClass = location.pathname === '/courses/chapter' ? "active-navbar" : "";

  return (
    <div className='container header'>
      <div className='logo'>
        <Link to="/">
          <img src={zaidalwash} alt="لا توجد صوره" />
          <h4>Zaid Alwash</h4>
        </Link>
      </div>
      <ul className="list-navbar">
        <Link to="/courses/chapter"><li className={MyClass}>دورتي</li></Link>
        <Link to="/"><li className={home}>الاساسيه</li></Link>
        <Link to="/courses"><li className={CoursesClass}>الدورات</li></Link>
        <Link to="/"><li>حول المنصه</li></Link>
      </ul>
      <Link to="/signup">
        <button>انضم الان</button>
      </Link>
      <div className='notification-content'>
        <FontAwesomeIcon icon={faBell} className='icon-notification' />
      </div>
      <div className='list-mobile-navbar'>
        <FontAwesomeIcon icon={faBarsStaggered} className='icon-list-mobile' />
        <div className="list-mobile">
          <ul>
            <Link to="/courses/chapter"><li>دورتي</li></Link>
            <Link to="/"><li>الاساسيه</li></Link>
            <Link to="/courses"><li>الدورات</li></Link>
            <Link to="/"><li>حول المنصه</li></Link>
          </ul>
          <div>
            <button>انضم الان</button>
            <button> <FontAwesomeIcon icon={faBell} className='icon-notification-mobile' /> التنبيهات</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header