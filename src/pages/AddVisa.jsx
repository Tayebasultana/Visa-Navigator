
import Swal from "sweetalert2";
import { authContext } from "../components/AuthProvider/AuthProvider";
import { useContext, useState } from "react";


const AddVisa = () => {
  const { user } = useContext(authContext); 
  // const [visas, setVisas] = useState(newVisa)
    
   const email = user.email
  //  console.log(email)



  const handleAddVisa = (e) => {
    e.preventDefault();


    const form = e.target;

    const image = form.image.value;
    const name = form.name.value;
    const type = form.type.value;
    const time = form.time.value;
    const document = form.document.value;
    const description = form.description.value;
    const age = form.age.value;
    const fee = form.fee.value;
    const validity = form.validity.value;
    const method = form.method.value;

    const newVisa = { image, name, type, time, document, description, age, fee, validity, method, email};

    
    fetch('https://assignment-ten-server-eight-cyan.vercel.app/my-added-visa', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(newVisa),
    })
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        if (data.insertId) {
            
            const visaUid = data.insertId;
            Swal.fire({
              text: "Visa added successfully!" + visaUid,
              icon: "success"
            });
            form.reset();
        }
    })
}



    return (
        <div className="text-emerald-200">
            <div className="py-7 w-11/12 mx-auto">
           
           <form action="" onSubmit={handleAddVisa}>
           <h2 className="text-center text-3xl font-bold mb-4 text-emerald-900 ">add your visa</h2>

           <div className="space-y-2 grid grid-cols-2 gap-4">

            {/* country image */}
            <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-emerald-900">Country image </span>
             </div>
             <input type="text" name="image" placeholder="image " className="input input-bordered border-emerald-900 border-2 grow w-full" />
           </label>

           {/* country name */}
           <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-emerald-900">Country name </span>
             </div>
             <input type="text" name="name" placeholder="country name" className="input input-bordered border-emerald-900 border-2 grow w-full" />
           </label>

           {/* visa type */}
           <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-emerald-900">Visa type</span>
             </div>
             <input type="text" name="type" placeholder="Visa type" className="input input-bordered border-emerald-900 border-2 grow w-full" />
           </label>

           {/*Processing time*/}
           <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-emerald-900">Processing time</span>
             </div>
             <input type="number" name="time" placeholder="processing time" className="input input-bordered border-emerald-900 border-2 grow w-full" />
           </label>

           {/* required document */}
           <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-emerald-900">required document</span>
             </div>
             <input type="text" name="document" placeholder="required document" className="input input-bordered border-emerald-900 border-2 grow w-full" />
           </label>

           {/*description*/}
           <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-emerald-900">Description</span>
             </div>
             <input type="text" name="description" placeholder="Description" className="input input-bordered border-emerald-900 border-2 grow w-full" />
           </label>

           {/*age restriction*/}
           <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-emerald-900">Age restriction</span>
             </div>
             <input type="number" name="age" placeholder="Add your age" className="input input-bordered border-emerald-900 border-2 grow w-full" />
           </label>

           {/*Fee*/}
           <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-emerald-900">Fee</span>
             </div>
             <input type="number" name="fee" placeholder="Fee" className="input input-bordered  border-emerald-900 border-2 grow w-full" />
           </label>

           {/*validity*/}
           <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-emerald-900">validity</span>
             </div>
             <input type="text" name="validity" placeholder="validity" className="input input-bordered border-emerald-900 border-2 grow w-full" />
           </label>

           {/*Application method*/}
           <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-emerald-900">Application method</span>
             </div>
             <input type="text" name="method" placeholder="Application method" className="input input-bordered border-emerald-900 border-2 grow w-full" />
           </label>


             
             
            <button type="submit" className="btn w-3/4 text-white text-bold text-lg bg-gradient-to-r from-[#031716] via-[#0A7075] to-[#031716] col-span-2 mx-auto mb-7">Add Visa</button>
        </div>
           </form>
        </div>
        </div>
    );
};

export default AddVisa;