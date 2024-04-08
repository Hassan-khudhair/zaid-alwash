import { faBookOpenReader, faCheckToSlot, faEllipsis, faGear, faNewspaper, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function MngHomeWorks() {
    return (
        <>
            <div className="background-gradient-admin"></div>
            <div className="container-admin">
                <div className="manage-courses lectures">
                    <div className="head-manage-courses">
                        <p>الدورات <span>/</span> الفيزياء <span>/</span> الفصل الاول</p>
                    </div>
                    <div className="lec-head">
                        <div className="lec-name-square">Phyiscs</div>
                        <div className="lec-info">
                            <div className="lec-name-info">
                                <h3>فيزياء الصف السادس علمي</h3>
                                <div className='actions-lec'>
                                    <Link to='/dashbord/MngCourses/MngChapter/MngLec' className='link-in-route'>
                                        <p>  <span><FontAwesomeIcon icon={faBookOpenReader} /></span> الدروس</p>
                                    </Link>
                                    <Link to='' className='link-in-route'>
                                        <p className='actions-foucs-lec'>  <span><FontAwesomeIcon icon={faCheckToSlot} /></span> الواجبات</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <button>
                            <FontAwesomeIcon icon={faPlusCircle} className='icon-admin-style' />
                            اضافة واجب
                        </button>
                    </div>
                </div>

                <div className="chapters">
                    <div className="chapter">
                        <h6> الحراره</h6>
                        <span><FontAwesomeIcon icon={faEllipsis} /></span>
                        <p>الطاقه الحراريه ومصادرها المتجدده كلها في مجموعه فديوات على هذه القائمه</p>
                        <div className="counts-num">
                            <button>مشاهده</button>
                            <p> 22/8/2023 </p>
                        </div>
                    </div>
                    <div className="chapter">
                        <h6> الحراره</h6>
                        <span><FontAwesomeIcon icon={faEllipsis} /></span>
                        <p>الطاقه الحراريه ومصادرها المتجدده كلها في مجموعه فديوات على هذه القائمه</p>
                        <div className="counts-num">
                            <button>مشاهده</button>
                            <p> 22/8/2023 </p>
                        </div>
                    </div>
                    <div className="chapter">
                        <h6> الحراره</h6>
                        <span><FontAwesomeIcon icon={faEllipsis} /></span>
                        <p>الطاقه الحراريه ومصادرها المتجدده كلها في مجموعه فديوات على هذه القائمه</p>
                        <div className="counts-num">
                            <button>مشاهده</button>
                            <p> 22/8/2023 </p>
                        </div>
                    </div>
                    <div className="chapter">
                        <h6> الحراره</h6>
                        <span><FontAwesomeIcon icon={faEllipsis} /></span>
                        <p>الطاقه الحراريه ومصادرها المتجدده كلها في مجموعه فديوات على هذه القائمه</p>
                        <div className="counts-num">
                            <button>مشاهده</button>
                            <p> 22/8/2023 </p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default MngHomeWorks