import React from "react";

import likeImg from '../../assets/like-img.jpeg';

class ArtIconContainer extends React.Component{
    render(){
        return(
            <>
                <div className="art-icon-container">
                    <div className="art-left-icon">
                        <img
                            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                            alt="art-left-icon"
                        />
                        <img
                            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                            alt="art-left-icon"
                        />
                        <img
                            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
                            alt="art-left-icon"
                        />
                    </div>

                    <div>    
                        <img
                            className="art-right-icon"
                            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
                            alt="art-right-icon"
                        />
                    </div>
                </div>

                <div className="art-like-container">
                    <img
                        className="like-img"
                        src={likeImg}
                        alt="like"
                    />
                    <div className="like-text"> glittering_star님 외 10명이 좋아합니다</div>
                </div>
            </>
        );
    }
}

export default ArtIconContainer;