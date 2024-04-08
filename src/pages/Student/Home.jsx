import React from 'react'
import HomePage from './../../assets/img/header-img.svg'
import aboutPage from './../../assets/img/bf.jpg'
import coursePage from './../../assets/img/comp.jpg'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { retrieveTutorials } from '../../store/courses/coursesSlice'

function Home() {
  const data = useSelector((state) => ({ ...state.courses }))
  console.log(data)
  const dispatch = useDispatch();
  const handleclick = () => {
    dispatch(retrieveTutorials());
  }

  return (
    <div >
      <div className="container home">
        <div className="basic-home">

          <div className='right-basic-home'>
            <button onClick={handleclick}>reload</button>
            <h1>دورات مكثفه لمادة الفيزياء</h1>
            <p>يقدم هذه الدورات الاستاذ القدير زياد علوش ولكافة صفوف الثانوية العامه وبالأخص طلبة السادس الاعدادي قدم هذه الدورات الاستاذ القدير زياد علوش ولكافة صفوف الثانوية العامه وبالأخص طلبة السادس الاعداديقدم هذه الدورات الاستاذ القدير زياد علوش ولكافة صفوف الثانوية العامه وبالأخص طلبة السادس الاعدادي</p>
            <button>جرب الان</button>
          </div>
          <div className='left-basic-home'>
            <img src={HomePage} alt="" />
          </div>
        </div>



        <div className="about-home">
          <div className='left-about-home'>
            <img src={aboutPage} alt="" />
          </div>
          <div className='right-about-home'>
            <h3>دورات مكثفه لمادة الفيزياء</h3>
            <p>يقدم هذه الدورات الاستاذ القدير زياد علوش ولكافة صفوف الثانوية العامه وبالأخص طلبة السادس الاعدادي قدم هذه الدورات الاستاذ القدير زياد علوش ولكافة صفوف الثانوية العامه وبالأخص طلبة السادس الاعداديقدم هذه الدورات الاستاذ القدير زياد علوش ولكافة صفوف الثانوية العامه وبالأخص طلبة السادس الاعدادي</p>
            <button>سجل الان</button>
          </div>

        </div>



        <div className="courses-home">
          <div className="head">
            <h3>الصفوف</h3>
            <button >عرض الكل</button>
          </div>
          <hr />
          <div className="list-courses">
            <div className="course">
              <div className='img-course'>
                <img src={coursePage} alt="" />
                <p> 120 <FontAwesomeIcon icon={faUser} className='user-icon' /> </p>
              </div>
              <h3>fronteend</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dolor</p>
              <div className='action-course'>
                <span>380 $ </span>
                <Button>عرض</Button>
              </div>
            </div>

            <div className="course">
              <div className='img-course'>
                <img src={coursePage} alt="" />
                <p> 120 <FontAwesomeIcon icon={faUser} className='user-icon' /> </p>
              </div>
              <h3>fronteend</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dolor</p>
              <div className='action-course'>
                <span>380 $ </span>
                <Button>عرض</Button>
              </div>
            </div>

            <div className="course">
              <div className='img-course'>
                <img src={coursePage} alt="" />
                <p> 120 <FontAwesomeIcon icon={faUser} className='user-icon' /> </p>
              </div>
              <h3>fronteend</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dolor</p>
              <div className='action-course'>
                <span>380 $ </span>
                <Button>عرض</Button>
              </div>
            </div>
          </div>
        </div>

        <div className='navbar'>
          <div className='contact'>
            <div className="info-contact-nav">
              <h3>تواصل </h3>
              <span>zaid-alwash@gmail.com</span><br />
              <span>7839999939(964+)</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, deserunt.</p>
            </div>
            <div className="icons">
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </div>

          <div className="all-courses">
            <h3>جميع الدورات</h3>
            <div className='all-courses-list'>
              <p>فيزياء السادس العلمي</p>
              <p>فيزياء الخامس العلمي</p>
              <p>فيزياء الرابع العلمي</p>
              <p>فيزياء الثالث المتوسط </p>
              <p>فيزياء الثاني المتوسط </p>
              <p>فيزياء الاول المتوسط </p>
            </div>

          </div>
        </div>
      </div>


      <div className='copyright'>
        <p>Copyright  &copy; 2023 Zaid Alwash</p>
      </div>
    </div>
  )
}

export default Home