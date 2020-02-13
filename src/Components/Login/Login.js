import React from 'react';
import logoText from '../imgs/logoText.png';
import facebookIcon from '../imgs/facebookIcon.png';

class Login extends React.Component{
    retnder(){
        return(
            <>
                <div className="main-container">
                    <div className="login-container">
                        <div className="inner-container">
                            <img
                                className="logo-img"
                                src={logoText}
                                alt="description"
                            />
                            <div>
                                <input
                                    oninput="btnHandler()"
                                    className="id-input"
                                    type="text"
                                    placeholder="전화번호, 사용자 이름 또는 이메일"
                                />
                                <input
                                    oninput="btnHandler()"
                                    className="password-input"
                                    type="password"
                                    placeholder="비밀번호"
                                />
                            </div>
                            <button onclick="pagePush()" className="login-btn">로그인</button>
                            <div class="or-container">
                                <div className="or-line"></div>
                                <div className="or">또는</div>
                                <div className="or-line"></div>
                            </div>
                            <div class="fb-container">
                                <img
                                    className="fb-icon"
                                    src={facebookIcon}
                                    alt="description"
                                />
                                <div className="fb-text">Facebook으로 로그인</div>
                            </div>
                            <div className="forgot-password">비밀번호를 잊으셨나요?</div>
                        </div>
                    </div>  
                </div>
            </>
        );
    }
}

export default Login;