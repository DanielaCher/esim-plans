import React from "react";
import Card from "../components/Card";

function PopularCountriesSection() {
  const franceFlag = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 600"
      width="100%"
      height="100%"
    >
      <rect width="900" height="600" fill="#CE1126" />
      <rect width="600" height="600" fill="#fff" />
      <rect width="300" height="600" fill="#002654" />
    </svg>
  );

  const usaFlag = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1235 650"
      width="100%"
      height="100%"
    >
      <rect width="1235" height="650" fill="#b22234" />
      <g fill="#fff">
        <rect width="1235" height="46.4" y="46.4" />
        <rect width="1235" height="46.4" y="139.2" />
        <rect width="1235" height="46.4" y="232" />
        <rect width="1235" height="46.4" y="324.8" />
        <rect width="1235" height="46.4" y="417.6" />
        <rect width="1235" height="46.4" y="510.4" />
      </g>
      <rect width="494" height="324.8" fill="#3c3b6e" />
      <g fill="#fff">
        {Array.from({ length: 9 }, (_, row) =>
          Array.from({ length: 6 }, (_, col) => (
            <polygon
              key={`${row}-${col}`}
              points="30,12.4 36.8,21 47.6,24.1 38.7,30.7 41.2,41.4 30,35.6 18.8,41.4 21.3,30.7 12.4,24.1 23.2,21"
              transform={`translate(${col * 82 + 20}, ${row * 37 + 20})`}
            />
          ))
        )}
      </g>
    </svg>
  );
  const japanFlag = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 600"
      width="100%"
      height="100%"
    >
      <rect width="900" height="600" fill="#ffffff" />
      <circle cx="450" cy="300" r="180" fill="#bc002d" />
    </svg>
  );
  return (
    <section className="popular-countries">
      <h2>Popular Countries</h2>
      <div className="cards">
        <Card title="Japan" svgContent={japanFlag} />
        <Card title="USA" svgContent={usaFlag} />
        <Card title="France" svgContent={franceFlag} />
      </div>
    </section>
  );
}

export default PopularCountriesSection;
