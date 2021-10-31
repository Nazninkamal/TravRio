import React from 'react';
import Discount from '../Discount/Discount';
import discount1 from '../../../images/discounts/goa.png'
import discount2 from '../../../images/discounts/shimla.png'
import discount3 from '../../../images/discounts/manali.png'
import discount4 from '../../../images/discounts/chandirah.png'
import discount5 from '../../../images/discounts/darjiling.png'
import discount6 from '../../../images/discounts/darjiling.png'
const discounts = [
    {
        img:discount1,
        name:"Goa to London",
        price:950,
        dis:60
    },
    {
        img:discount2,
        name:"Mumbai to Shimla",
        price:950,
        dis:50
    },
    {
        img:discount3,
        name:"Manali to Goa",
        price:950,
        dis:20
    },
    {
        img:discount4,
        name:"Mumbai to Chandigarh",
        price:950,
        dis:70
    },
    {
        img:discount5,
        name:"Dhaka to Darjiling",
        price:950,
        dis:40
    },

    {
        img:discount6,
        name:"Dhaka to Sylet",
        price:450,
        dis:31
    }

]

const Discounts = () => {
    
    return (
        <div id="discounts" className="row mx-5 my-5">
           
       <div className="">
       <h5>Top Discount Activities</h5>
         <h2>Discount Of The Month</h2>
           </div>
           <div className="row my-5">
          {
              discounts.map(discount => <Discount
              key={discount.name}
              discount = {discount}
              ></Discount>)
          }
           </div>
           
        </div>
    );
};

export default Discounts;