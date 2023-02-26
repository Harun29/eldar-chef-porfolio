import { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router";
import {
  ref,
  uploadBytes
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
  const [imgName, setImgName] = useState('')
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageUpload(file);
      setImgName(file.name + v4());
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const uploadFile = async () => {
    try {
      if (imageUpload == null) return;
      const imageRef = ref(storage, `images/${imgName}`);
      await uploadBytes(imageRef, imageUpload);
    } catch (err){
      console.error('Error adding image: ', err);
    }
  };

  // if (imgName.length > 0) {
  //   const imageRef = ref(storage, `images/${imgName}`);
  //   getDownloadURL(imageRef)
  //     .then(url => {
  //       console.log('Download URL:', url);
  //     })
  //     .catch(error => {
  //       console.error('Error getting download URL:', error);
  //     });
  // }

  const addData = async (data) => {
    try {
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
      imgName: imgName
    });
  }, [title, shortDescription, fullDescription, imgName])

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
      <label htmlFor="image-upload" className="add-image-label">
        {selectedImage ? (
          <img src={selectedImage} alt="Selected image" className="add-image-preview" />
        ) : (
          <span>Select an image</span>
        )}
      </label>
      <input 
        type="file"
        id="image-upload"
        className="add-image-input"
        accept="image/*"
        onChange={handleImageChange}
      />
    </div>

      <button disabled={loading} type="submit" className="recepie-submit">Submit</button>

      {error ? 
      <h3>{error}</h3>
      : null}
    </form>
  );
}
 
export default AddRecepie;