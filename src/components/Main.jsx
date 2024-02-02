import Home from './Home';
import About from './About';
import Album from './Album';
import '../static/css/Main.css'
import HikingExploreDetail from './HikingExploreDetail'
import CampingExploreDetail from './CampingExploreDetail'
import AnimalsExploreDetail from './AnimalsExploreDetail';
function Main({ darkModeClass, page, changePage, loginFormRef, isLogin, user }) {
  return (
    <main id="main-content" className={`main ${darkModeClass}`}>
      { (page === '/') && <Home darkModeClass={darkModeClass} changePage={changePage}/> }
      { (page === '/about.html') && <About darkModeClass={darkModeClass}/> }
      { (page === '/album.html') && <Album darkModeClass={darkModeClass}/> }
      { (page === '/HikingExplore.html') && <HikingExploreDetail darkModeClass={darkModeClass} user={user} isLogin={isLogin} loginFormRef={loginFormRef}/> }
      { (page === '/CampingExplore.html') && <CampingExploreDetail darkModeClass={darkModeClass} user={user} isLogin={isLogin} loginFormRef={loginFormRef}/> }
      { (page === '/AnimalsExplore.html') && <AnimalsExploreDetail darkModeClass={darkModeClass} user={user} isLogin={isLogin} loginFormRef={loginFormRef}/> }
    </main>
  );
}

export default Main;