import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

export default class Checkout extends React.Component {
  onToken = (token, addresses) => {
    // TODO: Send the token information and any other
    // relevant information to your payment process
    // server, wait for the response, and update the UI
    // accordingly. How this is done is up to you. Using
    // XHR, fetch, or a GraphQL mutation is typical.
    console.log(token)
  };

  render() {
    return (
      <StripeCheckout
        stripeKey="pk_test_8txIhEap5013Kpdjq4QYRP0l00nxLwFpqg"
        token={this.onToken}
      />
    )
  }
}