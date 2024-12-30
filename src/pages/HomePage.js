import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
        <section
          className="search"
          style={{
            backgroundImage: `url(${sectionImage})`,
            alignItems: "center",
            height: "400px",
          }}
        >
          <div className="text">Get your eSIM now </div>
          <div className="search-container">
            <input
              type="text"
              placeholder="Choose your destination.."
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
