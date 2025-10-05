import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { PanelButton } from "../../components/index";
import classes from "./EditPanel.module.css";

type EditPanelProps = {
  openPanel?: boolean;
};

export default function EditPanel({ openPanel = false }: EditPanelProps) {
  const [togglePanel, setTogglePanel] = useState(false);

  const handleTogglePanel = () => {
    setTogglePanel(false);
  };

  useEffect(() => {
    if (openPanel) {
      setTogglePanel(true);
    } else {
      setTogglePanel(false);
    }
  }, [openPanel]);

  return (
    <div
      className={`${classes.editPanel} ${
        togglePanel ? classes.openPanel : classes.closePanel
      }`}
    >
      <div className={classes.editPanelHead}>
        <span className={classes.header}>Task:</span>
        <PanelButton
          IconOnClose={X}
          IconOnOpen={X}
          isPanelOpen={togglePanel}
          onClick={handleTogglePanel}
        />
      </div>
    </div>
  );
}
