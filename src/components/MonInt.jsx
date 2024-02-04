import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';






const MonInt = () => {
    
    const navigate = useNavigate();

    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');

    useEffect(() =>{
        //creating a script element
        const script = document.createElement('script');
        script.src = 'https://sdk.monnify.com/plugin/monnify.js';
        script.async = true;

        //appending the script to the document body
        document.body.appendChild(script);

        //when the component unmounts the script element needs to be removed
        return () =>{
            document.body.removeChild(script);

        };
    }, []);


    const payWithMonnify= () =>{
        MonnifySDK.initialize({
            amount: 10000,
            currency: "NGN",
            reference:"OJ" + Math.floor((Math.random()*1000000000) + 1),
            customerFullName: "Onifade Joshua",
            apiKey: "MK_TEST_CWUQASNZVW",
            contractCode: "8213614991",
            paymentDescription: "Test Payment",
            customerName: customerName,
            customerEmail: customerEmail,
            customerPhone: customerPhone,
            // apiKey: "XXXXXXXXX",
            // contractCode: "XXXXXXX",
            isTestMode: true,
            onComplete: function(response){
                console.log(response);
                const paymentSuccessful = true;

                if (paymentSuccessful){
                    navigate('/success'); // Navigate to the success page
                } else{
                    //nothing
                }
            },

            onClose: function(data) {
                //Implement what should happen when the modal is closed here
                console.log(data);
            }

            
        
        })
    }

    

  return (
    <div>
        <form action="paymentForm">
            <label htmlFor="customerName">Customer Name</label>
            <input type="text" name="customerName" id="customerName"  value={customerName} onChange={(e) =>{
                setCustomerName(e.target.value)
            }}/>

            <label htmlFor="customerEmail">Customer Email</label>
            <input type="email" name="" id="customerEmail" value={customerEmail} onChange={(e) =>{
                setCustomerEmail(e.target.value)
            }}/>

            <label htmlFor="">Customer Phone</label>
            <input type="tel" name="" id="customerPhone" value={customerPhone} onChange={(e) =>{
                setCustomerPhone(e.target.value)
            }}/>

            <button type="button" onClick={payWithMonnify}>Pay With Monnify</button>
        </form>
    </div>
  )
}

export default MonInt