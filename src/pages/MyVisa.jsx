import { useLoaderData } from "react-router-dom";
// import MyVisaCard from "../components/MyVisaCard";
// import { useState, useEffect } from "react";

const MyVisa = () => {
    
    const {image, name, type} = useLoaderData();




    // const [data, setData] = useState([]); 
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);


    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch("http://localhost:5000/visa");
    //             if (!response.ok) {
    //                 throw new Error("Failed to fetch data");
    //             }
    //             const result = await response.json();
    //             setData(result); 
    //         } catch (err) {
    //             setError(err.message); 
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, []);

    // if (loading) {
    //     return <p>Loading...</p>;
    // }

    // if (error) {
    //     return <p>Error: {error}</p>;
    // }



    

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-20 py-7">
            
            
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


            {/* {
                myAllVisa.map(myVisa => <MyVisaCard key={myVisa._id} myVisa={myVisa}></MyVisaCard>)
            } */}
        </div>
    );
};

export default MyVisa;
