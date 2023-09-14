import histoire2 from "../assets/images/histoire2.jpg";
import histoire3 from "../assets/images/histoire3.jpg";

const VotreHistoire = ({ histoire }: { histoire: boolean }) => {
  return (
    <div id="histoire" style={{ display: histoire ? "flex" : "none" }}>
      <img src={histoire3} title="tromeugnon" className="photobulle" />
      <div id="textHistoire">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia magni
        voluptatum dolor et earum. Necessitatibus eaque deleniti neque. Quis quo
        itaque amet exercitationem tenetur animi nam fuga labore facilis minus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        perferendis consectetur placeat asperiores cumque eaque hic aut quia
        aspernatur debitis magni quibusdam cupiditate beatae repellat in impedit
        sed libero voluptas et, ut excepturi accusantium necessitatibus.
        Molestias possimus consequuntur est ullam, perferendis dolores,
        accusantium quasi quia sapiente ab soluta voluptas obcaecati?
      </div>
      <img src={histoire2} title="lol" className="photobulle" />
    </div>
  );
};

export default VotreHistoire;
