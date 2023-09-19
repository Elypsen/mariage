import euxlol from "../assets/images/euxlol.jpg";
import noulol from "../assets/images/noulol.jpg";
import { useEffect, useState } from "react";

const Planning = ({ planning }: { planning: boolean }) => {
  const [slider, setSlider] = useState<string>("mairie");
  const [addresse, setAddresse] = useState<string>();
  const [ville, setVille] = useState<string>();
  const [horaire, setHoraire] = useState<string>();

  useEffect(() => {
    if (slider === "mairie") {
      setAddresse("Mairie de sussargues");
      setVille("34669 Sussargues");
      setHoraire("15h30 16/09/2024");
    } else if (slider === "laique") {
      setAddresse("manade de chai pas ou");
      setVille("jregardais pas la route quand on y est aller");
      setHoraire("pas trop longtemps apres la mairie");
    }
  }, [slider]);

  return (
    <div id="planning" style={{ display: planning ? "block" : "none" }}>
      <div>
        <div className="planningTitle">
          <h2
            className={slider === "mairie" ? "titleActive" : "titleInactive"}
            onClick={() => {
              setSlider("mairie");
            }}
          >
            Mairie
          </h2>
          <h2
            className={slider === "laique" ? "titleActive" : "titleInactive"}
            onClick={() => {
              setSlider("laique");
            }}
          >
            Cérémonie laique
          </h2>
        </div>

        <div className="planning">
          <img
            src={noulol}
            className="photobulle"
            alt="nous lol"
            title="beast"
          />
          <div>
            <h3>{addresse}</h3>
            <h3>{ville}</h3>
            <h3>{horaire}</h3>
          </div>
          <img
            src={euxlol}
            className="photobulle"
            alt="nous lol"
            title="sexy"
          />
        </div>
      </div>
    </div>
  );
};

export default Planning;
