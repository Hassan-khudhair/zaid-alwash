import { faBookOpenReader, faCheckToSlot, faComputer, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import imgvideo from './../../assets/img/bf.jpg'

function Lectures() {
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
                        <button>شراء</button>
                    </div>
                    <hr />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipem ipsum dolor sit amet consectetur adipisicing elit. Explicabo est commodi modi eveniet esse, quas aut sed soluta ad quia.</p>
                <div className="lec-videos">
                    <div className="lec-head-free">
                        <p> <span><FontAwesomeIcon icon={faComputer} /></span> الدروس المجانيه </p>
                    </div>
                    <div className="lec-videos-list">
                        <Link className='single-card-vid'>
                            <FontAwesomeIcon icon={faPlay} className='icon-play' />
                            <img src={imgvideo} alt="" />
                            <h3>الفديو الاول</h3>
                        </Link>
                        <Link className='single-card-vid'>
                            <FontAwesomeIcon icon={faPlay} className='icon-play' />
                            <img src={imgvideo} alt="" />
                            <h3>الفديو الاول</h3>
                        </Link>
                        <Link className='single-card-vid'>
                            <FontAwesomeIcon icon={faPlay} className='icon-play' />
                            <img src={imgvideo} alt="" />
                            <h3>الفديو الاول</h3>
                        </Link>


                    </div>
                </div>
            </div>
        </div >
    )
}

export default Lectures