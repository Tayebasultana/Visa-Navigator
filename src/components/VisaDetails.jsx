import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "./AuthProvider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";


const VisaDetails = () => {
    const {image, name, type, document, description, validity, method} = useLoaderData();
    const {user} = useContext(authContext);
    const [selectedDate, setSelectedDate] = useState(new Date());


   const handleMyVisa = (e) =>{
    e.preventDefault()

    const form = e.target;

        const email = form.email.value;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const time = form.time.value;
        const fee = form.fee.value;
        // const application = { image, name, type, document, description, validity, method}
        

        const myVisa = {email, firstName, lastName, time, fee, image, name, type, document, description, validity, method }
        console.log(myVisa);



        fetch('http://localhost:5000/my-visa',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(myVisa)
        })
        .then(res => res.json())
        .then (data => {
            console.log(data);
            if(data.insertId){
              Swal.fire({
                text: "Visa applied successfully!",
                icon: "success"
              });
            }
        })
   }


    return (
        <div className="">
             <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={image}
              className="max-w-xs rounded-lg shadow-2xl" />
            <div>
            <h2 className="text-center text-3xl font-bold mb-4 ">Apply the visa for</h2>
              <h1 className="text-5xl font-bold">{name}</h1>
              <p className="py-6 text-2xl font-bold">{type}</p>
            </div>
          </div>
             </div>

        <div className="max-w-xl mx-auto">
            <div className="py-7">
           
           <form action="" onSubmit={handleMyVisa}>

           <div className="">

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


           {/* first name */}
           <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-emerald-900">First name </span>
             </div>
             <input type="text" name="firstName" placeholder="First name" className="input input-bordered border-emerald-900 border-2 grow w-full" />
           </label>

           {/* Last name */}
           <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-emerald-900">Last name</span>
             </div>
             <input type="text" name="lastName" placeholder="Last name" className="input input-bordered border-emerald-900 border-2 grow w-full" />
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
        name="time"
      />
    </label>

           {/*Fee*/}
           <label className="form-control w-full col-span-2">
             <div className="label">
               <span className="label-text font-bold text-emerald-900">Fee</span>
             </div>
             <input type="number" name="fee" placeholder="Fee" className="input input-bordered border-emerald-900 border-2 grow w-full" />
           </label>
             
             
            <input type="submit" className="btn w-3/4 ml-[12%] mt-4 text-white text-bold text-lg bg-gradient-to-r from-[#031716] via-[#0A7075] to-[#031716] col-span-2 mb-7" value="Aply"/>
        </div>
           </form>
        </div>
        </div>

        </div>
    );
};

export default VisaDetails;