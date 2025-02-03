import React, { useState } from "react";
import Swal from "sweetalert2";

const FlightBookingSection = () => {
  const [formData, setFormData] = useState({
    departure: "",
    destination: "",
    departureDate: "",
    returnDate: "",
    passengers: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://assignment-ten-server-eight-cyan.vercel.app/api/book-flight", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), 
      });
  
      const result = await response.json();
  
      if (response.ok) {
        Swal.fire({
          text: "Your flight has been booked successfully!",
          icon: "success",
        });
        
        setFormData({
          departure: "",
          destination: "",
          departureDate: "",
          returnDate: "",
          passengers: 1,
        });
      } else {
        Swal.fire({
          text: `Error: ${result.message}`,
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error booking flight:", error);
      Swal.fire({
        text: "An error occurred while booking the flight. Please try again.",
        icon: "error",
      });
    }
  };

  return (
    <section className="bg-emerald-200 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Book Your Flight
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Departure */}
          <div className="form-control">
            <label className="label font-bold text-gray-700">
              Departure
            </label>
            <input
              type="text"
              name="departure"
              value={formData.departure}
              onChange={handleChange}
              placeholder="Enter departure city"
              className="input input-bordered border-emerald-900 border-2  w-full"
              required
            />
          </div>

          {/* Destination */}
          <div className="form-control">
            <label className="label font-bold text-gray-700">
              Destination
            </label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Enter destination city"
              className="input input-bordered border-emerald-900 border-2  w-full"
              required
            />
          </div>

          {/* Departure Date */}
          <div className="form-control">
            <label className="label font-bold text-gray-700">
              Departure Date
            </label>
            <input
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              className="input input-bordered border-emerald-900 border-2 -300 w-full"
              required
            />
          </div>

          {/* Return Date */}
          <div className="form-control">
            <label className="label font-bold text-gray-700">
              Return Date
            </label>
            <input
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
              className="input input-bordered border-emerald-900 border-2  w-full"
            />
          </div>

          {/* Number of Passengers */}
          <div className="form-control">
            <label className="label font-bold text-gray-700">
              Passengers
            </label>
            <input
              type="number"
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
              min="1"
              max="10"
              className="input input-bordered border-emerald-900 border-2  w-full"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-white text-lg bg-gradient-to-r from-[#031716] via-[#0A7075] to-[#031716] hover:from-emerald-700 hover:to-emerald-500"
          >
            Book Flight
          </button>
        </form>
      </div>
    </section>
  );
};

export default FlightBookingSection;
