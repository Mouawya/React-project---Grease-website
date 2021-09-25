import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import { GiReceiveMoney } from "react-icons/gi";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { price } = useParams();
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (paymentMethod) {
      setSuccess(true);
    }
  };

  const cardElementsOptions = {
    hidePostalCode: true,
  };

  if (success === false) {
    return (
      <form onSubmit={handleSubmit} className="payment-form">
        <label>Name</label>
        <input name="name" type="" placeholder="" required />
        <label>E-mail</label>
        <input name=" email" type="" placeholder="" required />

        <CardElement options={cardElementsOptions} />

        <button
          type="submit"
          disabled={!stripe || !elements}
          className="pay-btn"
        >
          Pay €{price}
        </button>
      </form>
    );
  } else {
    return (
      <div>
        <GiReceiveMoney color="red" size="40" />
        <p style={({ padding: "10px" }, { fontSize: "20px" })}>
          We have successfully received your payment!
        </p>
      </div>
    );
  }
};

export default CheckoutForm;
