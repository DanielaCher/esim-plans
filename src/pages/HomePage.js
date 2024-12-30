import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import SearchSection from "../components/SearchSection";
import PopularCountriesSection from "../components/PopularCountriesSection";
import WhatIsEsimSection from "../components/WhatIsEsimSection";
import HowItWorksSection from "../components/HowItWorksSection";
import "./../styles/HomePage.css";
import sectionImage from "../images/section-image.jpg";

function HomePage() {
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (destination) {
      navigate(`/destination/${destination}`);
    } else {
      alert("Please enter a destination");
    }
  };

  return (
    <div>
      <Header />
      <main className="homepage">
        <SearchSection
          destination={destination}
          setDestination={setDestination}
          handleSearch={handleSearch}
          sectionImage={sectionImage}
        />
        <PopularCountriesSection />
        <WhatIsEsimSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
