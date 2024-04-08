import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSearch, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faCalendar, faEye, faPenToSquare } from '@fortawesome/free-regular-svg-icons'

function ManageStudents() {
    return (
        <>
            <div className="background-gradient-admin"></div>
            <div className="container-admin">
                <div className="manage-courses students">
                    <div className="head-students-table">
                        <h3>الطلاب</h3>
                        <div className="search-action-bar">
                            <button><FontAwesomeIcon icon={faSearch} className='icon-admin-style' /></button>
                            <input type="search" placeholder='بحث' />
                        </div>
                    </div>

                    <table >
                        <thead>
                            <tr>
                                <th>التسلسل</th>
                                <th> الاسم</th>
                                <th> رقم الهاتف</th>
                                <th> رقم الهاتف</th>
                                <th> تفعيل </th>
                                <th> MAC </th>
                                <th>  التاريخ</th>
                                <th>  </th>
                                <th>  </th>
                                <th>  </th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr>
                                <td>1</td>
                                <td>حسن خضير</td>
                                <td>000000 000</td>
                                <td>000 000 000</td>
                                <td><span>مفعل</span></td>
                                <td>00:03:33:44:45</td>
                                <td>8/8/2023 <FontAwesomeIcon icon={faCalendar}/></td>
                                <td colSpan='3'>
                                    <div className="icons-action-list">
                                        <FontAwesomeIcon icon={faTrashCan} className='first-icon-action' />
                                        <FontAwesomeIcon icon={faPenToSquare} className='second-icon-action' />
                                        <FontAwesomeIcon icon={faEye} className='third-icon-action' />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>حسن خضير</td>
                                <td>000000 000</td>
                                <td>000 000 000</td>
                                <td><span>مفعل</span></td>
                                <td>00:03:33:44:45</td>
                                <td>8/8/2023 <FontAwesomeIcon icon={faCalendar}/></td>
                                <td colSpan='3'>
                                    <div className="icons-action-list">
                                        <FontAwesomeIcon icon={faTrashCan} className='first-icon-action' />
                                        <FontAwesomeIcon icon={faPenToSquare} className='second-icon-action' />
                                        <FontAwesomeIcon icon={faEye} className='third-icon-action' />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>حسن خضير</td>
                                <td>000000 000</td>
                                <td>000 000 000</td>
                                <td><span>مفعل</span></td>
                                <td>00:03:33:44:45</td>
                                <td>8/8/2023 <FontAwesomeIcon icon={faCalendar}/></td>
                                <td colSpan='3'>
                                    <div className="icons-action-list">
                                        <FontAwesomeIcon icon={faTrashCan} className='first-icon-action' />
                                        <FontAwesomeIcon icon={faPenToSquare} className='second-icon-action' />
                                        <FontAwesomeIcon icon={faEye} className='third-icon-action' />
                                    </div>
                                </td>
                            </tr>
                           

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ManageStudents