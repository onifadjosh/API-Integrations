// import { useEffect } from "react"



const Success = () => {

    // useEffect(() =>{
    //     //creating a script element
    //     const script = document.createElement('script');
    //     script.src = 'https://sdk.monnify.com/plugin/monnify.js';
    //     script.async = true;

    //     //appending the script to the document body
    //     document.body.appendChild(script);

    //     //when the component unmounts the script element needs to be removed
    //     return () =>{
    //         document.body.removeChild(script);

    //     };
    // }, []);

  return (
    <div>Payment Successful!</div>
  )
}

export default Success