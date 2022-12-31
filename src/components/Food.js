import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

const Food = () => {
  
  const currentPage = useRef();
  const nextPage = useRef();
  
  const handleClick = () => {
    currentPage.current?.scrollIntoView({behaviour: 'smooth'});
    currentPage.current = nextPage.current;
  }

  return (  
    <div className="food-section">
        <div className="background-2">
          <div className="header-2">
            <h1>My recepies</h1>
          </div>
          <div className="food-pictures">
            
              <Link to="/">
                <div className="food">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7g2INAXqxmY-PUEwX9B9r-kEt44N0z0VzLh6g-GYDPg&s" alt="" />
                </div>
              </Link>
              <Link to="/">
                <div className="food">
                    <img src="https://food-guide.canada.ca/sites/default/files/styles/square_400_x_400/public/2020-12/CFGPlate-crop400x400.jpg" alt="" />
                </div>
              </Link>

              <Link to="/">
                <div className="food">
                  <img src="https://www.diabetesfoodhub.org/system/user_files/Images/lunch-dinner-chicken-collard-greens-sweet-potato.jpg" alt="" />
                </div>
              </Link>

              <Link to="/" ref={currentPage}>
                <div className="food">
                  <img src="https://media.istockphoto.com/id/168340083/photo/choosemyplate-healthy-food-and-plate-of-usda-balanced-diet-recommendation.jpg?s=612x612&w=0&k=20&c=S5OYuPg-n1fuOOgReQf9xPuFgA1i-UO54Uj2u1RD7iU=" alt="" />
                </div>
              </Link>
            
              <Link to="/" ref={nextPage}>
                <div className="food">
                  <img src="https://images.unsplash.com/photo-1539735257177-0d3949225f96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhdGUlMjBvZiUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                </div>
              </Link>

          </div>
          <button onClick={handleClick} className="food-button">
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </button>

          <div className="recepies-button">
            <button><Link to="/">Get my recepies</Link></button>
          </div>
        </div>
      </div>
  );
}
 
export default Food;