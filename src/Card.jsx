import "./Card.css";
import Swimmer from "./images/swimmer.png";
import wedding from "./images/wedding.png";
import MountainBike from "./images/mountain-bike 1.png";



export default function Card() {
    return (
        <div className="image-container">
          <div>
            <img src={Swimmer} alt="girl at pool"  className="swimmer-image"/>
           <p className="stats">
           5.0
        <br/>(6)
        <br/>USA
        <br/>Life lessons with<br/> Katie Zaferes<br/>
        <br/>From $136 / person
           </p>
         </div>
            
          <div>
            <img src={wedding} alt="lady getting marrried"  className="wedding-image"/>
           <p className="stats">
           5.0(30)USALearn wedding<br/> photographyFrom<br/> $125 / person
           </p>
          </div>
          
          <div>
            <img src={MountainBike} alt="boy on bike"  className="mountainbike-image"/>
           <p className="stats">
           4.8(2)USAGroup<br/> Mountain<br/> Biking<br/>From $50 / person

           </p>
          </div>
          
            
      </div>
    )
}