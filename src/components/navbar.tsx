import { SetStateAction } from "react";


const NavBar = ({setPlanning, setHistoire}: {setPlanning:React.Dispatch<SetStateAction<boolean>>, setHistoire:React.Dispatch<SetStateAction<boolean>>}) => {

    return (
        <div id="navbar">

            <a onClick={() => {
                setPlanning(false);
                setHistoire(true);
            }}>Notre Histoire</a>

            <h1>Allyson & Damien</h1>

            <a onClick={() => {
                 setPlanning(true);
                 setHistoire(false);
            }}>Evenement</a>

        </div>
    )
}

export default NavBar;