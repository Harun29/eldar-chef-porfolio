import { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc } from "firebase/firestore";
import { db, storage } from "../../config/firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../context/AuthContext";

const Recepies = () => {

  const [recepies, setRecepies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const {currentUser} = useAuth()

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
    console.log(recepies)
  }, [recepies])

  const handleDelete = async (recepieId) => {
    await deleteDoc(db, 'recepies', recepieId)
    recepies.filter((item) => item.id !== recepieId)
  }

  if(!loading){
    return(
      <div className="container">
      <div className="recepies">
      {recepies.map(({id, title, shortDescription, imageURL}) => (
        
          <div className="recepie" key={id}>
            <Link to={`/recepie-detail/${id}`} >
              <img src={imageURL} alt="food" />
              <div className="description">
                <h4>{title}</h4>
                <p>{shortDescription}</p>
              </div>
            </Link>

            {currentUser ? 
            <button onClick={() => setConfirmDelete(true)}>
              <FontAwesomeIcon icon={faTrash} size="xl" />
            </button> : null}
          </div>
      ))}
      </div>
      {confirmDelete ? 
        <div className="confirm-delete">
          <h4>Jesi li siguran da zelis izbrisati ovaj recept?</h4>
          <div className="confirm-buttons">
            <button onClick={handleDelete}>
              Da
            </button>
            <button onClick={() => setConfirmDelete(false)}>
              Ne
            </button>
          </div>
        </div>
      : null}
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