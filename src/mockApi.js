const mockDestinations = {
  Japan: [
    { id: 1, name: "Basic Plan", data: "3GB", price: 10 },
    { id: 2, name: "Standard Plan", data: "10GB", price: 25 },
    { id: 3, name: "Premium Plan", data: "50GB", price: 50 },
  ],
  USA: [
    { id: 1, name: "Basic Plan", data: "3GB", price: 15 },
    { id: 2, name: "Standard Plan", data: "10GB", price: 30 },
    { id: 3, name: "Premium Plan", data: "50GB", price: 60 },
  ],
  France: [
    { id: 1, name: "Basic Plan", data: "3GB", price: 15 },
    { id: 2, name: "Standard Plan", data: "10GB", price: 30 },
    { id: 3, name: "Premium Plan", data: "50GB", price: 60 },
  ],
};

export const fetchDestinationPlans = async (destination) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mockDestinations[destination]) {
        resolve(mockDestinations[destination]);
      } else {
        reject("Destination not found");
      }
    }, 1000);
  });
};

export const postPlanPurchase = async (planId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (planId) {
        resolve({
          message: "Purchase successful",
          eSIMDetails: {
            id: "eSIM12345",
            instructions: "Download your eSIM from the provided link.",
          },
        });
      } else {
        reject("Purchase failed. Please try again.");
      }
    }, 1000);
  });
};
