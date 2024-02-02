import HikingCover from '../static/images/Hiking.jpg'
import CampingCover from '../static/images/Camping.jpg'
import AnimalsCover from '../static/images/Animals.jpg'
import '../static/css/Home.css'
import Accordion from './Accordion'

const items = [
    {
        header: 'Contact Me',
        body: '📩 wang.ziyan2@northeastern.edu',
    },
    {
        header: 'My Info',
        body: '👩‍🎓 I am a Master student in Computer Software in Northeastern University. 💻 Familiar with Java, Python, React, Javascript, React, HTML/CSS.',
    },
    {
        header: 'Why This Website',
        body: 'This website is for recording the national park I have been to.',
    }
];

function Home({ changePage, darkModeClass }) {
    return (
        <div className={`home ${darkModeClass}`}>
            <div className='home-card-left fade-in' onClick={(e) => { changePage('/Hiking.html') }} aria-label='Home intro card'>
                <img className='home-cover-left' src={HikingCover} alt="Hiking Cover" aria-label='The cover of home' />
                <div className='home-wrapper'>
                    <div className={`home-title ${darkModeClass}`}>
                        Hiking
                    </div>
                    <div className='home-info'>
                        <h4>Step Into the Wilderness: A Journey Through Nature's Pathways</h4>
                    </div>
                    <div className='home-content'>
                    Embarking on a hiking adventure opens the door to nature's wonders. You'll be treated to breathtaking views of majestic mountains and serene landscapes...
                    </div>
                </div>
            </div>
            <div className='home-card-right fade-in' onClick={(e) => { changePage('/Camping.html') }} aria-label='Home intro card'>
                <img className='home-cover-right' src={CampingCover} alt="Camping Cover" aria-label='The cover of home' />
                <div className='home-wrapper'>
                    <div className={`home-title ${darkModeClass}`}>
                        Camping
                    </div>
                    <div className='home-info'>
                        <h4>Under the Stars: Embrace Adventure in the Wilderness</h4>
                    </div>
                    <div className='home-content'>
                    Unplug, Reconnect, and Embrace Nature's Beauty.
                    </div>
                </div>
            </div>
            <div className='home-card-left fade-in' onClick={(e) => { changePage('/Animals.html') }} aria-label='Home intro card'>
                <img className='home-cover-left' src={AnimalsCover} alt="Animals Cover" aria-label='The cover of this home'/>
                <div className='home-wrapper'>
                    <div className={`home-title ${darkModeClass}`}>
                        Animals
                    </div>
                    <div className='home-info'>
                        <h4>Wild Wonders: Exploring the Diverse Animal Kingdom</h4>
                    </div>
                    <div className='home-content'>
                    Where grizzlies roam, eagles soar, and meadows come alive with deer and playful otters. These protected landscapes offer a front-row seat to the captivating drama of the animal kingdom, inviting you to witness and contribute to the conservation of Earth's biodiversity.
                    </div>
                </div>
            </div>
            <div className="home-divider"></div>
            <div className='home-accordion'>
                <Accordion darkModeClass={darkModeClass} items={items}></Accordion>
            </div>
        </div>
    );
}

export default Home;