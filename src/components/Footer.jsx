import '../static/css/Footer.css';
import { useState } from 'react';
function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date())
  function generateCurrentTime() {
    setCurrentTime(new Date())
  }

  useState(() => {
    setInterval(generateCurrentTime, 1000)
  }, [])

  return (
    <footer className="footer">
      <div aria-label='Copyright of this website'>
        © 2023 By Ziyan Wang
      </div>
      <a href="https://www.northeastern.edu/">
        Northeastern University
      </a>
      <div className="current-time" aria-label='Current time'>
            {currentTime.toLocaleString()}
        </div>
    </footer>
  );
}

export default Footer;