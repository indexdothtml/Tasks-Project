import { type LucideProps } from "lucide-react";
import { type ComponentType } from "react";

import classes from "./IconTextButton.module.css";

type IconTextButtonProps = {
  Icon: ComponentType<LucideProps>;
  text: string;
  classNames?: string;
};

export default function IconTextButton({
  Icon,
  text,
  classNames = "",
}: IconTextButtonProps) {
  return (
    <button
      type="button"
      className={`ubuntu-regular ${classes.iconTextButton} ${classNames}`}
    >
      <Icon size={18} strokeWidth={3} color="var(--icon-color)" />
      <span>{text}</span>
    </button>
  );
}
