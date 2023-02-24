import { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router";

const AddRecepie = () => {

  const [title, setTitle] = useState('')
  const [shortDescription, setShortDescription] = useState('')
  const [fullDescription, setFullDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate();

  const [recepie, setRecepie] = useState()

  const addData = async (data) => {
    try {
      const docRef = await addDoc(collection(db, 'recepies'), data);
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  useEffect(() => {
    setRecepie({
      title: title,
      sdescription: shortDescription,
      fdescription: fullDescription
    });
  }, [title, shortDescription, fullDescription])

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      setLoading(true);
      await addData(recepie);
      navigate('/')
    } catch (err) {
      setError('Failed to add recepie! Error: ', err)
    }
  }

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
      {/* <div className="add-image"></div> */}
      <button disabled={loading} type="submit" className="recepie-submit">Submit</button>

      {error ? 
      <h3>{error}</h3>
      : null}
    </form>
  );
}
 
export default AddRecepie;