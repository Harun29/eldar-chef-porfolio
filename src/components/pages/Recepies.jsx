import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";

const Recepies = () => {

  const [recepies, setRecepies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let recepiesSnapshot = []
    async function fetchData() {
      const usersRef = collection(db, 'recepies');
      const querySnapshot = await getDocs(usersRef);

      querySnapshot.forEach((doc) => {
        const recepies = doc.data()
        recepiesSnapshot.push({
          id: doc.id,
          title: recepies.title,
          shortDescription: recepies.sdescription,   
          imageURL: recepies.imgurl
        })
      })
      setRecepies(recepiesSnapshot)
    }
    fetchData();
  }, [])

  useEffect(() => {
    if (Object.keys(recepies).length > 0){
      setLoading(false)
    }
  }, [recepies])

  if(loading){
    return(
      <div>
        loading...
      </div>
    )
  } else{
    return(
      <div className="recepies">
        {recepies.forEach(({title, shortDescription, imgurl}) => {
          console.log(title)
          console.log(shortDescription)
          console.log(imgurl)
        })}
      </div>
    )
  }
}
 
export default Recepies;