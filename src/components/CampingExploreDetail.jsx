import Camping1 from '../static/images/Camping1.jpg'
import Comment from './Comment'
import Camping2 from '../static/images/Camping2.jpg'
import '../static/css/ExploreDetail.css'

function CampingExploreDetail({ darkModeClass, isLogin, user, loginFormRef }) {
    return (
        <div className={`explore-detail ${darkModeClass}`}>
            <div className={`detail-container ${darkModeClass}`}>
                <div className='detail-title' aria-label='Explore detail title'>
                    Camping
                </div>
                <div className='detail-content' aria-label='Explore detail content'>
                    <dl>
                        <dd>
                            <blockquote className={`detail-blockquote detail-shadow ${darkModeClass}`}>
                                <dt><strong>Camping Essentials:</strong></dt>
                                Tent and sleeping bags, Cooking utensils and food, Insect repellent, Lighting equipment, First aid kit, Navigation tools, Sleeping pad and chair, Layered clothing.
                            </blockquote>
                        </dd>
                        <dt><strong>Camping Food Suggestions:</strong></dt>
                        <dd>
                            - Canned Goods: Convenient options like canned fruits, beans, chicken, and beef require no refrigeration.
                            <br />
                            - Instant Foods: Instant noodles, quick oats, and cup soups are simple and quick to prepare.
                            <br />
                            - Instant Beverages: Instant coffee, tea bags, and powdered soups are convenient to carry.
                            <br />
                            - Bread and Pastries: Bread, biscuits, and pastries serve as breakfast and lunch options.
                            <br />
                            - Condiments: Hot pot bases, salt, pepper, oil, and other condiments can enhance the flavor of meals.
                            <br />
                            - Donnot forget to grab a bag of marshmallows, chocolate and cookies and enjoy delicious campfire-roasted marshmallow sandwiches. Every bite is a carnival of taste buds and happiness!
                        </dd>
                        <br />
                        <dt><strong>Camping Acitivites:</strong></dt>
                        <dd>
                            <blockquote className={`detail-blockquote detail-shadow ${darkModeClass}`}>
                                
                            </blockquote>
                        </dd>
                    </dl>
                    <img className='detail-img' src={Camping1} alt="Roasted marshmallow sandwiches" />
                    <br />

                    <dl>
                        <dt><strong>Campfire Night:</strong></dt>
                        <dd>
                            <blockquote>Roasting marshmallows, storytelling, playing music, stargazing.</blockquote>
                        </dd>

                    </dl>
                    <img className='detail-img' src={Camping2} alt="Camping activities" />
                    <br /><br />
                </div>
            </div>
            <Comment darkModeClass={darkModeClass} isLogin={isLogin} user={user} loginFormRef={loginFormRef} ></Comment>
        </div>
    );
}

export default CampingExploreDetail;