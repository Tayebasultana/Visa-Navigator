import { useLoaderData } from "react-router-dom";
import VisaCard from "../components/VisaCard";


const AllVisa = () => {

   const allVisa = useLoaderData();
//    console.log(allVisa);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-20 py-7">
           {
            allVisa.map(visa => <VisaCard key={visa._id} visa={visa}></VisaCard>)
           }
        </div>
    );
};

export default AllVisa;