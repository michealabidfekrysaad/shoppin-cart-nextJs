import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Badge from "@material-ui/core/Badge";
import styles from "../../styles/Home.module.css";

// export const useStyles = makeStyles((theme) => ({
//   root: {
//     position: "relative",
//   },
//   Btn: {
//     cursor: "pointer",
//     backgroundColor: "inherit",
//     padding: 4,
//     margin: 2,
//     border: "none",
//   },
//   dropdown: {
//     position: "absolute",
//     top: 40,
//     left: -285,
//     right: 0,
//     border: "1px solid",
//     padding: 8,
//     zIndex: 1,
//     backgroundColor: "#fff",
//     color: "black",
//     width: 300,
//   },
// }));

const Dropdown = ({ screenAppear, DropdownBody, badgeContent }) => {
  // const classes = useStyles();
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
