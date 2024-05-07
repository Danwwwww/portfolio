import "./App.css";
import div1 from "./images/div1.png";
import div2 from "./images/div2.png";
import html from "./images/HTML.png";
import css from "./images/CSS.svg.png";
import js from "./images/JS.png";
import github from "./images/Github.png";
import { useRef, useState, useEffect } from "react";
import hamburgerIcon from "./images/hamburgerIcon.png";
import infroIcon from "./images/infro.png";
import projectIcon from "./images/project.png";
import contactIcon from "./images/contact.png";
import homeIcon from "./images/home.png";
import me from "./images/me.png";
import burger1 from "./images/Burger1.png";
import burger2 from "./images/Burger2.png";
import burger3 from "./images/Burger3.png";
import burger4 from "./images/Burger4.png";
import burger5 from "./images/Burger5.png";
import ex1 from "./images/CE1.png";
import ex2 from "./images/CE2.png";
import ex3 from "./images/CE3.png";
import ex4 from "./images/CE4.png";
import ex5 from "./images/CE5.png";
import ex6 from "./images/CE6.png";
import ex7 from "./images/CE7.png";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const [tabletSize, setTabletSize] = useState(false);
  console.log(window.innerWidth);
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
    const [menu, setMenu] = useState(true);

    function showMenu() {
      if (!menu) {
        setMenu(true);
      } else {
        setMenu(false);
      }
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
            <img
              className="hamburgerMenu"
              src={hamburgerIcon}
              onClick={showMenu}
            />
          </div>
        </div>
        <div className={menu ? "menu" : "menu show"}>
          <div className="iconContainer">
            <img
              className="homeIcon"
              onClick={() => handleRef(homeRef)}
              src={homeIcon}
            />
          </div>
          <div className="iconContainer">
            <img
              className="infroIcon"
              onClick={() => handleRef(aboutRef)}
              src={infroIcon}
            />
          </div>
          <div className="iconContainer">
            <img
              className="projectIcon"
              onClick={() => handleRef(projectRef)}
              src={projectIcon}
            />
          </div>
          <div className="iconContainer">
            <img
              className="contactIcon"
              onClick={() => handleRef(contactRef)}
              src={contactIcon}
            />
          </div>
        </div>
      </div>
    );
  }

  function Home() {
    return (
      <div className="intro" ref={homeRef}>
        <div className="topIntro">
          <div className="leftIntro">
            <p className="title">Front-End Web Developer 🖥️</p>
            <p className="introContent">
              {"\u00A0".repeat(4)} Hi👋, I'm Dan Wong. A person who passionate
              on web development. Like making some fun and attractive websites!
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
          <div className="skillImgs">
            {/* <img
              className="skillImg"
              src="https://www.svgrepo.com/show/374118/tailwind.svg"
            /> */}
            <img
              className="skillImg"
              src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/16073828/742161_74060.png"
            />
            <img
              className="skillImg"
              src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/16073828/227525_754519.png"
            />
            <img
              className="skillImg"
              src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/16073828/166463_947098.png"
            />
            <img className="skillImg" src={js} />
            <img className="skillImg" src={html} />
            <img className="skillImg" src={css} />
          </div>
        </div>
      </div>
    );
  }

  function About() {
    return (
      <>
        <div className="empty" ref={aboutRef}></div>
        <div className="about">
          <p className="title aboutTitle">About Me</p>
          <p className="aboutIntro">
            {"\u00A0".repeat(4)}I recently graduated from a Front-end bootcamp
            by Clap@JC X Generation .I learned the various practical coding
            skills and knowledge practical coding skill. Additionally, I
            acquired knowledge in Scrum skills and the development workflow.
            <br />
            {"\u00A0".repeat(4)}Throughout the bootcamp, even though I
            encountered numerous challenges, I still enjoyed about that because
            each time I resolved coding issues, I witnessed personal growth. The
            sense of achievement I experienced further fueled my passion.
            Although the boot-camp ended, my self-learning didn't end.✊
          </p>
        </div>
      </>
    );
  }

  function Projects() {
    const [burgerPic, setBurgerPic] = useState(burger1);
    const [extensionPic, setextensionPic] = useState(ex1);

    // function handleBurgerPic() {
    //   let index = 2;
    //   let timer = setInterval(() => {
    //     if (index < 5) {
    //       setBurgerPic(`burger${index}`);
    //       index++;
    //     } else {
    //       clearInterval(timer);
    //     }
    //   }, 500);
    // }

    // function handleBurgerPicOut() {
    //   setBurgerPic(burger1);
    // }

    return (
      <>
        <div className="empty" ref={projectRef}></div>
        <div className="projects">
          <p className="title projectTitle">Projects</p>
          <div className="projectContainer">
            <div className="projectLeft">
              <img
                className="projectPic burger"
                src={burgerPic}
                // onMouseEnter={handleBurgerPic}
                // onMouseLeave={handleBurgerPicOut}
              />
            </div>
            <div className="projectRight">
              <div className="projectName">Online Burger order website</div>
              <div className="projectDescibe">
                <li>This is a online website design for burger store</li>
                <li>Customes can order custom-made burger</li>
                <li>
                  We can recevie the opinion by email.js when customers submit
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
              <img className="projectPic extension" src={extensionPic} />
            </div>
            <div className="projectRight">
              <div className="projectName">
                Weather forecast Chrome extension
              </div>
              <div className="projectDescibe">
                <li>This Chrome extension desgin for computer user</li>
                <li>User can check the next 7 days of weather forecasting</li>
                <li>User can change differet unit and Layout if they want</li>
                <li>
                  Once turn on the Chrome extension, the rain reminder will
                  shows if tomorrow is rain
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
              <div className="projectName">KMB arrival time query Web App</div>
              <div className="projectDescibe">
                <li>This Web App design for mobile user</li>
                <li>
                  The User can check the arrival time of different station by
                  enter the route they want.
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
          <div className="projectContainer">
            <div className="projectLeft">
              <img
                className="projectPic mtr"
                src="https://raw.githubusercontent.com/Danwwwww/Project/main/image/MTR2.png"
              />
            </div>
            <div className="projectRight">
              <div className="projectName">MTR realtime query website</div>
              <div className="projectDescibe">
                <li>
                  The user can search the arrival time of different station by
                  pressing the button of route
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
                  href="https://danwwwww.github.io/Project/MTR/"
                  target="blank"
                >
                  Live
                </a>
                <a
                  className="linkBtn"
                  href="https://github.com/Danwwwww/Project/tree/main/MTR"
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
