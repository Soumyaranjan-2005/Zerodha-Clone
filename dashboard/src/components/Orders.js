import React, { useState, useEffect } from "react";
import api from "../api";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    api
      .get("/allOrders")
      .then((res) => {
        setAllOrders(Array.isArray(res.data) ? res.data : []);
      })
      .catch((error) => {
        console.error("Failed to load orders:", error);
        setAllOrders([]);
      });
  }, []);

  return (
    <div className="orders">
      {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <a href="/" className="btn" style={{ textDecoration: "none" }}>
            Get started
          </a>
        </div>
      ) : (
        <>
          <h3 className="title">Orders ({allOrders.length})</h3>
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {allOrders.map((order, index) => {
                  const isBuy = (order.model || order.mode || "").toUpperCase() === "BUY" || !(order.model || order.mode);
                  const typeClass = isBuy ? "profit" : "loss";
                  return (
                    <tr key={index}>
                      <td>{order.name || "-"}</td>
                      <td>{order.qty || 0}</td>
                      <td>{order.price ? Number(order.price).toFixed(2) : "0.00"}</td>
                      <td className={typeClass}>{order.model || order.mode || "BUY"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;

