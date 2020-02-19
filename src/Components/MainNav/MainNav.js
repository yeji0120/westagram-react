import React from "react";
import MainInput from "../MainInput";

import logoImg from '../../assets/logo-img.png';
import logoText from '../../assets/logo-text.png';

class MainNav extends React.Component{
    render(){
        return(
            <div className="nav-container">
                <div className="nav-var-container">
                    <div className="nav-left-icon">
                        <img
                            className="logo-img"
                            src={logoImg}
                            alt="logo"
                        />
                        <img
                            className="logo-text"
                            src={logoText}
                            alt="logo-text"
                        />
                    </div>
                    <MainInput />
                    <div className="nav-right-icon">
                        <img
                            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                            alt="nav-right-icon"
                        />
                        <img
                            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                            alt="nav-right-icon"
                        />
                        <img
                            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                            alt="nav-right-icon"
                        />
                    </div>
                </div>
            </div>
        );
    }
}


export default MainNav;