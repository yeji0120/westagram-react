import React from "react";

class MainInput extends React.Component{
    render(){
        return(
            <>
             <div>
                <input
                    className="nav-input"
                    type="text"
                    placeholder="검색"
                />
            </div>
            </>
        );
    }
}

export default MainInput;