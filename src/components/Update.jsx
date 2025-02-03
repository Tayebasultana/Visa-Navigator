import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { useLoaderData } from "react-router-dom";
import { authContext } from "./AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const Update = () => {
    const loadedVisa = useLoaderData();
    const {user} = useContext(authContext);
    const [selectedDate, setSelectedDate] = useState(new Date());



    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;

        const image =form.image.value;
        const name = form.name.value;
        const type = form.type.value;
        const email = form.email.value;
        const time =form.time.value;
        const document =form.document.value;
        const description =form.description.value;
        const fee = form.fee.value;
        const validity = form.validity.value;
        const method = form.method.value;

        console.log(image, name, type, email, time, document, description, fee, validity, method)

        const updatedVisa = {image, name, type, email, time, document, description, fee, validity, method}

        fetch(`https://assignment-ten-server-eight-cyan.vercel.app/my-added-visa/${loadedVisa._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedVisa)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: "Updated!",
                    text: "Your visa has been updated.",
                    icon: "success"
                  });
            }
        })


    }



    return (
        <div className="py-4 md:py-10 lg:py-20 px-2 md:px-7 lg:px-32">
            
            <form action=""  onSubmit={handleSubmit}>
           <h2 className="text-center text-3xl font-bold mb-4 text-emerald-900 ">Update your visa</h2>

           <div className="space-y-2 grid grid-cols-2 gap-4">

            {/* country image */}
            <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-emerald-900">Country image</span>
             </div>
             <input type="text" name="image" placeholder="image " defaultValue={loadedVisa.image} className="input input-bordered border-emerald-900 border-2 grow w-full" />
           </label>

           {/* country name */}
           <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-emerald-900">Country name</span>
             </div>
             <input type="text" name="name" placeholder="country name" defaultValue={loadedVisa.name} className="input input-bordered border-emerald-900 border-2 grow w-full" />
           </label>

           {/* visa type */}
           <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-emerald-900">Visa type</span>
             </div>
             <input type="text" name="type" placeholder="Visa type" defaultValue={loadedVisa.type} className="input input-bordered border-emerald-900 border-2 grow w-full" />
           </label>

            {/* email */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold text-emerald-900">Email</span>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={user?.email ? user.email : ""}
                readOnly
                className="input input-bordered border-emerald-900 border-2 grow w-full"
              />
            </label>

           {/*Applied date*/}
           <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold text-emerald-900">Applied Date</span>
              </div>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="yyyy-MM-dd"
                className="input input-bordered border-emerald-900 border-2 grow w-full"
                placeholderText="Select Applied Date"
                defaultValue={loadedVisa.time}
                name="time"
              />
            </label>

           {/* required document */}
           <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-emerald-900">Document</span>
             </div>
             <input type="text" name="document" placeholder="required document" defaultValue={loadedVisa.document} className="input input-bordered border-emerald-900 border-2 grow w-full" />
           </label>

           {/*description*/}
           <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-emerald-900">Description</span>
             </div>
             <input type="text" name="description" placeholder="Description" defaultValue={loadedVisa.description} className="input input-bordered border-emerald-900 border-2 grow w-full" />
           </label>

           {/*Fee*/}
           <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-emerald-900">Fee</span>
             </div>
             <input type="number" name="fee" placeholder="Fee" defaultValue={loadedVisa.fee} className="input input-bordered  border-emerald-900 border-2 grow w-full" />
           </label>

           {/*validity*/}
           <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-emerald-900">Validity</span>
             </div>
             <input type="text" name="validity" placeholder="validity" defaultValue={loadedVisa.validity} className="input input-bordered border-emerald-900 border-2 grow w-full" />
           </label>

           {/*Application method*/}
           <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-emerald-900">Method</span>
             </div>
             <input type="text" name="method" placeholder="Application method" defaultValue={loadedVisa.method} className="input input-bordered border-emerald-900 border-2 grow w-full" />
           </label>


             
             
            <button type="submit" className="btn w-3/4 text-white text-bold text-lg bg-gradient-to-r from-[#031716] via-[#0A7075] to-[#031716] col-span-2 mx-auto mb-7">update</button>
        </div>
           </form>
        </div>
    );
};

export default Update;