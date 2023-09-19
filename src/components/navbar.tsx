import { SetStateAction } from "react";

const NavBar = ({
  setPlanning,
  setHistoire,
  histoire,
  planning,
}: {
  setPlanning: React.Dispatch<SetStateAction<boolean>>;
  setHistoire: React.Dispatch<SetStateAction<boolean>>;
  histoire: boolean;
  planning: boolean;
}) => {
  return (
    <div id="navbar">
      <a
        className={histoire ? "titleActive" : "titleInactive"}
        onClick={() => {
          setPlanning(false);
          setHistoire(true);
        }}
      >
        Notre Histoire
      </a>

      <h1>Allyson & Damien</h1>

      <a
       className={planning ? "titleActive" : "titleInactive"}
        onClick={() => {
          setPlanning(true);
          setHistoire(false);
        }}
      >
        Evenement
      </a>
    </div>
  );
};

export default NavBar;
