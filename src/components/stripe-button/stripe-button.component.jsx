import React from "react";

import SpriteCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForSprite = price * 100;
  const publishableKey =
    "pk_test_51GqF7hCusX38wi6hFS322Xl8G1c2fropKsUaomW5dL03QYfAc5YJkYWMfuqnuIPap4Vp7EeosaPyhQUpiXMwspHh00mTo8MN4t";
    const onToken = token => {
        console.log(token)
        alert('payment saccessful')
    }


    return (
        <SpriteCheckout
            lable='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is: $${price}`}
            amount={priceForSprite}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}

        />
    )
};

export default StripeCheckoutButton;
