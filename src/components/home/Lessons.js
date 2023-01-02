import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Lessons = () => {
  return (  
    
    <main className="lessons">
      <h4>Let me be your coach!</h4>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/FTociictyyE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="buttons">
        <button><FontAwesomeIcon icon={faRightToBracket} size='xl' />Aplly for online courses</button>
        <button><FontAwesomeIcon icon={faDiscord} size='xl' />Join my discord</button>
        <button><FontAwesomeIcon icon={faYoutube} size='xl' />Visit my youtube</button>
      </div>
    </main>
  );
}
 
export default Lessons;