import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDestinationPlans, postPlanPurchase } from "../mockApi";
import Card from "../components/Card";
import "../styles/DestinationPage.css";

function DestinationPage() {
  const { country } = useParams();
  const [plans, setPlans] = useState([]);
  const [error, setError] = useState("");
  const [loadingStates, setLoadingStates] = useState({});
  const [purchaseMessage, setPurchaseMessage] = useState("");

  useEffect(() => {
    fetchDestinationPlans(country)
      .then((data) => setPlans(data))
      .catch((err) => setError(err));
  }, [country]);

  const handlePurchase = async (planId) => {
    setLoadingStates((prev) => ({ ...prev, [planId]: true }));
    setPurchaseMessage(""); //TODO: Clear any previous message
    try {
      const response = await postPlanPurchase(planId);
      setPurchaseMessage(response.message);
    } catch (err) {
      setPurchaseMessage(err);
    } finally {
      setLoadingStates((prev) => ({ ...prev, [planId]: false }));
    }
  };

  return (
    <div className="destination-page">
      <h1> {country}</h1>
      {error && <p className="error">{error}</p>}
      {purchaseMessage && <p className="purchase-message">{purchaseMessage}</p>}
      <div className="plans">
        {plans.map((plan) => (
          <div key={plan.id} className="plan-card">
            <Card
              title={plan.name}
              description={`${plan.data} for $${plan.price}`}
            />
            <button
              onClick={() => handlePurchase(plan.id)}
              disabled={loadingStates[plan.id]}
              className="purchase-button"
            >
              {loadingStates[plan.id] ? "Processing..." : "Buy Now"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DestinationPage;
