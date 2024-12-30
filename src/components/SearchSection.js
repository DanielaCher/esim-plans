import React from "react";

function SearchSection({
  destination,
  setDestination,
  handleSearch,
  sectionImage,
}) {
  return (
    <section
      className="search"
      style={{
        backgroundImage: `url(${sectionImage})`,
        alignItems: "center",
        height: "400px",
      }}
    >
      <h1 className="text">Get your eSIM now</h1>
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
  );
}

export default SearchSection;
