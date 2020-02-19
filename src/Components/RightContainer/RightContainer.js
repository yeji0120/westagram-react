import React from "react";

import rightHeaderImg from '../../assets/right-header-img.jpeg';
import storyImg1 from '../../assets/story-img1.jpeg';
import storyImg2 from '../../assets/story-img2.jpeg';
import storyImg3 from '../../assets/story-img3.jpeg';
import storyImg4 from '../../assets/story-img4.jpeg';
import storyImg5 from '../../assets/story-img5.jpeg';
import recommendImg1 from '../../assets/recommend-img1.jpeg';
import recommendImg2 from '../../assets/recommend-img2.jpeg';
import recommendImg3 from '../../assets/recommend-img3.jpeg';
import recommendImg4 from '../../assets/recommend-img4.jpeg';
import footerImg from '../../assets/footer-img.png';

class RightContainer extends React.Component{
    render(){
        return(
            <div className="right-container">
                <div className="right-header">
                    <img
                        className="right-header-img"
                        src={rightHeaderImg}
                        alt="right-header"
                    />
                    <div className="right-header-text">Hotel_Del_Luna</div>
                </div>

                <div className="story-container">
                    <div className="story-header">
                        <div className="story">스토리</div>
                        <div className="story-more">모두 보기</div>
                    </div>
                    <div className="right-profile">
                        <div>
                            <img
                                className="story-img"
                                src={storyImg1}
                                alt="story"
                            />
                        </div>
                        <div>
                            <div className="story-name">siik_kim</div>
                            <div className="story-time">10분 전</div>
                        </div>
                    </div>
                    <div className="right-profile">
                        <div>
                            <img
                                className="story-img"
                                src={storyImg2}
                                alt="story"
                            />
                        </div>
                        <div>  
                            <div className="story-name">seohui_choi</div>
                            <div className="story-time">20분 전</div>
                        </div>
                    </div>
                    <div className="right-profile">
                        <div>
                            <img
                                className="story-img"
                                src={storyImg3}
                                alt="story"
                            />
                        </div>
                        <div>
                            <div className="story-name">hyeonjung_ji</div>
                            <div className="story-time">30분 전</div>
                        </div>
                    </div>
                    <div className="right-profile">
                        <div>
                            <img
                                className="story-img"
                                src={storyImg4}
                                alt="story"
                            />
                        </div>
                        <div>
                            <div className="story-name">junseok_no</div>
                            <div className="story-time">1시간 전</div>
                        </div>
                    </div>
                    <div className="right-profile">
                        <div>
                            <img
                                className="story-img"
                                src={storyImg5}
                                alt="story"
                            />
                        </div>
                        <div>
                            <div className="story-name">yuna_kim</div>
                            <div className="story-time">2시간 전</div>
                        </div>
                    </div>
                </div>
                
                <div className="recommend-container">
                    <div className="recommend-header">
                        <div className="recommend">회원님을 위한 추천</div>
                        <div className="recommend-more">모두 보기</div>
                    </div>

                    <div className="recommend-profile">
                        <div className="recommend-person">
                            <img
                                className="recommend-img"
                                src={recommendImg1}
                                alt="recommend"
                            />
                            <div className="recommend-name">sanchez</div>
                        </div>
                        <div>
                            <div className="follow">팔로우</div>
                        </div>
                    </div>
                    <div className="recommend-profile">
                        <div className="recommend-person">
                            <img
                                className="recommend-img"
                                src={recommendImg2}
                                alt="recommend"
                            />
                            <div className="recommend-name">mira_lee</div>
                        </div>
                        <div>
                            <div className="follow">팔로우</div>
                        </div>
                    </div>
                    <div className="recommend-profile">
                        <div className="recommend-person">
                            <img
                                className="recommend-img"
                                src={recommendImg3}
                                alt="recommend"
                            />
                            <div className="recommend-name">cheongmyeong_go</div>
                        </div>
                        <div>
                            <div className="follow">팔로우</div>
                        </div>
                    </div>
                    <div className="recommend-profile">
                        <div className="recommend-person">
                            <img
                                className="recommend-img"
                                src={recommendImg4}
                                alt="recommend"
                            />
                            <div className="recommend-name">yeonu</div>
                        </div>
                        <div>
                            <div className="follow">팔로우</div>
                        </div>
                    </div>
                </div>

                <div>
                    <img
                        className="footer-img"
                        src={footerImg}
                        alt="footer"
                    />
                </div>
            </div>
        );
    }
}

export default RightContainer;