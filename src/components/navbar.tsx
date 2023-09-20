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
      <div className="aTitle">
        <a
          className={histoire ? "titleActive" : "titleInactive"}
          onClick={() => {
            setPlanning(false);
            setHistoire(true);
          }}
        >
          Notre Histoire
        </a>
      </div>
      <div>
        <h1 id="allyDam">Allyson & Damien</h1>
      </div>
      <div className="aTitle">
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
    </div>
  );
};

export default NavBar;
