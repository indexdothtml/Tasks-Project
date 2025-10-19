import { type ComponentType } from "react";
import { type LucideProps } from "lucide-react";

import classes from "./PanelButton.module.css";

type PanelButtonProps = {
  IconOnClose: ComponentType<LucideProps>;
  IconOnOpen: ComponentType<LucideProps>;
  panelSide?: "left" | "right";
  isPanelOpen: boolean;
  classNames?: string;
  onClick: () => void;
};

export default function PanelButton({
  isPanelOpen,
  classNames = "",
  onClick,
  IconOnOpen,
  IconOnClose,
  panelSide = "left",
}: PanelButtonProps) {
  const PanelButton = isPanelOpen ? <IconOnOpen /> : <IconOnClose />;

  let buttonStyles = "";

  if (panelSide === "left") {
    if (isPanelOpen) {
      buttonStyles = classes.closePanelState;
    } else {
      buttonStyles = classes.openPanelState;
    }
  }

  return (
    <button
      type="button"
      className={`${classes.panelButton} ${buttonStyles} ${classNames}`}
      onClick={onClick}
      aria-label="Panel Button"
    >
      {PanelButton}
    </button>
  );
}
