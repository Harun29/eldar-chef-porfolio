import { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router";
import {
  ref,
  uploadBytes,
  getDownloadURL
} from "firebase/storage";
import { storage } from "../../config/firebase";
import { v4 } from "uuid";

const AddRecepie = () => {

  const [title, setTitle] = useState('')
  const [shortDescription, setShortDescription] = useState('')
  const [fullDescription, setFullDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate();

  const [recepie, setRecepie] = useState()

  const [imageUpload, setImageUpload] = useState(null);
  const [imgURL, setImgURL] = useState('')

  const uploadFile = async () => {
    try {
      if (imageUpload == null) return;
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      const snapshot = await uploadBytes(imageRef, imageUpload);
      const url = await getDownloadURL(snapshot.ref);
      setImgURL(url);
      console.log(url);
    } catch (err){
      console.error('Error adding image: ', err);
    }
  };

  const addData = async (data) => {
    try {
      console.log('here 2')
      const docRef = await addDoc(collection(db, 'recepies'), data);
      console.log('Document written with ID: ', docRef.id);
    } catch (err) {
      console.error('Error adding document: ', err);
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      setLoading(true);
      await uploadFile();
      await addData(recepie);
      navigate('/')
    } catch (err) {
      setError('Failed to add recepie! Error: ', err)
    }
  }

  useEffect(() => {
    setRecepie({
      title: title,
      sdescription: shortDescription,
      fdescription: fullDescription,
      imgurl: imgURL
    });
  }, [title, shortDescription, fullDescription, imgURL])

  return (
    <form 
    className="add-recepies"
    onSubmit={handleSubmit}
    >
      <div className="add-title">
        <input 
        type="text"
        required
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)} 
        />
      </div>
      <div className="short-description">
      <input 
        type="text"
        required
        value={shortDescription}
        placeholder="short description"
        onChange={(e) => setShortDescription(e.target.value)} 
        />
      </div>
      <div className="full-description">
      <input 
        type="text"
        required
        value={fullDescription}
        placeholder="full description"
        onChange={(e) => setFullDescription(e.target.value)} 
        />
      </div>
      <div className="add-image">
        <input 
        type="file" 
        onChange={(e) => {
          setImageUpload(e.target.files[0]);
        }}/>
      </div>
      <button disabled={loading} type="submit" className="recepie-submit">Submit</button>

      {error ? 
      <h3>{error}</h3>
      : null}
    </form>
  );
}
 
export default AddRecepie;