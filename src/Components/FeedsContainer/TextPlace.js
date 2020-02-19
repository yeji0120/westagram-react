import React from "react";

class TextPlace extends React.Component{
    constructor(){
        super();
        this.state={
            feedMessage : [],
            messageInput : ""
        }
    }

    handleText=(e)=>{
        this.setState({messageInput:e.target.value},()=>console.log(this.state))
    }
    sendMessage=(e)=>{
        const {feedMessage, messageInput}=this.state;
        e.preventDefault()
        this.setState({feedMessage:feedMessage.concat(messageInput), messageInput:""} ,()=>console.log(this.state.feedMessage))
        return false;
    }
    
    render(){
        return(
            <>
                <div>
                    <div className="text-place">
                        {this.state.feedMessage.map((el, index)=>{
                            return(
                                <div key={index} className="msgContainer">
                                    <span className="message">{el}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <form>
                    <div className="text-container">
                    <input
                        className="text-input"
                        type="text"
                        placeholder="댓글 달기..."
                        onChange={this.handleText}
                        value={this.state.messageInput}
                    />
                    <button
                        type="submit"
                        className="send-btn"
                        onClick={this.sendMessage}
                        style={this.state.messageInput.length > 0 ? {opacity:"1"} : null}
                    >
                        게시
                    </button>
                    </div>
                </form>
            </>
        );
    }
}

export default TextPlace;