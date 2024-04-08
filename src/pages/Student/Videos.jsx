import { faAngleDown, faAngleLeft, faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'



function Videos() {

    
    return (
        <div>
            <div className="background-gradient"></div>
            <div className="container show-videos">
                

                <div className="video-session">
                    <video controls>
                        <source src="./../img/إذن من أين يأتي الحزن يا ليلى _ الليالي الأربع _ أحمد بخيت #شعر.mp4" type="video/mp4" />
                    </video>
                    <div className="video-info-nav">
                        <div className='path-video'>
                            <p>الفصل الاول</p>
                            <FontAwesomeIcon icon={faAngleLeft} className='icon-angle-left'/>
                            <p>فيديو الفصل الاول</p>
                        </div>
                        <button className="attachments">
                            <FontAwesomeIcon icon={faDownload}  className='icon-download'/>
                            مرفقات المحاضره
                        </button>
                    </div>
                </div>


                <div className="list-videos">
                    <ul>
                        <li>
                            <button className='dropdown'>الفصل الاول</button>
                            <FontAwesomeIcon icon={faAngleDown} className='angle-down' />
                            <div className="dropdown-content" >
                                <p> <span><FontAwesomeIcon icon={faCircleCheck} />  الفديو الاول </span><span>2:20</span></p>
                                <p> <span><FontAwesomeIcon icon={faCircleCheck} />  الفديو الاول </span><span>2:20</span></p>
                                <p> <span><FontAwesomeIcon icon={faCircleCheck} />  الفديو الاول </span><span>2:20</span></p>

                            </div>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Videos