import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faClose, faEnvelope, faEye, faGear, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import logos from '../../assets/images/logo-s.png'
import { Link, NavLink } from 'react-router-dom';
import './index.scss';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false)

    return (
      <div className="nav-bar">
        <Link className="logo" to="/" onClick={() => setShowNav(false)}>
          <img src={logos} alt="logo" />
          {/* <img className='sub-logo' src="#" alt="logo" /> */}
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
          <NavLink exact="true" to="/" onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            className="about-link"
            to="/about"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            className="skills-link"
            to="/skills"
            onClick={() => setShowNav(false)}
          >
          <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            className="work-link"
            to="/mywork"
            onClick={() => setShowNav(false)}
          >
          <FontAwesomeIcon icon={faEye} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            className="contact-link"
            to="/contact"
            onClick={() => setShowNav(false)}
          >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
          <FontAwesomeIcon
            onClick={() => setShowNav(false)}
            icon={faClose}
            color="#ffd700"
            size="3x"
            className="close-icon"
          />
        </nav>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/amrish-kumar-b2b489154/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                color="#4d4d4e"
                className="anchor-icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/I-am-rish"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                color="#4d4d4e"
                className="anchor-icon"
              />
            </a>
          </li>
        </ul>
        <FontAwesomeIcon
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className="hamburger-icon"
        />
      </div>
    )
}

export default Sidebar;
