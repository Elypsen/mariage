import euxlol from '../assets/images/euxlol.jpg'
import noulol from "../assets/images/noulol.jpg"

const Planning = ({planning} : {planning:boolean}) => {
    return(
        <div id="planning" style={{display: planning ? "block" : "none"}}>
            <div className='planning'>
                <div style={{display:"flex",flexDirection:"column"}}>
                <h3>Mairie</h3>
                <h3>Sussargues</h3>
                </div>
                <img src={euxlol} className="photobulle" alt="nous lol" title='sexy'/>
            </div>
            <div className='planning'> 
                <img src={noulol} className="photobulle" alt="nous lol" title="beast" />
                <div>
                    <h3>Ceremonie laïque</h3>
                </div>
                    
            </div>        
        </div>
    )
}

export default Planning;