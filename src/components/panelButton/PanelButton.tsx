import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import classes from "./PanelButton.module.css";

type PanelButtonProps = {
  togglePanelButton: boolean;
  classNames?: string;
  onClick: () => void;
};

export default function PanelButton({
  togglePanelButton,
  classNames = "",
  onClick,
}: PanelButtonProps) {
  const PanelButton = togglePanelButton ? (
    <PanelLeftClose />
  ) : (
    <PanelLeftOpen />
  );

  return (
    <button
      type="button"
      className={`${classes.panelButton} ${
        togglePanelButton ? classes.closePanelState : classes.openPanelState
      } ${classNames}`}
      onClick={onClick}
      aria-label="Panel Button"
    >
      {PanelButton}
    </button>
  );
}
