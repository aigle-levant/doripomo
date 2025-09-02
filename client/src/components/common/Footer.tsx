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
      <div id="footer-content" className="flex flex-row justify-around py-6">
        <div id="title-socials-container">
          <div id="title-container" className="flex flex-col">
            <p className="font-heading font-bold mb-4 text-4xl">Doripomo</p>
          </div>
          <div id="socials-container" className="flex flex-col font-body gap-2">
            <NavLink to="https://www.linkedin.com/in/prajanya-subramanian">
              <p className="text-gray-700 hover:font-bold hover:text-night dark:text-gray-500 hover:dark:text-pale">
                LinkedIn
              </p>
            </NavLink>
            <NavLink to="https://github.com/aigle-levant/doripomo">
              <p className="text-gray-700 hover:font-bold hover:text-night dark:text-gray-500 hover:dark:text-pale">
                GitHub
              </p>
            </NavLink>
            <NavLink to="https://x.com/aiglelevant">
              <p className="text-gray-700 hover:font-bold hover:text-night dark:text-gray-500 hover:dark:text-pale">
                X [also known as Twitter]
              </p>
            </NavLink>
          </div>
        </div>
        <div
          id="links-container"
          className="flex flex-row justify-around gap-14"
        >
          <div id="get-started-links-container" className="flex flex-col">
            <p className="font-heading font-bold mb-2 text-2xl">Get started</p>
            <div id="get-started-links" className="font-body flex flex-col">
              <NavLink to="/login">
                <p className="text-gray-700 hover:font-bold hover:text-night dark:text-gray-500 hover:dark:text-pale">
                  Login
                </p>
              </NavLink>
              <NavLink to="/signup">
                <p className="text-gray-700 hover:font-bold hover:text-night dark:text-gray-500 hover:dark:text-pale">
                  Sign up
                </p>
              </NavLink>
            </div>
          </div>
          <div id="features-links-container" className="flex flex-col">
            <p className="font-heading font-bold mb-2 text-2xl">
              Features we offer
            </p>
            <div id="features-links-container" className="flex flex-col">
              <NavLink to="/pomodoro">
                <p className="text-gray-700 hover:font-bold hover:text-night dark:text-gray-500 hover:dark:text-pale">
                  Pomodoro
                </p>
              </NavLink>
              <NavLink to="/syllabus">
                <p className="text-gray-700 hover:font-bold hover:text-night dark:text-gray-500 hover:dark:text-pale">
                  Syllabus
                </p>
              </NavLink>
              <NavLink to="/about">
                <p className="text-gray-700 hover:font-bold hover:text-night dark:text-gray-500 hover:dark:text-pale">
                  About us
                </p>
              </NavLink>
              <NavLink to="/blog">
                <p className="text-gray-700 hover:font-bold hover:text-night dark:text-gray-500 hover:dark:text-pale">
                  Blog
                </p>
              </NavLink>
            </div>
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
