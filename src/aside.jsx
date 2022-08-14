import React from 'react'

const Aside = () => {
    return (
        <aside className="aside-bar">
            <div className="side-top">
                <p className="name-initial">A</p>
                <p className="first-name">Abasiakara</p>
                <small className="side-about">Web developer</small>
            </div>
            <div className="aside-links">
                <hr className="links-line" />
                <p className="asideLink"><a href="#">About</a></p>
                <hr className="links-line" />
                <p className="asideLink"><a href="#">Experience</a></p>
                <hr className="links-line" />
                <p className="asideLink"><a href="#">Work</a></p>
                <hr className="links-line" />
                <p className="asideLink"><a href="#">Contact</a></p>
                <hr className="links-line" />
                <p className="asideLink" id='resume'><a href="#">Resume</a></p>
                <hr className="links-line" />
            </div>
            <div className="sideFooter">
                <span className="contact-logo">
                    <i class="devicon-github-original"></i>
                </span>
                <span className="contact-logo">
                    <i class="devicon-linkedin-plain"></i>
                </span>
                <span className="contact-logo">
                    <i class="devicon-twitter-original"></i>
                </span>
            </div>
        </aside>
    )
}

export default Aside