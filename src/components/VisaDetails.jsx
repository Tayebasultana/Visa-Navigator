import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";


const VisaDetails = () => {
    const {image, name, type} = useLoaderData();


   const handleMyVisa = (e) =>{
    e.preventDefault()

    const form = e.target;

        const email = form.email.value;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const time = form.time.value;
        const fee = form.fee.value;
        

        const myVisa = {email, firstName, lastName, time, fee}
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
                toast.success("Add my visa successfully")
            }
        })
   }


    return (
        <div className="bg-purple-300">
             <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={image}
              className="max-w-xs rounded-lg shadow-2xl" />
            <div>
            <h2 className="text-center text-3xl font-bold mb-4 text-blue-950 ">add your visa on</h2>
              <h1 className="text-5xl font-bold">{name}</h1>
              <p className="py-6 text-2xl font-bold">{type}</p>
            </div>
          </div>
             </div>

        <div className="w-10/12 mx-auto">
            <div className="py-7 w-11/12 mx-auto">
           
           <form action="" onSubmit={handleMyVisa}>

           <div className="space-y-2 grid grid-cols-2 gap-4">

            {/* email */}
            <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-base">Email</span>
             </div>
             <input type="email" name="email" placeholder="Email " className="input input-bordered grow w-full" />
           </label>

           {/* first name */}
           <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-base">First name </span>
             </div>
             <input type="text" name="firstName" placeholder="First name" className="input input-bordered grow w-full" />
           </label>

           {/* Last name */}
           <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-base">Last name</span>
             </div>
             <input type="text" name="lastName" placeholder="Last name" className="input input-bordered grow w-full" />
           </label>

           {/*Applied date*/}
           <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-base">Applied date</span>
             </div>
             <input type="number" name="time" placeholder="Applied date" className="input input-bordered grow w-full" />
           </label>

           {/*Fee*/}
           <label className="form-control w-full col-span-2">
             <div className="label">
               <span className="label-text font-bold text-base">Fee</span>
             </div>
             <input type="number" name="fee" placeholder="Fee" className="input input-bordered grow w-full" />
           </label>
             
             
            <button type="submit" className="btn w-3/4 text-white text-bold text-lg bg-blue-950 col-span-2 mx-auto mb-7">Apply</button>
        </div>
           </form>
        </div>
        </div>

        </div>
    );
};

export default VisaDetails;