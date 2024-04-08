import React, { useState } from 'react'
import signimg from './../../assets/img/Saly.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function SignUp() {
    const [isRevealPassword, setIsRevealPassword] = useState(false);
    const [isRevealPasswordTwo, setIsRevealPasswordTwo] = useState(false);
    const togglePassword = () => {
      setIsRevealPassword((prevState) => !prevState);
    }
    const togglePasswordTwo = () => {
      setIsRevealPasswordTwo((prevState) => !prevState);
    }

    return (
        <div>
            <div className="sign-in container">

                <div className="content-info">
                    <h1>تسجيل حساب جديد</h1>
                    <h4>من المهم التأكد من تسجيلك في جهاز واحد فقط</h4>
                    <p>اذا كان لديل حساب سابقا سجل
                        <Link to='/signin' className='route-link'>
                            <span > من هنا</span>
                        </Link>
                    </p>
                    <img src={signimg} alt="" />
                </div>

                <div className="inputs">
                    <h3>تسجيل حساب</h3>
                    <input type="email" name="" id="" placeholder='الايميل' />
                    <input type="text" name="" id="" placeholder='اسم المستخدم' />
                    <input type="number" name="" id="" placeholder='رقم الهاتف' />
                    <input type="number" name="" id="" placeholder='رقم هاتف ولي الامر' />
                    <div className='input-pass'>
                        <FontAwesomeIcon icon={isRevealPassword ? faEye : faEyeSlash} className='icon-eye' id='eye' onClick={togglePassword} />
                        <input type={ isRevealPassword ? "text" : "password"} name="eye" id="eye" placeholder='الرمز' />
                    </div>
                    <div className='input-pass'>
                        <FontAwesomeIcon icon={isRevealPasswordTwo ? faEye : faEyeSlash} className='icon-eye' id='eye' onClick={togglePasswordTwo}  />
                        <input type={isRevealPasswordTwo ? "text" : "password"} name="" id="" placeholder='تأكيد الرمز' />
                    </div>

                    <button>تسجيل</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp