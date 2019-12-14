import React from "react";
import axios from "axios";

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
    this.stripe = window.Stripe("pk_test_8txIhEap5013Kpdjq4QYRP0l00nxLwFpqg")
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
    // return (
    //   <button
    //     style={buttonStyles}
    //     onClick={event => this.redirectToCheckout(event)}
    //   >
    //     DOWNLOAD MY WEBPAGE
    //   </button>
    // )

    return (
      <button
        style={buttonStyles}
        onClick={
          async event => {
            // this.redirectToCheckout(event)
            console.log(this.props.projects)
            console.log(JSON.stringify(this.props.projects))
            // const response = await axios.post(
            //   `http://localhost:3000/api/tasks/update`, 
            //   JSON.stringify(this.props.projects)
            // );

            let payload = this.props.projects.map(x => {
              let y = {}
              y["title"] = x.title
              y["description"] = x.description
              y["link"] = x.link
              let a = {}
              for (var i = 0; i < x.technologies.length; i++) {
                a[i] = x.technologies[i]
              }
              y["technologies"] = a
              return y
            })
            console.log(JSON.stringify(payload))

            const response = await axios.post(
              `http://localhost:3000/api/tasks/update`, 
              JSON.stringify(payload)
            );

            console.log(response);
          }
        }
      >
        DOWNLOAD MY WEBPAGE
      </button>
    )
  }
}
export default Checkout