import Swal from "sweetalert2";


const MyVisaCard = ({ myVisa }) => {

    const {_id, image} = myVisa;
    // const {image} = item
    
    

    const handleDelete = _id => {
        console.log(_id);

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
              

            fetch(`http://localhost:5000/my-visa/${_id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
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
            

            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"></h2>
                    <p></p>
                    <p>
                       
                    </p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">
                            <button>Update</button>
                        </div>
                        <div className="badge badge-outline">
                            <button onClick={() => handleDelete(_id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyVisaCard;
