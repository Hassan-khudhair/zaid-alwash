import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faBookOpenReader, faCheckToSlot,   faEllipsis,  faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import PupLec from './Popup/PupLec'
import { Link } from 'react-router-dom'

function ManageLectures() {
    const [open, setOpen] = useState(false);
    return (
        <>{open ? <PupLec closePopup={() => setOpen(false)} /> : null}
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
                                    <Link to=''  className='link-in-route'>
                                        <p className='actions-foucs-lec'>  <span><FontAwesomeIcon icon={faBookOpenReader} /></span> الدروس</p>
                                    </Link>
                                    <Link to='/dashbord/MngCourses/MngChapter/MngLec/MngHomework' className='link-in-route'>
                                        <p>  <span><FontAwesomeIcon icon={faCheckToSlot} /></span> الواجبات</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <button onClick={() => setOpen(true)}>
                            <FontAwesomeIcon icon={faPlusCircle} className='icon-admin-style' />
                            اضافة فديو
                        </button>
                    </div>
                    <div className="list-video-lec">
                        <div className="head-list-video-lec">
                            <h3>الفصل الاول </h3>
                            <FontAwesomeIcon icon={faEllipsis} className="icon-head-list-video-lec" />
                        </div>
                        <div className="content-list-video-lec">
                            <input type="text" value='الفديوالاول' />
                            <div className="icons-action-list">
                                <FontAwesomeIcon icon={faTrashCan} className='first-icon-action' />
                                <FontAwesomeIcon icon={faPenToSquare} className='second-icon-action' />
                                <FontAwesomeIcon icon={faEye} className='third-icon-action' />
                            </div>
                        </div>
                        <div className="content-list-video-lec">
                            <input type="text" value='الفديوالاول' />
                            <div className="icons-action-list">
                                <FontAwesomeIcon icon={faTrashCan} className='first-icon-action' />
                                <FontAwesomeIcon icon={faPenToSquare} className='second-icon-action' />
                                <FontAwesomeIcon icon={faEye} className='third-icon-action' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageLectures