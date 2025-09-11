import Hero3D from "./Tomato";
import { useState, useEffect } from "react";

export default function HeroSection() {
  // for some fun stuff about pomodoro
  const [showMessage, setShowMessage] = useState(false);
  const keywords = ["efficiently", "smoothly", "productively"];
  // for the keyword swapping
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % keywords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [keywords.length]);
  return (
    <div
      id="hero-section-wrapper"
      className="flex-1 bg-primary-sakura/50 flex-col p-8 flex content-center m-5 rounded-4xl"
    >
      <div id="text-wrapper">
        <h1 className="font-heading font-medium">
          Manage your time{" "}
          <span className="font-bold">{keywords[currentWordIndex]}</span>
        </h1>
      </div>
      <div
        id="3d-wrapper"
        className="flex flex-wrap justify-center content-center w-[1000px] h-[300px] mt-6"
      >
        <Hero3D onTomatoClick={() => setShowMessage(true)} />
      </div>
      <div id="message-wrapper">
        <p className="text-gray-500">Hint: Click the tomato for a fun fact</p>
        {showMessage && (
          <div className="bg-white p-4 rounded-2xl shadow-lg inline-block animate-fadeIn">
            This website follows a technique used by a student [just like you!]
            while he was studying for his exams!
          </div>
        )}
      </div>
      <div id="disclaimer-wrapper">
        <h2 className="font-heading font-bold">Psst! before you proceed...</h2>
        <p className="font-body">
          Understand that: This app is by no way affiliated with Francesco
          Cirillo and/or the official Pomodoro method.
        </p>
      </div>
    </div>
  );
}
