import { type ButtonHTMLAttributes } from "react";

import classes from "./TextButton.module.css";

interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  type?: "submit" | "reset" | "button";
  className?: string;
  onClick: () => void;
}

export default function TextButton({
  text,
  type = "button",
  className = "",
  onClick,
}: TextButtonProps) {
  return (
    <button
      type={type}
      className={`${classes.textButton} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
