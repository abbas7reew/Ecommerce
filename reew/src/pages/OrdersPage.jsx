import { useOrders } from "../context/OrdersContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ إضافة

export default function OrdersPage() {
  const { orders, deleteOrder, getOrderById } = useOrders();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const navigate = useNavigate(); // ✅ إضافة

  const handleViewDetails = (id) => {
    const order = getOrderById(id);
    setSelectedOrder(order); // ⬅️ لم نحذفه (كما طلبت)
    navigate(`/orders/${id}`); // ✅ الانتقال لصفحة التفاصيل
  };

  return (
    <div className="p-4 mt-3">
      <h1 className="text-xl font-bold mb-4">Orders</h1>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul className="space-y-3">
          {orders.map((order) => (
            <li
              key={order.id}
              className="border border-black p-3 rounded flex justify-between items-center"
            >
              <span className="dark:text-white" >{order.name}</span>

              <div className="space-x-2">
                <button
                  onClick={() => handleViewDetails(order.id)}
                  className="px-3 py-1 bg-blue-500 text-white rounded"
                >
                  View Details
                </button>

                <button
                  onClick={() => deleteOrder(order.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      
    </div>
  );
}
