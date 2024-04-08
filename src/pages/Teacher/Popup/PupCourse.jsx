import { faClose, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createTutorial } from '../../../store/courses/coursesSlice';

function PupCourse(props) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const dispatch = useDispatch();
    return (
        <>
            <div className="popup">
                <div className="content-popup">
                    <FontAwesomeIcon icon={faClose} className='icon-popup-closed' onClick={props.closePopup} />
                    <h4>اضافه دوره جديده</h4>
                    <form action="">
                        <label htmlFor="">اسم الدوره</label>
                        <input type="text" name="" id="" onChange={(e) => setTitle(e.target.value)} />
                        <label htmlFor="">الوصف</label>
                        <input type="text" name="" id="" onChange={(e) => setAuthor(e.target.value)} />
                        <label htmlFor="">السعر</label>
                        <input type="number" name="" id="" />
                        <label htmlFor="">اضف صوره غلاف الدوره</label>
                        <div className='input-img'>
                            <label htmlFor="upload">Upload Aditional file<FontAwesomeIcon icon={faUpload} className='icon-upload-img' /></label>
                            <input type="file" id="upload" hidden name="img" accept="image/*" />
                        </div>
                        <input type="submit" value="نشر"
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(createTutorial( { title , author}))
                            }}
                        />
                    </form>
                </div>
            </div>
        </>
    )
}

export default PupCourse