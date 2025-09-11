import Hero3D from "./Tomato";
import { useState, useEffect } from "react";

export default function HeroSection() {
  // for some fun stuff about pomodoro
  const [showMessage, setShowMessage] = useState(false);
  const keywords = ["efficiently", "smoothly", "productively"];
  const funFacts = [
    "Tomatoes are fruits, not vegetables!",
    "This website follows a technique used by a student [just like you!] while he was studying for his exams!",
    "Taking breaks can actually boost productivity.",
    "Sleeping right after studying enhances studying, due to how neurons work.",
    "Active recall + spaced repetition + Feynmann technique = God mode",
  ];
  // for the keyword swapping
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  // for some fun facts
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % keywords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [keywords.length]);
  const handleTomatoClick = () => {
    setCurrentFactIndex((prev) => (prev + 1) % funFacts.length);
    setShowMessage((prev) => !prev);
  };

  return (
    <div id="hero">
      <div
        id="hero-section-wrapper"
        className="flex-1 bg-sakura/50 flex-col p-8 flex content-center m-5 rounded-4xl"
      >
        <div id="text-wrapper" className="mt-5">
          <h1 className="font-heading text-center font-thin text-6xl">
            Manage your time{" "}
            <span className="font-bold">{keywords[currentWordIndex]}</span>
          </h1>
        </div>
        <div
          id="3d-wrapper"
          className="flex flex-wrap justify-center content-center w-[1000px] h-[300px] mt-6"
        >
          <Hero3D onTomatoClick={() => handleTomatoClick()} />
          {showMessage && (
            <div className="bg-bg text-text py-4 z-100 px-4 w-[300px] font-body rounded-4xl shadow-lg inline-block animate-fadeIn absolute top-150 right-50 wrap-break-word">
              {funFacts[currentFactIndex]}
            </div>
          )}
        </div>
        <div id="message-wrapper" className="mt-20 mr-5 max-w-110">
          <p className="text-text text-xl break-normal md:break-all">
            Doripomo is a productivity system for students that focus on the
            Pomodoro technique.
          </p>
          <p className="text-text/50 text-l">
            Hint: Click the tomato for a fun fact
          </p>
        </div>
      </div>
      <div id="disclaimer-wrapper" className="px-8 py-3">
        <h2 className="font-heading font-bold text-5xl my-5">
          Psst! before you proceed...
        </h2>
        <p className="font-body text-xl">
          Understand that: This app is by no way affiliated with Francesco
          Cirillo and/or the official Pomodoro method.
        </p>
      </div>
    </div>
  );
}
