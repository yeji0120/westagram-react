import React from 'react';
import LoginInput from '../../Components/LoginInput'
import {Link} from "react-router-dom"
import './Login.css'

import logoText from '../../assets/logo-text.png';
import facebookIcon from '../../assets/facebook-icon.png';

class Login extends React.Component{
    constructor(){
        super();
        this.state={
            email : "",
            password : ""
        }
    }
    // 여기에 함수 작성
    test=()=>{
        this.btnHandler();
    }
    btnHandler=(e)=>{
        if(e.target.type === "text"){
            this.setState({
               email : e.target.value
            })
        }
        else if(e.target.type === "password"){
            this.setState({
                password : e.target.value
            })
        }
    }

    render(){
        return(
            <div className="main-container">
                <div className="login-container">
                    <div className="inner-container">
                        <img
                            className="login-logo-img"
                            src={logoText}
                            alt="login-logo"
                        />
                        <LoginInput email={this.state.email} password={this.state.password} btnHandler={this.btnHandler} />
                        <Link to={this.state.email.length>6 && this.state.password.length>6 ? "/":"/login"}>
                            <button
                                className={this.state.email.length>6 && this.state.password.length>6 ? "login-btn-hover" : "login-btn"}
                            >로그인</button>
                        </Link>
                        <div className="or-container">
                            <div className="or-line"></div>
                            <div className="or">또는</div>
                            <div className="or-line"></div>
                        </div>
                        <div className="fb-container">
                            <img
                                className="fb-icon"
                                src={facebookIcon}
                                alt="fb-icon"
                            />
                            <div className="fb-text">Facebook으로 로그인</div>
                        </div>
                        <div className="forgot-password">비밀번호를 잊으셨나요?</div>
                    </div>
                </div>  
            </div>
        );
    }
}

export default Login;