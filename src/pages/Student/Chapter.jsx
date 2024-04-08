import { faBookOpenReader, faCheckToSlot, faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Chapter() {

    return (
        <div>
            <div className="background-gradient">

            </div>
            <div className="lectures container">
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
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipem ipsum dolor sit amet consectetur adipisicing elit. Explicabo est commodi modi eveniet esse, quas aut sed soluta ad quia.</p>
                <div className="chapters">
                    <div className="chapter">
                        <h6> الفصل الاول</h6>
                        <p>الطاقه الحراريه ومصادرها المتجدده كلها في مجموعه فديوات على هذه القائمه</p>
                        <div className="counts-num">
                            <button>افتح</button>
                            <p>+120 <span><FontAwesomeIcon icon={faClipboardList} /></span>  </p>
                        </div>
                    </div>
                    <div className="chapter">
                        <h6> الفصل الاول</h6>
                        <p>الطاقه الحراريه ومصادرها المتجدده كلها في مجموعه فديوات على هذه القائمه</p>
                        <div className="counts-num">
                            <button>افتح</button>
                            <p>+120 <span><FontAwesomeIcon icon={faClipboardList} /></span>  </p>
                        </div>
                    </div>
                    <div className="chapter">
                        <h6> الفصل الاول</h6>
                        <p>الطاقه الحراريه ومصادرها المتجدده كلها في مجموعه فديوات على هذه القائمه</p>
                        <div className="counts-num">
                            <button>افتح</button>
                            <p>+120 <span><FontAwesomeIcon icon={faClipboardList} /></span>  </p>
                        </div>
                    </div>
                    <div className="chapter">
                        <h6> الفصل الاول</h6>
                        <p>الطاقه الحراريه ومصادرها المتجدده كلها في مجموعه فديوات على هذه القائمه</p>
                        <div className="counts-num">
                            <button>افتح</button>
                            <p>+120 <span><FontAwesomeIcon icon={faClipboardList} /></span>  </p>
                        </div>
                    </div>
                    <div className="chapter">
                        <h6> الفصل الاول</h6>
                        <p>الطاقه الحراريه ومصادرها المتجدده كلها في مجموعه فديوات على هذه القائمه</p>
                        <div className="counts-num">
                            <button>افتح</button>
                            <p>+120 <span><FontAwesomeIcon icon={faClipboardList} /></span>  </p>
                        </div>
                    </div>
                    <div className="chapter">
                        <h6> الفصل الاول</h6>
                        <p>الطاقه الحراريه ومصادرها المتجدده كلها في مجموعه فديوات على هذه القائمه</p>
                        <div className="counts-num">
                            <button>افتح</button>
                            <p>+120 <span><FontAwesomeIcon icon={faClipboardList} /></span>  </p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Chapter