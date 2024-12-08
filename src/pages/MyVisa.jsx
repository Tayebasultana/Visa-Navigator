// import { useLoaderData } from "react-router-dom";
import ApplyVisaCard from "../components/ApplyVisaCard";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../components/AuthProvider/AuthProvider";

const MyVisa = () => {
  // const myVisa = useLoaderData()
  // console.log(myVisa);
  const [myVisa, setMyVisa] = useState([])
  const { user } = useContext(authContext); 
  const [email, setEmail] = useState('');

  useEffect(() => {
    
    if (user && user.email) {
      setEmail(user.email);  
    console.log(user.email)
      
      fetch(`http://localhost:5000/my-visa/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setMyVisa(data); 
        })
        .catch((error) => {
          console.error("Error fetching visa data:", error);
        });
    } else {
      console.log("User not logged in or email not available");
    }
  }, [user]);




  return (
    <div>
      {myVisa.length > 0 ? (
        myVisa.map((visa) => (
          <ApplyVisaCard  key={visa._id} visa={visa}></ApplyVisaCard>
        ))
      ) : (
        <p className='text-center text-red-500 col-span-4 py-40'>No visas found for this email.</p>
      )}
    </div>
  );
};

export default MyVisa;