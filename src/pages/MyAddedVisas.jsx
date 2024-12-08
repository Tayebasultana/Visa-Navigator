import { useState, useEffect, useContext } from 'react';
import { authContext } from '../components/AuthProvider/AuthProvider';
import MyVisaCard from '../components/MyVisaCard';

const MyAddedVisas = () => {
  const [visaData, setVisaData] = useState([]);
  const [email, setEmail] = useState('');
  
  
  const { user } = useContext(authContext); 

  useEffect(() => {
    
    if (user && user.email) {
      setEmail(user.email);  

      
      fetch(`http://localhost:5000/my-added-visa?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setVisaData(data); 
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
    <div>
        <h2 className='font-bold text-2xl py-10 text-center text-emerald-800'>
            MY ADDED VISA
        </h2>
    </div>
     <div className="visa-data grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-20 py-7">
      {visaData.length > 0 ? (
        visaData.map((visa) => (
            <MyVisaCard  key={visa._id} visa={visa}></MyVisaCard>
        ))
      ) : (
        <p className='text-center text-red-500 col-span-4 pb-40'>No visas found for this email.</p>
      )}
    </div>
   </div>
  );
};

export default MyAddedVisas;
