import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader, faCheckToSlot, faGear, faNewspaper, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import PupChapter from './Popup/PupChapter'
import { Link } from 'react-router-dom';

function ManageChapter() {
    const [open, setOpen] = useState(false);
    return (
        <>
            {open ? <PupChapter closePopup={() => setOpen(false)} /> : null}
            <div className="background-gradient-admin"></div>
            <div className="container-admin">
                <div className="manage-courses lectures">
                    <div className="head-manage-courses">
                        <p>الدورات <span>/</span> الفيزياء</p>
                    </div>
                    <div className="lec-head">
                        <div className="lec-name-square">Phyiscs</div>
                        <div className="lec-info">
                            <div className="lec-name-info">
                                <h3>فيزياء الصف السادس علمي</h3>
                                <div className='actions-lec'>
                                    <Link to='' className='link-in-route'>
                                        <p className='actions-foucs-lec'>  <span><FontAwesomeIcon icon={faBookOpenReader} /></span> الدروس</p>
                                    </Link>
                                    <Link to='' className='link-in-route'>
                                        <p>  <span><FontAwesomeIcon icon={faCheckToSlot} /></span> الواجبات</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <button onClick={() => setOpen(true)}>
                            <FontAwesomeIcon icon={faPlusCircle} className='icon-admin-style' />
                            اضافة فصل
                        </button>
                    </div>
                </div>

                <div className="chapters">
                    <div className="chapter">
                        <h6> الفصل الاول</h6>
                        <span><FontAwesomeIcon icon={faGear} /></span>
                        <p>الطاقه الحراريه ومصادرها المتجدده كلها في مجموعه فديوات على هذه القائمه</p>
                        <div className="counts-num">
                            <button>افتح</button>
                            <p>+120 <span><FontAwesomeIcon icon={faNewspaper} /></span>  </p>
                        </div>
                    </div>
                    <div className="chapter">
                        <h6> الفصل الاول</h6>
                        <span><FontAwesomeIcon icon={faGear} /></span>
                        <p>الطاقه الحراريه ومصادرها المتجدده كلها في مجموعه فديوات على هذه القائمه</p>
                        <div className="counts-num">
                            <button>افتح</button>
                            <p>+120 <span><FontAwesomeIcon icon={faNewspaper} /></span>  </p>
                        </div>
                    </div>
                    <div className="chapter">
                        <h6> الفصل الاول</h6>
                        <span><FontAwesomeIcon icon={faGear} /></span>
                        <p>الطاقه الحراريه ومصادرها المتجدده كلها في مجموعه فديوات على هذه القائمه</p>
                        <div className="counts-num">
                            <button>افتح</button>
                            <p>+120 <span><FontAwesomeIcon icon={faNewspaper} /></span>  </p>
                        </div>
                    </div>
                    <div className="chapter">
                        <h6> الفصل الاول</h6>
                        <span><FontAwesomeIcon icon={faGear} /></span>
                        <p>الطاقه الحراريه ومصادرها المتجدده كلها في مجموعه فديوات على هذه القائمه</p>
                        <div className="counts-num">
                            <button>افتح</button>
                            <p>+120 <span><FontAwesomeIcon icon={faNewspaper} /></span>  </p>
                        </div>
                    </div>
                    <div className="chapter">
                        <h6> الفصل الاول</h6>
                        <span><FontAwesomeIcon icon={faGear} /></span>
                        <p>الطاقه الحراريه ومصادرها المتجدده كلها في مجموعه فديوات على هذه القائمه</p>
                        <div className="counts-num">
                            <button>افتح</button>
                            <p>+120 <span><FontAwesomeIcon icon={faNewspaper} /></span>  </p>
                        </div>
                    </div>
                    <div className="chapter">
                        <h6> الفصل الاول</h6>
                        <span><FontAwesomeIcon icon={faGear} /></span>
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

export default ManageChapter