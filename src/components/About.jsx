import '../static/css/About.css'
import '../static/css/css-gg.css'
import LandScape from '../static/images/landscape.jpg'
function About({darkModeClass}) {
    return (
        <div className="about">
            <div className={`about-img-container ${darkModeClass}`}>
                <div className={`about-img-card ${darkModeClass}`}>
                    <img src={LandScape} alt="Bryce Canyon" className="about-img" aria-label='Main pic of about page' />
                </div>
            </div>
            <div className="about-intro-container">
                <div className={`about-intro-header-card ${darkModeClass}`}>
                    <div className="about-intro-header-text" aria-label='The title of about page'>About National Park </div>
                </div>
                <div className={`about-intro-main-card ${darkModeClass}`} aria-label='The intro of about page' >
                    <p className={`about-intro-main-text ${darkModeClass}`}>
                    The U.S. National Parks are like a collection of nature's greatest hits—over 400 breathtaking sites from majestic canyons to historic landmarks. They're not just places; they're adventures waiting to happen, whether you're hiking, stargazing, or uncovering the stories etched in their landscapes.
                        <br />
                        These parks are the heartbeats of America, inviting you to explore and make memories in the great outdoors.</p>
                </div>
                <div className={`about-intro-tag-card ${darkModeClass}`} aria-label='The intro tags of about page'>
                    <div className="about-intro-tag-label">History</div>
                    <div className="about-intro-tag-label">Nature</div>
                    <div className="about-intro-tag-label">Hiking</div>
                    <div className="about-intro-tag-label">Photo</div>
                    <div className="about-intro-tag-label">Camping</div>
                    <div className="about-intro-tag-label">Animals</div>
                </div>
                <div className={`about-intro-icon-card ${darkModeClass}`} aria-label='The link of US National Park offical website'>
                    <a href="https://www.nps.gov/index.htm" data-position="bottom center"><i className="gg-smile-mouth-open"></i></a>
                </div>
            </div>
        </div>
    );
}

export default About;