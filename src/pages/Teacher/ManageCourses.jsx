import { faNewspaper, faPen, faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import PupCourse from './Popup/PupCourse'

function ManageCourses() {
    const [open, setOpen] = useState(false);
    return (
        <>
            {open ? <PupCourse closePopup={() => setOpen(false)} /> : null}
            <div className="background-gradient-admin"></div>
            <div className="container-admin">
                <div className="manage-courses">
                    <div className="head-manage-courses">
                        <p>الدورات <span>/</span></p>
                        <h3>جميع الدورات</h3>
                        <div className="action-bar">
                            <button onClick={() => setOpen(true)}><FontAwesomeIcon icon={faPlusCircle} className='icon-admin-style' />اضافه دورة جديده</button>
                            <div className="search-action-bar">
                                <button><FontAwesomeIcon icon={faSearch} className='icon-admin-style' /></button>
                                <input type="search" placeholder='بحث' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="chapters">
                    <div className="chapter">
                        <h6> الفصل الاول</h6>
                        <span><FontAwesomeIcon icon={faPen} /></span>
                        <p>الطاقه الحراريه ومصادرها المتجدده كلها في مجموعه فديوات على هذه القائمه</p>
                        <div className="counts-num">
                            <button>افتح</button>
                            <p>+120 <span><FontAwesomeIcon icon={faNewspaper} /></span>  </p>
                        </div>
                    </div>
                    <div className="chapter">
                        <h6> الفصل الاول</h6>
                        <span><FontAwesomeIcon icon={faPen} /></span>
                        <p>الطاقه الحراريه ومصادرها المتجدده كلها في مجموعه فديوات على هذه القائمه</p>
                        <div className="counts-num">
                            <button>افتح</button>
                            <p>+120 <span><FontAwesomeIcon icon={faNewspaper} /></span>  </p>
                        </div>
                    </div>
                    <div className="chapter">
                        <h6> الفصل الاول</h6>
                        <span><FontAwesomeIcon icon={faPen} /></span>
                        <p>الطاقه الحراريه ومصادرها المتجدده كلها في مجموعه فديوات على هذه القائمه</p>
                        <div className="counts-num">
                            <button>افتح</button>
                            <p>+120 <span><FontAwesomeIcon icon={faNewspaper} /></span>  </p>
                        </div>
                    </div>
                    <div className="chapter">
                        <h6> الفصل الاول</h6>
                        <span><FontAwesomeIcon icon={faPen} /></span>
                        <p>الطاقه الحراريه ومصادرها المتجدده كلها في مجموعه فديوات على هذه القائمه</p>
                        <div className="counts-num">
                            <button>افتح</button>
                            <p>+120 <span><FontAwesomeIcon icon={faNewspaper} /></span>  </p>
                        </div>
                    </div>
                    <div className="chapter">
                        <h6> الفصل الاول</h6>
                        <span><FontAwesomeIcon icon={faPen} /></span>
                        <p>الطاقه الحراريه ومصادرها المتجدده كلها في مجموعه فديوات على هذه القائمه</p>
                        <div className="counts-num">
                            <button>افتح</button>
                            <p>+120 <span><FontAwesomeIcon icon={faNewspaper} /></span>  </p>
                        </div>
                    </div>
                    <div className="chapter">
                        <h6> الفصل الاول</h6>
                        <span><FontAwesomeIcon icon={faPen} /></span>
                        <p>الطاقه الحراريه ومصادرها المتجدده كلها في مجموعه فديوات على هذه القائمه</p>
                        <div className="counts-num">
                            <button>افتح</button>
                            <p>+120 <span><FontAwesomeIcon icon={faNewspaper} /></span>  </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ManageCourses