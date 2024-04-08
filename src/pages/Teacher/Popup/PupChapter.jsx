import { faClose, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function PupChapter(props) {
    return (
        <>
            <div className="popup">
                <div className="content-popup">
                    <FontAwesomeIcon icon={faClose} className='icon-popup-closed' onClick={props.closePopup}  />
                    <h4>اضافه دوره جديده</h4>
                    <form action="">
                        <label htmlFor="">اسم الدوره</label>
                        <input type="text" name="" id="" />
                        <label htmlFor="">الوصف</label>
                        <input type="text" name="" id="" />
                        <label htmlFor="">السعر</label>
                        <input type="number" name="" id="" />
                        <label htmlFor="">اضف صوره غلاف الدوره</label>
                        <div className='input-img'>
                            <label htmlFor="upload">Upload Aditional file<FontAwesomeIcon icon={faUpload} className='icon-upload-img' /></label>
                            <input type="file" id="upload" hidden />
                        </div>
                        <input type="submit" value="نشر" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default PupChapter