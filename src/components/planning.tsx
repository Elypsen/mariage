import euxlol from "../assets/images/euxlol.jpg";
import noulol from "../assets/images/noulol.jpg";

const Planning = ({ planning }: { planning: boolean }) => {
  return (
    <div id="planning" style={{ display: planning ? "block" : "none" }}>
      <div className="planning">
        <div>
          <div style={{ textAlign: "center" }}>
            <h3 style={{ textDecoration: "underline", fontSize: "2rem" }}>
              Mairie
            </h3>
          </div>
          <div
            style={{
              display: "flex",
              flexFlow: "row",
              justifyContent: "space-around",
              width: "70vw",
            }}
          >
            <div>
              <h3>Sussargues</h3>
              <h3>horaire</h3>
            </div>
            <div>
              <h3>adresse mairie</h3>
            </div>
          </div>
        </div>
        <img src={euxlol} className="photobulle" alt="nous lol" title="sexy" />
      </div>
      <div className="planning">
        <img src={noulol} className="photobulle" alt="nous lol" title="beast" />
        <div>
          <div style={{ textAlign: "center" }}>
            <h3 style={{ textDecoration: "underline", fontSize: "2rem" }}>
              Cérémonie laique
            </h3>
          </div>
          <div
            style={{
              display: "flex",
              flexFlow: "row",
              justifyContent: "space-around",
              width: "70vw",
            }}
          >
            <div>
              <h3>Sussargues</h3>
              <h3>horaire</h3>
            </div>
            <div>
              <h3>adresse mairie</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planning;
