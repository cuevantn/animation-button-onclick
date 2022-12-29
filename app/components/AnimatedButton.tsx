"use client";

import { FunctionComponent, useRef, useEffect } from "react";

interface AnimatedButtonProps {
  text: string;
}

const AnimatedButton: FunctionComponent<AnimatedButtonProps> = ({ text }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;

    if (!button) return;

    button.addEventListener("click", () => {
      button.classList.add("animate-outlinePing");
      setTimeout(() => {
        button.classList.remove("animate-outlinePing");
      }, 800);
    });
  }, []);

  return (
    <button
      ref={buttonRef}
      className="
        transition ease-in-out
        w-40 h-10
        font-bold 
        rounded-full 
        bg-red-600
        text-white
        outline
        outline-2
        -outline-offset-2 outline-red-600
      "
    >
      {text}
    </button>
  );
};

export default AnimatedButton;
