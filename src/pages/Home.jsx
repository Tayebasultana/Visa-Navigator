import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import FAQSection from "../components/FAQSection";
import FlightBookingSection from "../components/FlightBookingSection";
import LatestVisaSection from "../components/LatestVisaSection";

const Home = () => {
  const allVisa = useLoaderData(); 

  
//   const latestVisas = allVisa.slice(0, 6); 
const latestVisas = allVisa.slice(-6); 

  return (
    <div>
      <Banner />
      <LatestVisaSection visas={latestVisas} /> 
      <FlightBookingSection />
      <FAQSection />
    </div>
  );
};

export default Home;
