import React from "react"
import { navigate } from "@reach/router"
var fs = require('browserify-fs');

const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  color: "#fff",
  outline: "none",
  padding: "12px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(255, 178, 56)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}
const Checkout = class extends React.Component {
  // Initialise Stripe.js with your publishable key.
  // You can find your key in the Dashboard:
  // https://dashboard.stripe.com/account/apikeys
  componentDidMount() {
    // this.stripe = window.Stripe("pk_test_8txIhEap5013Kpdjq4QYRP0l00nxLwFpqg")
  }
  async redirectToCheckout(event) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku: "sku_GKygrSsH19KCr6", quantity: 1 }],
      successUrl: `http://localhost:8000/page-2/`,
      cancelUrl: `http://localhost:8000/app`,
    })
    if (error) {
      console.warn("Error:", error)
    }
  }
  render() {
    return (
      <button
        style={buttonStyles}
        onClick={
          event => {
            // this.redirectToCheckout(event)
            console.log(JSON.stringify(this.props.projects, null, 2))
            // fs.writeFile('data.txt', JSON.stringify(this.props.projects, null, 2) , 'utf-8');
            fs.mkdir('/home', function() {
              fs.writeFile('/home/hello-world.txt', 'Hello world!\n', function() {
                fs.readFile('/home/hello-world.txt', 'utf-8', function(err, data) {
                  console.log(data);
                });
              });
            });
          }
        }
      >
        DOWNLOAD MY WEBPAGE
      </button>
    )
  }
}
export default Checkout