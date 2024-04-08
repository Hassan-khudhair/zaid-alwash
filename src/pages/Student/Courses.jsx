import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import coursePage from './../../assets/img/comp.jpg';
import { Button } from 'react-bootstrap';

function Courses() {
    return (

        <div>
            <div className="background-gradient"></div>
            <div className="courses-home container">
                <div className="head-courses">
                    <h3>الصفوف</h3>
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
        </div>
    )
}

export default Courses