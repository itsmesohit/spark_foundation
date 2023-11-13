const Razorpay = require('razorpay');

let instance =   new Razorpay({ key_id: 'rzp_live_u47a77zodK1i03', key_secret: '9nbIntEBKE4saQTzNL8Ui9hS' })
// console.log(instance);

const createOrder = async(req,res)=>{
    try {
        const amount = 500*100
        const options = {
            amount: amount,
            currency: 'INR',
            receipt: 'sohitku404@gmail.com'
        }

        instance.orders.create(options, 
            (err, order)=>{
                if(!err){
                    res.status(200).send({
                        success:true,
                        msg:'Order Created',
                        order_id:"order_MvP1TezWYyEVw9",
                        amount:amount,
                        key_id:"rzp_live_u47a77zodK1i03",
                        product_name:"Shirt",
                        description:"This is a shirt",
                        contact:"8567345632",
                        name: "Sandeep Sharma",
                        email: "sandeep@gmail.com"
                    });
                }
                else{
                    res.status(400).send({success:false,msg:'Something went wrong!'});
                }
            }
        );

    } catch (error) {
        console.log(error.message);
    }
    // res.status(200).send({success:true,msg:'Order Created'});
    // console.log(res.order_id)
}

const ress = createOrder();
console.log(ress.order_id);

