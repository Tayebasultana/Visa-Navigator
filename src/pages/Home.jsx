import Banner from "../components/Banner/Banner";
import FAQSection from "../components/FAQSection";
import FlightBookingSection from "../components/FlightBookingSection";
import LatestVisaSection from "../components/LatestVisaSection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestVisaSection></LatestVisaSection>
            <FlightBookingSection></FlightBookingSection>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Home;