import React from "react";

import profileImg from '../../assets/profile-img.png';

class ArtHeader extends React.Component{
    render(){
        return(
            <div className="art-header">
                <div className="art-profile">
                    <img
                        className="profile-img"
                        src={profileImg}
                        alt="profile"
                    />
                    <div className="profile-name">IU_fullmoon_long</div>
                </div>
                <div>
                    <img
                        className="art-top-left"
                        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                        alt="art-top-left"
                    />
                </div>
            </div>
        );
    }
}

export default ArtHeader;