import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [newSensor, setNewSensor] = useState({
    name: "",
    serial: "",
    location: "",
    date: "",
    amount: "",
    duration: "",
    dailyCycles: "",
    price: "",
  });

  const handleInputChange = (e) => {
    setNewSensor({ ...newSensor, [e.target.name]: e.target.value });
  };

  const addSensorToCart = () => {
    if (newSensor.name && newSensor.serial && newSensor.price) {
      setCartItems([...cartItems, { ...newSensor, id: Date.now() }]);
      setNewSensor({
        name: "",
        serial: "",
        location: "",
        date: "",
        amount: "",
        duration: "",
        dailyCycles: "",
        price: "",
      });
    } else {
      alert("Please enter at least Name, Serial, and Price!");
    }
  };

  const removeSensor = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price || 0), 0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-4">Cart</h2>

        {/* Input Form */}
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Sensor Name" value={newSensor.name} onChange={handleInputChange} className="border p-2 rounded" />
          <input type="text" name="serial" placeholder="Serial Number" value={newSensor.serial} onChange={handleInputChange} className="border p-2 rounded" />
          <input type="text" name="location" placeholder="Location" value={newSensor.location} onChange={handleInputChange} className="border p-2 rounded" />
          <input type="date" name="date" value={newSensor.date} onChange={handleInputChange} className="border p-2 rounded" />
          <input type="number" name="amount" placeholder="Amount" value={newSensor.amount} onChange={handleInputChange} className="border p-2 rounded" />
          <input type="number" name="duration" placeholder="Duration (mins)" value={newSensor.duration} onChange={handleInputChange} className="border p-2 rounded" />
          <input type="number" name="dailyCycles" placeholder="Daily Cycles" value={newSensor.dailyCycles} onChange={handleInputChange} className="border p-2 rounded" />
          <input type="number" name="price" placeholder="Price ($)" value={newSensor.price} onChange={handleInputChange} className="border p-2 rounded" />
        </div>

        <button onClick={addSensorToCart} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 w-full">Add to Cart</button>

        {/* Cart Items List */}
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="border-b py-4 flex justify-between">
              <div>
                <h3 className="text-lg font-semibold text-red-500">{item.name}</h3>
                <p className="text-gray-600">Serial: {item.serial}</p>
                <p className="text-gray-800 font-bold">Price: ${parseFloat(item.price).toFixed(2)}</p>
              </div>
              <button onClick={() => removeSensor(item.id)} className="text-red-500">Remove</button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-4">No items in cart</p>
        )}

        <div className="flex justify-between mt-4">
          <h3 className="text-xl font-bold">Subtotal:</h3>
          <h3 className="text-xl font-bold text-red-500">${total.toFixed(2)}</h3>
        </div>

        <button className="bg-orange-500 text-white px-4 py-2 rounded-md w-full mt-4">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;

