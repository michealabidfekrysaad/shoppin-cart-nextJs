import React from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Badge from "@material-ui/core/Badge";
import styles from "./DropDown.module.css";


const Dropdown = ({ screenAppear, DropdownBody, badgeContent }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={styles.root}>
        <button type="button" className={styles.Btn} onClick={handleClick}>
          <Badge badgeContent={badgeContent} color="secondary">
            {screenAppear}
          </Badge>
        </button>
        {open && <div className={styles.dropdownItem}>{DropdownBody}</div>}
      </div>
    </ClickAwayListener>
  );
};
export default Dropdown;
