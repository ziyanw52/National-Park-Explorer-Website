import '../static/css/ExploreDetail.css'
import Comment from './Comment';
import Animals1 from '../static/images/Animals1.jpg';
import Animals2 from '../static/images/Animals2.jpg'
function AnimalsExploreDetail({ darkModeClass, isLogin, user, loginFormRef }) {
    return (
        <div className={`explore-detail ${darkModeClass}`}>
            <div className={`detail-container ${darkModeClass}`}>
                <div className='detail-title' aria-label='Explore detail title'>
                    Animals
                </div>
                <div className='detail-content' aria-label='Explore detail content'>
                    <dl>
                        <dt><strong>Explore Animall Kingdom:</strong></dt>
                        <dd>Go to the national park, you will have the chance to encounter a variety of breathtaking wildlife. Strolling through vast grasslands, you might witness the majestic American bison freely grazing, their imposing presence leaving a lasting impression. Walking along crystal-clear rivers, mule deer may lower their heads to graze by the water's edge, their gracefulness captivating. Beneath the vast sky, you may spot eagles soaring or listen to the melodious songs of birds in the forest.</dd>
                        <dd>
                            <blockquote className={`detail-blockquote detail-shadow ${darkModeClass}`}>
                                <dt><strong>What animals you may see:</strong></dt>
                                American Bison, Bears, Elk, Wolves, Deer, Foxes, Birds, etc.
                            </blockquote>
                        </dd>

                        <dt><strong>Explore the YellowStone National Park:</strong></dt>

                        <dd>American Bison: Yellowstone is one of the largest habitats for American bison in the United States. They graze freely on the vast grasslands, symbolizing the park's iconic wildlife.
                            <br /><br />
                            Bears: Both grizzly bears and black bears inhabit Yellowstone. You may spot them from a distance or along the edges of the park's roads.
                            <br /><br />
                            Bighorn Sheep: The mountainous regions of the park are home to bighorn sheep, and you might see them on steep cliffs and slopes.</dd>
                    </dl>
                    <img className='detail-img' src={Animals1} alt="Elk" />

                    <dl>
                        <dt><strong>Explore the Bryce Canyon:</strong></dt>
                        <dd>
                            <blockquote className={`detail-blockquote detail-shadow ${darkModeClass}`}>You may encounter various wildlife species that inhabit the high-altitude desert ecosystem of the region.</blockquote>
                        </dd>
                        <dd>Squirrels: There are various squirrel species in the Bryce Canyon area, including red squirrels and gray squirrels. They are often seen moving about in trees and rocks, searching for food.
                            <br /><br />
                            Deer: Both mule deer and white-tailed deer are common in the region. They may be spotted grazing in grassy areas near the canyon.</dd>
                    </dl>
                    <img className='detail-img' src={Animals2} alt="Fox" />
                    <dl>
                        <dd>
                            <blockquote className={`detail-blockquote detail-shadow ${darkModeClass}`}>
                                <dt><strong>Question: What other wildlife have you encountered in the national park?</strong></dt>
                                Share your experiences and observations with other visitors! 
                            </blockquote>
                        </dd>
                    </dl>           
                    <br/><br/>
                </div>
            </div>
            <Comment darkModeClass={darkModeClass} isLogin={isLogin} user={user} loginFormRef={loginFormRef} ></Comment>
        </div>
    );
}

export default AnimalsExploreDetail;