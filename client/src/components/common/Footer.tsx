import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="text-night dark:text-pale bg-pale dark:bg-night py-4 flex flex-col"
    >
      <div
        id="quote-wrapper"
        className="border-b-2 border-night dark:border-pale py-4"
      >
        <div className="text-center py-5 px-3 ">
          <p className="font-heading font-bold text-4xl">
            "When life gives you lemons, throw them back at life!”
          </p>
        </div>
      </div>
      <div id="footer-content" className="flex flex-row justify-around py-4">
        <div id="title-socials-container">
          <div id="title-container" className="flex flex-col">
            <p className="font-heading font-bold">Doripomo</p>
          </div>
          <div id="socials-container" className="flex flex-col font-body">
            <NavLink to="https://www.linkedin.com/in/prajanya-subramanian">
              LinkedIn
            </NavLink>
            <NavLink to="https://github.com/aigle-levant/doripomo">
              GitHub
            </NavLink>
            <NavLink to="https://x.com/aiglelevant">
              X [formerly known as Twitter]
            </NavLink>
          </div>
        </div>
        <div id="get-started-links-container" className="flex flex-col">
          <p className="font-heading font-bold">Get started</p>
          <div id="get-started-links" className="font-body flex flex-col">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign up</NavLink>
          </div>
        </div>
        <div id="features-links-container" className="flex flex-col">
          <p className="font-heading font-bold">Features we offer</p>
          <div id="features-links-container" className="flex flex-col">
            <NavLink to="/pomodoro">Pomodoro</NavLink>
            <NavLink to="/syllabus">Syllabus</NavLink>
            <NavLink to="/about">About us</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </div>
        </div>
      </div>
      <div id="footer-bottom-content" className="flex flex-row px-10">
        <div id="license">
          <p className="font-body">
            © {new Date().getFullYear()} Doripomo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
