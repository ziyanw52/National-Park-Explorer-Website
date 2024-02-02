import Comment from './Comment'
import '../static/css/ExploreDetail.css'
import Hiking1 from '../static/images/Hiking1.jpg'
import Hiking2 from '../static/images/Hiking2.jpg'

function HikingExploreDetail({ darkModeClass, isLogin, user, loginFormRef }) {
    return (
        <div className={`explore-detail ${darkModeClass}`}>
            <div className={`detail-container ${darkModeClass}`}>
                <div className='detail-title' aria-label='Explore detail title'>
                    Hiking
                </div>
                <div className='detail-content' aria-label='Explore detail content'>
                    <dl>
                        <dd>
                            <blockquote className={`detail-blockquote detail-shadow ${darkModeClass}`}>
                                A journey through nature's pathways.
                            </blockquote>
                        </dd>
                        <dd>
                            <img className='detail-img' src={Hiking1} alt="Summer hiking" />
                            <img className='detail-img' src={Hiking2} alt="Winter hiking" />
                            What you need to pay attention for different season hiking?
                            <br></br><br></br>
                            Summer Hiking: Light and breathable clothing, Sunscreen, Adequate hydration, Insect protection, First Aid Kit, Light Rain Gear.
                            <br></br><br></br>
                            Winter Hiking: Dress warmly, Waterproof gear, Sun protection, Food and water, Emergency gear, Snow chain. </dd>
                    </dl>
                </div>
                <br></br><br></br>
            </div>
            <Comment darkModeClass={darkModeClass} isLogin={isLogin} user={user} loginFormRef={loginFormRef} ></Comment>
        </div>
    );
}

export default HikingExploreDetail;