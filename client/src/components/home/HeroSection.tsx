import Hero3D from "./Tomato";
import { useState } from "react";

export default function HeroSection() {
  // for some fun stuff about pomodoro
  const [showMessage, setShowMessage] = useState(false);
  const keywords = ["efficiently", "smoothly", "productively"];
  return (
    <div
      id="hero-section-wrapper"
      className="flex-1 bg-primary-sakura flex-col m-20 rounded-3xl"
    >
      <div id="text-wrapper">
        <h1 className="font-heading font-medium">
          Manage your time <span className="font-bold"></span>
        </h1>
      </div>
      <div id="3d-wrapper">
        <div className="absolute inset-0">
          <Hero3D />
        </div>
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
