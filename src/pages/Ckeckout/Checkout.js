import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const Checkout = () => {
  const [checkoutItems, setCheckoutItems] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/checkout/${id}`)
      .then((res) => res.json())
      .then((data) => setCheckoutItems(data));
  }, [id]);
  const confirm = () => {
    toast.success("Course purchase successfully")
  }
  return (
    <div>
      <h3 className="text-center mt-3">Checkout page</h3>
      <div className="mx-auto w-25 mt-2 mt-sm-5">
        <div className="card">
          <img src={checkoutItems.img} className="img-fluid" alt="" />
          <div className="card-body">
            <h4 className="card-title mt-2 text-center">
              {checkoutItems.title}
            </h4>
            <div>
              <button className="btn btn-success w-100 mt-3" onClick={confirm}>
                Click to confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
