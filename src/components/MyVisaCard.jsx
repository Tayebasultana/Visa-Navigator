// import { useContext } from "react";
import Swal from "sweetalert2";
// import { authContext } from "./AuthProvider/AuthProvider";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { useContext } from "react";
import { authContext } from "./AuthProvider/AuthProvider";
import { Link } from "react-router-dom";


const MyVisaCard = ({visa}) => {

    const { user } = useContext(authContext);

    const { image, name, type, description, fee} = visa;
    
    const handleDelete = _id => {
        // console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              

            fetch(`https://assignment-ten-server-eight-cyan.vercel.app/my-added-visa/${_id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deleteCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your visa has been deleted.",
                        icon: "success"
                      });
                }
            })
            }
          });
    }


    return (
        <div className="">
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
                <div className="card-actions justify-end">
                <div className="badge-outline">
                  <Link to={`/update/${visa._id}`}>
                  <button className="bg-emerald-600 py-2 rounded-xl text-white font-bold px-1 md:px-4 flex items-center gap-0 md:gap-2">
                    Update 
                    <span className="text-lg flex items-center"><GrUpdate /></span>
                  </button>
                  </Link>
                </div>

                <div className=" badge-outline">
                    <button className="bg-emerald-600 py-2 rounded-xl text-white font-bold px-1 md:px-4 flex items-center gap-0 md:gap-2" onClick={() => handleDelete(visa._id)}>
                        Delete
                        <span className="text-lg flex items-center"><MdDeleteForever /></span>
                    </button>
                </div>


                    </div>
              </div>
            </div>

            
        </div>
    );
};

export default MyVisaCard;
