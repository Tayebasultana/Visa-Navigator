import { useNavigate } from "react-router-dom";


const VisaCard = ({visa}) => {

  const navigate = useNavigate();
  const handleGoToDetails =() => {
    // console.log("Visa ID:", visa.id);
    navigate(`/visa/${visa._id}`);
  };

  const {image, name, type, description, fee} = visa;

    
    return (
        <div>
            <div className="card bg-base-100 object-cover shadow-xl">
              <figure className="px-4 pt-4">
                <img
                  src={image}
                  alt="country image "
                  className="rounded-xl max-h-44 w-[100%] " />
              </figure>
              <div className="card-body items-center text-center -mt-4">
                <h2 className="card-title font-bold">{name}</h2>
                <div className="flex">
                <div className="mr-4"><p>Type: <span className="font-bold">{type}</span></p></div>
                <div><p>Fee: <span className="font-bold">{fee}</span></p></div>
                </div>
                <p>{description}</p>
                <div className="card-actions">
                 <button className="btn bg-gradient-to-r from-[#031716] via-[#0A7075] to-[#031716] text-white" onClick={handleGoToDetails}>See details</button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default VisaCard;