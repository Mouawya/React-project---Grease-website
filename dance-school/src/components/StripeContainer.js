import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const PUBLISHABLE_KEY =
  "pk_test_51JdGaCGMlL9OeKhrFP1BNkraED1W010pPWGnAf5C24q358E0Mo2sM3KLNTPRzyYFMPG8Y7RIBx2chGOf6gwSJjXB00RojGwBbz";

const stripePromise = loadStripe(PUBLISHABLE_KEY);

const StripeContainer = () => {
  return (
    <div className="payment-container">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default StripeContainer;
