


const AddVisa = () => {

    const handleAddVisa = (e) =>{
        e.preventDefault()

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

        const newVisa = {image, name, type, time, document, description, age, fee, validity, method}
        console.log(newVisa);

        // send data to the server

        fetch('http://localhost:5000/visa',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newVisa)
        })
        .then(res => res.json())
        .then (data => {
            console.log(data);
        })
    }


    return (
        <div className="bg-purple-300">
            <div className="py-7 w-11/12 mx-auto">
           
           <form action="" onSubmit={handleAddVisa}>
           <h2 className="text-center text-3xl font-bold mb-4 text-blue-950 ">add your visa</h2>

           <div className="space-y-2 grid grid-cols-2 gap-4">

            {/* country image */}
            <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-base">Country image </span>
             </div>
             <input type="text" name="image" placeholder="image " className="input input-bordered grow w-full" />
           </label>

           {/* country name */}
           <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-base">Country name </span>
             </div>
             <input type="text" name="name" placeholder="country name" className="input input-bordered grow w-full" />
           </label>

           {/* visa type */}
           <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-base">Visa type</span>
             </div>
             <input type="text" name="type" placeholder="Visa type" className="input input-bordered grow w-full" />
           </label>

           {/*Processing time*/}
           <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-base">Processing time</span>
             </div>
             <input type="number" name="time" placeholder="processing time" className="input input-bordered grow w-full" />
           </label>

           {/* required document */}
           <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-base">required document</span>
             </div>
             <input type="text" name="document" placeholder="required document" className="input input-bordered grow w-full" />
           </label>

           {/*description*/}
           <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-base">Description</span>
             </div>
             <input type="text" name="description" placeholder="Description" className="input input-bordered grow w-full" />
           </label>

           {/*age restriction*/}
           <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-base">Age restriction</span>
             </div>
             <input type="number" name="age" placeholder="Add your age" className="input input-bordered grow w-full" />
           </label>

           {/*Fee*/}
           <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-base">Fee</span>
             </div>
             <input type="number" name="fee" placeholder="Fee" className="input input-bordered grow w-full" />
           </label>

           {/*validity*/}
           <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-base">validity</span>
             </div>
             <input type="text" name="validity" placeholder="validity" className="input input-bordered grow w-full" />
           </label>

           {/*Application method*/}
           <label className="form-control w-full">
             <div className="label">
               <span className="label-text font-bold text-base">Application method</span>
             </div>
             <input type="text" name="method" placeholder="Application method" className="input input-bordered grow w-full" />
           </label>
             
             
            <button type="submit" className="btn w-3/4 text-white text-bold text-lg bg-blue-950 col-span-2 mx-auto mb-7">Add Visa</button>
        </div>
           </form>
        </div>
        </div>
    );
};

export default AddVisa;