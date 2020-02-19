import React from "react";
import '../../Pages/Login/Login.css'

class LoginInput extends React.Component{

    render(){
        return(
            <div>
                <input
                    onChange={this.props.btnHandler}
                    className="email-input"
                    type="text"
                    value={this.props.email}
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                />
                <input
                    onChange={this.props.btnHandler}
                    className="password-input"
                    type="password"
                    value={this.props.password}
                    placeholder="비밀번호"
                />
            </div>
        )
    }
}
export default LoginInput;