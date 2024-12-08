import VisaCard from "./VisaCard";

const LatestVisaSection = ({ visas }) => {
    return (
      <div className="py-10 bg-emerald-50">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-emerald-700 mb-8">
          Latest Visas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-16">
          {visas.map((visa) => (
            <VisaCard key={visa._id} visa={visa} />
          ))}
        </div>
      </div>
    );
  };
  
  export default LatestVisaSection;
  