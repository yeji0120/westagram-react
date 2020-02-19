import React from "react";
import ArtHeader from "./ArtHeader";
import ArtIconContainer from "./ArtIconContainer";
import TextPlace from "./TextPlace";

import artImg from '../../assets/art-img.jpeg';

class FeedsContainer extends React.Component{
    render(){
        return(
            <div className="feeds-container">
                <div className="article">
                    <ArtHeader />
                    <div>
                        <img
                            className="art-img"
                            src={artImg}
                            alt="art"
                        />
                    </div>
                    <ArtIconContainer />
                    <TextPlace />
                </div>
            </div>
        );
    }
}

export default FeedsContainer;