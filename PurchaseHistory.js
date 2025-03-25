import React, { useState } from "react";

const PurchaseHistory = () => {
  const [history, setHistory] = useState([]);
  const [newPurchase, setNewPurchase] = useState({
    name: "",
    serial: "",
    amount: "",
    duration: "",
    dailyCycles: "",
    date: "",
    price: "",
    invoice: "",
  });

  const handleInputChange = (e) => {
    setNewPurchase({ ...newPurchase, [e.target.name]: e.target.value });
  };

  const addPurchase = () => {
    if (newPurchase.name && newPurchase.serial && newPurchase.price && newPurchase.invoice) {
      setHistory([...history, { ...newPurchase, id: Date.now() }]);
      setNewPurchase({
        name: "",
        serial: "",
        amount: "",
        duration: "",
        dailyCycles: "",
        date: "",
        price: "",
        invoice: "",
      });
    } else {
      alert("Please enter at least Name, Serial, Price, and Invoice!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-4">Purchase History</h2>

        {/* Input Form */}
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Sensor Name" value={newPurchase.name} onChange={handleInputChange} className="border p-2 rounded" />
          <input type="text" name="serial" placeholder="Serial Number" value={newPurchase.serial} onChange={handleInputChange} className="border p-2 rounded" />
          <input type="number" name="amount" placeholder="Amount" value={newPurchase.amount} onChange={handleInputChange} className="border p-2 rounded" />
          <input type="number" name="duration" placeholder="Duration (mins)" value={newPurchase.duration} onChange={handleInputChange} className="border p-2 rounded" />
          <input type="number" name="dailyCycles" placeholder="Daily Cycles" value={newPurchase.dailyCycles} onChange={handleInputChange} className="border p-2 rounded" />
          <input type="date" name="date" value={newPurchase.date} onChange={handleInputChange} className="border p-2 rounded" />
          <input type="number" name="price" placeholder="Price ($)" value={newPurchase.price} onChange={handleInputChange} className="border p-2 rounded" />
          <input type="text" name="invoice" placeholder="Invoice Number" value={newPurchase.invoice} onChange={handleInputChange} className="border p-2 rounded" />
        </div>

        <button onClick={addPurchase} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 w-full">Add to Purchase History</button>

        {history.length > 0 ? (
          history.map((item) => (
            <div key={item.id} className="border-b py-4">
              <h3 className="text-lg font-semibold text-red-500">{item.name}</h3>
              <p className="text-gray-600">Invoice: {item.invoice}</p>
              <p className="text-gray-800 font-bold">Price: ${parseFloat(item.price).toFixed(2)}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-4">No purchases recorded</p>
        )}
      </div>
    </div>
  );
};

export default PurchaseHistory;
