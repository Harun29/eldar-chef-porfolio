import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db, storage } from "../../config/firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { Link } from "react-router-dom";

const Recepies = () => {

  const [recepies, setRecepies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const usersRef = collection(db, 'recepies');
      const querySnapshot = await getDocs(usersRef);
      const promises = querySnapshot.docs.map(async (doc) => {
        const recepie = doc.data();
        const url = await getDownloadURL(ref(storage, `images/${recepie.imgName}`));
        return {
          id: doc.id,
          title: recepie.title,
          shortDescription: recepie.sdescription,   
          imageURL: url
        };
      });
      const recepieSnapshot = await Promise.all(promises);
      setRecepies(recepieSnapshot);
    }
    
    fetchData();
  }, [])

  useEffect(() => {
    if (Object.keys(recepies).length > 0){
      setLoading(false)
    }
  }, [recepies])

  if(!loading){
    return(
      <div className="recepies">
      {recepies.map(({id, title, shortDescription, imageURL}) => (
        <Link to={`/recepie-detail/${id}`} >
          <div className="recepie" key={id}>
            <img src={imageURL} alt="food" />
            <div className="description">
              <h4>{title}</h4>
              <p>{shortDescription}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
    )
  } else{
    return(
      <div className="recepies
      animate__animated 
      animate__fadeInDown 
      animate__faster">
        loading...
      </div>
    )
  }
}
 
export default Recepies;