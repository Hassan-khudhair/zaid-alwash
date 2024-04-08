import React, { useState } from 'react'
import signimg from './../../assets/img/Saly.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function SignIn() {
    const [isRevealPassword, setIsRevealPassword] = useState(false);
    const togglePassword = () => {
      setIsRevealPassword((prevState) => !prevState);
    }
    return (
        <div>
            <div className="sign-in container">

                <div className="content-info">
                    <h1>تسجيل الدخول </h1>
                    <h4>من المهم التأكد من تسجيلك في جهاز واحد فقط</h4>
                    <p>اذا لم يكن لديك حساب في المنصه سجل حساب جديد  
                        <Link to='/signup' className='route-link'>
                            <span > من هنا</span>
                        </Link>
                    </p>
                    <img src={signimg} alt="" />
                </div>

                <div className="inputs">
                    <h3>تسجيل الدخول</h3>
                    <input type="email" name="" id="" placeholder='الايميل' />
                    <div className='input-pass'>
                        <FontAwesomeIcon icon={isRevealPassword ? faEye : faEyeSlash} className='icon-eye' id='eye' onClick={togglePassword} />
                        <input type={ isRevealPassword ? "text" : "password"} name="eye" id="eye" placeholder='الرمز' />
                    </div>
                    <button>دخول</button>
                </div>
            </div>
        </div>
    )
}

export default SignIn