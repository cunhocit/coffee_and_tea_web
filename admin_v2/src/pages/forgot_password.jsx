/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCoffee, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { ForgotPasswordAPI } from '../app/api/auth';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const handleForgotPassword = () => {
        ForgotPasswordAPI(email);
    }

    return(
        <>
        <HelmetProvider>
            <Helmet> <title>Quên mật khẩu</title> </Helmet>

            <div className="wrap-form-login" >
                <div className="login-box">
                    <h1>Quên mật khẩu
                        <FontAwesomeIcon icon={faCoffee} />
                    </h1>

                    <div className="input-box">
                        <label htmlFor="">
                            <FontAwesomeIcon icon={faUser} />
                            <input type="email" placeholder="Email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className='login-box-btn' onClick={handleForgotPassword}>
                        <button className='login-btn'>
                            Gửi mật khẩu mới
                            <FontAwesomeIcon icon={faLeaf} style={{marginLeft: '5px'}}/>
                        </button>
                    </div>

                    <div className="label-register">
                        <p>Tôi nhớ ra mật khẩu rồi!</p>
                        <Link to={'/login'}>Đăng nhập</Link>
                        <FontAwesomeIcon icon={faLeaf} />
                    </div>

                    <div className='bottom-box'>
                        <div className='box-icons'>
                            <FontAwesomeIcon className='fa-fb' icon={faFacebook} />
                            <FontAwesomeIcon className='fa-gg' icon={faGoogle} />
                            <FontAwesomeIcon className='fa-tt' icon={faTwitter} />
                        </div>
                    </div>
                </div>
            </div>

        </HelmetProvider>
        </>
    )
}