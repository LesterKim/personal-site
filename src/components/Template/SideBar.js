import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Lester Kim</h2>
        <p><a href="mailto:lester.c.kim@gmail.com">lester.c.kim@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hello, I am Lester. I like building well-architected software.
        I am a <a href="https://college.harvard.edu">Harvard College</a> graduate,
        a <a href="http://stat.columbia.edu/masters-programs/programms-actuarial-science">Columbia</a> alumnus
        , and a software engineer at a cryptocurrency startup. Previously, I was
        at <a href="https://www.aliroquantum.com">Aliro Quantum</a>
        , <a href="https://www.blueapron.com">Blue Apron</a>
        , <a href="https://littlstar.com">Littlstar</a>
        , and <a href="https://www.yext.com">Yext</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Lester Kim <Link to="/">LesterKim.github.io/personal-site</Link>.</p>
    </section>
  </section>
);

export default SideBar;
