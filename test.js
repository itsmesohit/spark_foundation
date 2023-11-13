const express = require('express');
const Razorpay = require('razorpay');

const app = express();
const port = 3000;

// Replace with your Razorpay API keys
const razorpay = new Razorpay({
  key_id: 'rzp_live_u47a77zodK1i03',
  key_secret: '9nbIntEBKE4saQTzNL8Ui9hS',
});

app.get('/create-order', async (req, res) => {
  try {
    const options = {
      amount: 5*100, // Amount in paise (e.g., 50000 paise = 500 INR)
      currency: 'INR',
      receipt: 'order_rcptid_11',
    };

    // Create the Razorpay order
    razorpay.orders.create(options, (err, order) => {
      if (err) {
        console.error('Error creating Razorpay order:', err);
        res.status(500).send('Error creating order');
      } else {
        res.json(order);
        console.log(order);
      }
    });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});