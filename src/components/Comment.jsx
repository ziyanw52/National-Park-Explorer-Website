import Avatar1 from '../static/images/avatar1.jpg'
import Avatar2 from '../static/images/avatar2.jpg'
import Avatar3 from '../static/images/avatar3.jpg'
import '../static/css/Comment.css'
import { useState, useRef } from 'react';
import LoginDialog from './LoginDialog';

function Comment({isLogin, user, loginFormRef, darkModeClass}) {
    const [isSend, setIsSend] = useState(false);
    const [comment, setComment] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const confirmLoginDialogRef = useRef(null);

    function onSendBtn(event) {
        if(!isLogin){
            confirmLoginDialogRef.current.showModal();
        }else{
            let time = new Date()
            setCurrentTime(time.toLocaleString())
            setIsSend(!isSend);
            event.preventDefault();
        }
    };

    function onInputChange(e) {
        setComment(e.target.value);
        if(isSend){
            setComment("");
        }
        setIsSend(false);
    }

    return (
        <div className={`container ${darkModeClass}`}>
            <div className="comment-send">
                <form className='comment-form'>
                    <span className="comment-avatar" aria-label='Your comment avatar'>
                        <img src={Avatar3} alt="avatar" />
                    </span>
                    <textarea className="comment-send-input" aria-label='The input of the comment' value={comment} onChange={e => onInputChange(e)} name="comment" form="commentForm" cols="80" rows="5" placeholder="Please enter your comment"></textarea>
                    <input className="comment-send-button" aria-label='Send button of the input' type="button" onClick={onSendBtn} value="Send" />
                </form>
            </div>
            <div className="comment-list" id="commentList">
                <div className="comment">
                    <span className="comment-avatar">
                        <img src={Avatar1} alt="avatar" aria-label='The avatar of reviewer' />
                    </span>
                    <div className="comment-content">
                        <p className="comment-content-name" aria-label='The username of reviewer'>Jennifer</p>
                        <p className="comment-content-article" aria-label='The comment of reviewer'>I also love Bryce Canyon!</p>
                        <p className="comment-content-footer" aria-label='The footer of comment'>
                            <span className="comment-content-footer-timestamp">2023-12-11 8:00</span>
                            <span className="comment-content-footer-device">iphone 13 pro max</span>
                            <span className="comment-content-footer-id">From Los Angeles</span>
                        </p>
                    </div>
                    <div className="cls"></div>
                </div>
                <div className="comment">
                    <span className="comment-avatar" aria-label='The avator of reviewer'>
                        <img src={Avatar2} alt="avatar" />
                    </span>
                    <div className="comment-content">
                        <p className="comment-content-name" aria-label='The username of reviewer'>Ben</p>
                        <p className="comment-content-article" aria-label='The comment of reviewer'>Thank you! I learn a lot from your article</p>
                        <p className="comment-content-footer" aria-label='The footer of comment'>
                            <span className="comment-content-footer-timestamp">2023-12-12 11:39</span>
                            <span className="comment-content-footer-device">iphone 15 pro</span>
                            <span className="comment-content-footer-id">From San Jose</span>
                        </p>
                    </div>
                    <div className="cls"></div>
                </div>
                {isSend ? <>
                    <div className="comment">
                        <span className="comment-avatar" aria-label='Your avatar'>
                            <img src={Avatar3} alt="avatar" />
                        </span>
                        <div className="comment-content">
                            <p className="comment-content-name" aria-label='Your username'>{user['username']}</p>
                            <p className="comment-content-article" aria-label='Your comment'>{comment}</p>
                            <p className="comment-content-footer">
                                <span className="comment-content-footer-timestamp">{currentTime}</span>
                                <span className="comment-content-footer-device">iphone 14</span>
                                <span className="comment-content-footer-id">From New York</span>
                            </p>
                        </div>
                        <div className="cls"></div>
                    </div>
                </> : <></>}
            </div>
            <LoginDialog loginFormRef={loginFormRef} confirmLoginDialogRef={confirmLoginDialogRef} />
        </div>
    );
}

export default Comment;