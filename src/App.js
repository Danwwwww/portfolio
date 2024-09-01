import "./App.css";
import div1 from "./images/div1.png";
import div2 from "./images/div2.png";
import html from "./images/HTML.png";
import css from "./images/CSS.svg.png";
import js from "./images/JS.png";
import github from "./images/Github.png";
import { useRef, useState, useEffect } from "react";
import infroIcon from "./images/infro.png";
import projectIcon from "./images/project.png";
import contactIcon from "./images/contact.png";
import homeIcon from "./images/home.png";
import me from "./images/me.png";
import burgerGif from "./images/BurgerPic.gif";
import chromeGif from "./images/Chrome.gif";
import tgBotGif from "./images/tgbot.gif";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const [tabletSize, setTabletSize] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setTabletSize(window.innerWidth < 850 ? true : false);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleRef = (ref) => {
    ref?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  function Navbar() {
    return (
      <div className="navbar">
        <div className="leftBar">
          <div className="divImage1">
            <img className="div1" src={div1} />
          </div>
          <div className="name">Dan Wong</div>
          <div className="divImage2">
            <img className="div2" src={div2} />
          </div>
        </div>
        <div className="rightBar">
          <div className="navHome" onClick={() => handleRef(homeRef)}>
            Home
          </div>
          <span>|</span>
          <div className="navAbout" onClick={() => handleRef(aboutRef)}>
            About Me
          </div>{" "}
          <span>|</span>
          <div className="navProjects" onClick={() => handleRef(projectRef)}>
            Projects
          </div>{" "}
          <span>|</span>
          <div className="navContact" onClick={() => handleRef(contactRef)}>
            Contact
          </div>
        </div>
      </div>
    );
  }

  function Navbar2() {
    const [menu, setMenu] = useState(Array(4).fill(true));
    const [arrow, setArrow] = useState(false);

    function showMenu() {
      if (menu[0]) {
        for (let i = 0; i < menu.length; i++) {
          setTimeout(() => {
            setMenu((prevMenu) => {
              const newMenu = [...prevMenu];
              newMenu[i] = false;
              return newMenu;
            });
          }, i * 110);
        }
      } else {
        for (let i = 0; i < menu.length; i++) {
          setTimeout(() => {
            setMenu((prevMenu) => {
              const newMenu = [...prevMenu];
              newMenu[i] = true;
              return newMenu;
            });
          }, i * 110);
        }
      }
    }

    function changeIcon() {
      arrow ? setArrow(false) : setArrow(true);
    }

    return (
      <div className="navbar2">
        <div className="navBottom">
          <div className="leftBar">
            <div className="divImage1">
              <img className="div1" src={div1} />
            </div>
            <div className="name">Dan Wong</div>
            <div className="divImage2">
              <img className="div2" src={div2} />
            </div>
          </div>
          <div className="rightBar">
            <div
              className={arrow ? "hamburgerMenu arrow" : "hamburgerMenu"}
              onClick={() => {
                showMenu();
                changeIcon();
              }}
            ></div>
          </div>
        </div>
        <div className="menuContainer">
          <div className={menu[0] ? "menu" : "menu show"}>
            <img
              onClick={() => {
                handleRef(homeRef);
                showMenu();
              }}
              src={homeIcon}
            />
          </div>
          <div className={menu[1] ? "menu" : "menu show"}>
            <img
              onClick={() => {
                handleRef(aboutRef);
                showMenu();
              }}
              src={infroIcon}
            />
          </div>
          <div className={menu[2] ? "menu" : "menu show"}>
            <img
              onClick={() => {
                handleRef(projectRef);
                showMenu();
              }}
              src={projectIcon}
            />
          </div>
          <div className={menu[3] ? "menu" : "menu show"}>
            <img
              onClick={() => {
                handleRef(contactRef);
                showMenu();
              }}
              src={contactIcon}
            />
          </div>
        </div>
      </div>
    );
  }

  function Home() {
    let skills = [
      { name: "HTML", color: "#e44d26" },
      { name: "CSS", color: "#254de5" },
      { name: "Javascript", color: "#f7d723" },
      { name: "Typescript", color: "#3074c0" },
      { name: "React", color: "#25d1f4" },
      { name: "NodeJS", color: "#7cb700" },
      { name: "NestJS", color: "#e32743" },
      { name: "MongoDB", color: "#00e661" },
    ];

    return (
      <div className="intro" ref={homeRef}>
        <div className="topIntro">
          <div className="leftIntro">
            <p className="title">Front-end Web Developer 🖥️</p>
            <p className="introContent">
              {"\u00A0".repeat(4)} Hi👋, I'm Dan Wong. A person who is
              passionate on web development. I like making some fun and
              attractive websites!
            </p>
            <a href="https://github.com/Danwwwww/Project" target="blank">
              <img
                className="githubIntro"
                src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
              />
            </a>
          </div>
          <div className="rightIntro">
            <img className="photo" src={me} />
          </div>
        </div>
        <div className="bottomIntro">
          <p className="skill">Skill sets :</p>
          <div className="skillContainer">
            {" "}
            {skills.map((e, i) => {
              return (
                <div key={i} className="tagContainer" data-aos="fade-left">
                  <span
                    className="beforeTag"
                    style={{ backgroundColor: e.color }}
                  ></span>
                  <div className="tag" style={{ backgroundColor: e.color }}>
                    {e.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  function About() {
    return (
      <>
        <div className="empty" ref={aboutRef}></div>
        <div className="about" data-aos="zoom-in">
          <p className="title aboutTitle">About Me</p>
          <p className="aboutIntro">
            {"\u00A0".repeat(4)}A recent bootcamp graduate with self-motivation
            and good self-learning skills. Eager to explore any opportunities to
            enter the web development industry and contribute and enrich my
            skill sets in future projects. Although the boot-camp ended, my
            self-learning dosen't.✊
          </p>
        </div>
      </>
    );
  }

  function Projects() {
    return (
      <>
        <div className="empty" ref={projectRef}></div>
        <div className="projects" data-aos="zoom-in">
          <p className="title projectTitle">Projects</p>
          <div className="projectContainer">
            <div className="projectLeft">
              <img className="projectPic tgBot" src={tgBotGif} />
            </div>
            <div className="projectRight">
              <div className="projectName">Telegram Bot of a electric shop</div>
              <div className="projectDescibe">
                <li>Product searching</li>
                <li>Branch searching</li>
                <li>Exporting search result</li>
                <li>Play game to win coupon</li>
                <li>
                  Skills : <span className="nodeSkill">NodeJS</span>{" "}
                  <span className="nestSkill">NestJS</span>{" "}
                  <span className="mongoSkill">Mongodb</span>{" "}
                </li>
              </div>
              <div className="link">
                <a
                  className="linkBtn"
                  href="https://github.com/Danwwwww/TgBot/tree/main"
                  target="blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="projectContainer">
            <div className="projectLeft">
              <img className="projectPic burger" src={burgerGif} />
            </div>
            <div className="projectRight">
              <div className="projectName">Online Burger Order Website</div>
              <div className="projectDescibe">
                <li>This is an online website design for burger store</li>
                <li>Customers can order custom-made burger</li>
                <li>
                  We can receive the opinion by EmailJS when customers submit
                </li>
                <li>
                  Skills : <span className="htmlSkill">HTML</span>{" "}
                  <span className="cssSkill">CSS</span>{" "}
                  <span className="reactSkill">React</span>
                </li>
              </div>
              <div className="link">
                <a
                  className="linkBtn"
                  href="https://project-burger-tau.vercel.app/"
                  target="blank"
                >
                  Live
                </a>
                <a
                  className="linkBtn"
                  href="https://github.com/Danwwwww/Project/tree/main/burger"
                  target="blank"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="projectContainer">
            <div className="projectLeft">
              <img className="projectPic extension" src={chromeGif} />
            </div>
            <div className="projectRight">
              <div className="projectName">
                Weather Forecast Chrome Extension
              </div>
              <div className="projectDescibe">
                <li>This Chrome extension desgin for computer user</li>
                <li>Users can check the next 7 days of weather forecasting</li>
                <li>Users can change differet unit and Layout if they want</li>
                <li>
                  Once turn on the Chrome extension, the rain reminder will
                  shows if tomorrow will rain
                </li>
                <li>
                  Skills : <span className="htmlSkill">HTML</span>{" "}
                  <span className="cssSkill">CSS</span>{" "}
                  <span className="domSkill">DOM</span>
                </li>
              </div>
              <div className="link">
                <a
                  className="linkBtn"
                  href="https://github.com/Danwwwww/Project/tree/main/CEProject"
                  target="blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="projectContainer">
            <div className="projectLeft">
              <img
                className="projectPic kmb"
                src="https://raw.githubusercontent.com/Danwwwww/Project/main/image/KMB2.png"
              />
            </div>
            <div className="projectRight">
              <div className="projectName">KMB Arrival Time Query Web App</div>
              <div className="projectDescibe">
                <li>This Web App design for mobile users</li>
                <li>
                  Users can check the arrival time of different stations by
                  entering the route
                </li>
                <li>
                  Skills : <span className="htmlSkill">HTML</span>{" "}
                  <span className="cssSkill">CSS</span>{" "}
                  <span className="domSkill">DOM</span>
                </li>
              </div>
              <div className="link">
                <a
                  className="linkBtn"
                  href="https://danwwwww.github.io/Project/KMB/"
                  target="blank"
                >
                  Live
                </a>
                <a
                  className="linkBtn"
                  href="https://github.com/Danwwwww/Project/tree/main/KMB"
                  target="blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  function Contact() {
    const [email, setEmail] = useState("danwong.yt@gmail.com");

    function copyEmail() {
      navigator.clipboard.writeText(email);
      alert("Email copied");
    }

    return (
      <div className="contact" ref={contactRef}>
        <div className="title contactTitle">Contact me</div>
        <div className="contactLinkContainer">
          <div className="contactLink">
            <div className="githublogo">
              <a href="https://github.com/Danwwwww/Project" target="blank">
                <img className="contactLogo github" src={github} />
              </a>
            </div>
            <p>Github</p>
          </div>
          <div className="contactLink">
            <a
              href="https://www.linkedin.com/in/dan-wong-2176042bb/"
              target="blank"
            >
              <img
                className="contactLogo linkedin"
                src="https://uploads.strikinglycdn.com/page/images/icons/linkedin-icon.png"
              />
            </a>
            <p>LinkedIn</p>
          </div>
          <div className="contactLink" onClick={copyEmail}>
            <img
              className="contactLogo email"
              src="https://uploads.strikinglycdn.com/page/images/icons/email-icon.png"
            />
            <p>{email}</p>
          </div>
        </div>
        <div className="copyright">
          Copyright © 2024. All rights are reserved
        </div>
      </div>
    );
  }

  return (
    <>
      {!tabletSize ? <Navbar /> : <Navbar2 />}
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
