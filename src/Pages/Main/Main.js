import React from 'react';
import MainNav from "../../Components/MainNav"
import FeedsContainer from "../../Components/FeedsContainer";
import RightContainer from "../../Components/RightContainer";
import './Main.css'

class Main extends React.Component{
    render(){
        return(
            <div className="main-page-container">
                <MainNav />
                <div className="main-container">
                    <FeedsContainer />
                    <RightContainer />    
                </div>
            </div>
        );
    }
}

export default Main;