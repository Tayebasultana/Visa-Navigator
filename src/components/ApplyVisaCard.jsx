// import { useState } from "react";
import Swal from "sweetalert2";

const ApplyVisaCard = ({visa}) => {
  // const [visas, setVisas] = useState(    )
  const  {email, firstName, lastName, time, fee, image, name, type, document, description, validity, method } = visa

  const handleCancel = _id =>{
    // console.log(_id);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, cancel it!"
      }).then((result) => {
        if (result.isConfirmed){
            fetch(`https://assignment-ten-server-eight-cyan.vercel.app/my-visa/${_id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deleteCount > 0) {
                    Swal.fire({
                        title: "Canceled!",
                        text: "Your applied visa has been canceled.",
                        icon: "success"
                      });
                  // const remaining = visas.filter()
                }
            })
            }
          });
        }



    return (
        <div>
            <div className="hero">
              <div className="hero-content flex-col lg:flex-row">
                 <img
                   src={image}
                   className="max-w-md rounded-lg shadow-2xl" />
                 <div>
                   <h1 className="text-5xl font-bold"><span className="text-emerald-700 font-bold text-4xl">Country Name:  </span>{name}</h1>
                   <p className="  text-xl"><span className="text-emerald-700 font-bold text-xl">Visa Type:  </span>{type}</p>
                   <p className=" font-bold text-xl"><span className="text-emerald-700 font-bold text-xl">Applicant Name:  </span>{firstName}  {lastName}</p>
                   <p className="  text-base"><span className="text-emerald-700 font-bold text-xl">Apply Date:  </span>{time}</p>
                   <p className="  text-base"><span className="text-emerald-700 font-bold text-xl">Visa Fee:  </span>{fee}</p>
                   <p className="  text-base"><span className="text-emerald-700 font-bold text-xl">Validity:  </span>{validity}</p>
                   <p className="  text-base"><span className="text-emerald-700 font-bold text-xl">Method:  </span>{method}</p>
                   <p className="  text-base"><span className="text-emerald-700 font-bold text-xl">Description:  </span>{description}</p>
                   <button onClick={() => handleCancel(visa._id)} className="btn bg-gradient-to-r from-[#031716] via-[#0A7075] to-[#031716] text-white px-7">Cancel</button>
                 </div>
               </div>
             </div>
        </div>
    );
};

export default ApplyVisaCard;