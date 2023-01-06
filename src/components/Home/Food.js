import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Food = () => {

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

                <Link to="/">
                  <div className="food">
                    <img src="https://asterseniorcommunities.com/wp-content/uploads/2017/03/plate-food.jpg" alt="" />
                  </div>
                </Link>
              
                <Link to="/">
                  <div className="food">
                    <img src="https://media.istockphoto.com/id/913034864/photo/fish-dish-grilled-salmon-and-asparagus.jpg?s=170667a&w=is&k=20&c=CoGDpqVakHx9gEfaJhSHkZi0v9ljD6ZQoOaSGslooY0=" alt="" />
                  </div>
                </Link>
            </div>

          <div className="recepies-button">
            <button><Link to="/">Get my recepies</Link></button>
          </div>
        </div>
      </div>
  );
}
 
export default Food;