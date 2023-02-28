import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db, storage } from "../../config/firebase";
import { getDownloadURL, ref } from "firebase/storage";

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
        console.log(recepie);
        console.log(url);
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
        {recepies.forEach(({title, shortDescription, imageURL}) => {
          console.log(title)
          console.log(shortDescription)
          console.log(imageURL)
        })}
      </div>
      
    )
  } else{
    return(
      <div className="recepies">
        loading...
      </div>
    )
  }
}
 
export default Recepies;