import { useParams } from "react-router-dom";

const RecepieDetail = () => {

  const param = useParams();

  return (  
    <div className="recepie-detail">
      {param.id}
    </div>
  );
}
 
export default RecepieDetail;