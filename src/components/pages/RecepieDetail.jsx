import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db, storage } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";

const RecepieDetail = () => {

  const [loading, setLoading] = useState(true)
  const [recepie, setRecepie] = useState([])
  const param = useParams();

  useEffect(() => {

    const fetchData = async() => {
      const docRef = doc(db, 'recepies', param.id)
      const querySnapshot = await getDoc(docRef);
      const recepie = querySnapshot.data();
      const url = await getDownloadURL(ref(storage, `images/${recepie.imgName}`));
      console.log(querySnapshot.data())
      setRecepie({
        imgurl: url,
        title: recepie.title,
        shortDescription: recepie.sdescription,
        fullDescription: recepie.fdescription
      })
    }
    fetchData();
  }, [param])

  useEffect(() => {
    console.log("recepie:", recepie)
    if (Object.keys(recepie).length > 0){
      setLoading(false)
    }
  }, [recepie])


  if(!loading){
    return(
      <div className="recepie-detail">
        <h1 className="recepie-title">{recepie.title}</h1>
        <img src={recepie.imgurl} alt="food" />
        <h4 className="recepie-short-description">{recepie.shortDescription}</h4>
        <p className="recepie-full-description">{recepie.fullDescription}</p>
      </div>
    )
  } else {
    return (  
      <div className="recepie-detail">
        Loading...
      </div>
    );
  }
  
}
 
export default RecepieDetail;