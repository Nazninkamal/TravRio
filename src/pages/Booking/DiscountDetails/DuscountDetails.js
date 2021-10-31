import React from 'react';
import discount from '../../../images/2.png'

const DuscountDetails = () => {
    return (
       <div>
           <h1>Discounts</h1>
            <div className="row my-5">
            
            <div className="col-lg-12 col-md-12 col-sm-12">
              <img src={discount} alt="" />
            </div>

            <div className="row my-5 mx-3">
            <div className="col-lg-3 col-md-3 col-sm-6  text-xl-start">
                <h4>Destination</h4>
                <hr />
                <h6>Goa to London</h6>
                <hr />
                <h6>Mumbai to Shimla</h6>
                <hr />
                <h6>Manali to Goa</h6>
                <hr />
                <h6>Mumbai to Chandigarh</h6>
                <hr />
                <h6>Dhaka to Darjiling</h6>
                <hr />
                <h6>Dhaka to Shylet</h6>

                </div>

                <div className="col-lg-3  text-xl-start col-md-3 col-sm-6">
                    <h4>Purchase</h4>
                    <hr />
                <h6>$950</h6>
                <hr />
                <h6>$950</h6>
                <hr />
                <h6>$950</h6>
                <hr />
                <h6>$950</h6>
                <hr />
                <h6>$950</h6>
                <hr />
                <h6>$450</h6>

                </div>
                <div className="col-lg-1">

                </div>

                <div className="col-lg-5  col-md-12 col-sm-12  text-xl-start my-5">
                    

                 <p>For over 30 years, WTTC has conducted research on the economic impact of Travel & Tourism in 185 countries and issues such as overcrowding, taxation, policy-making, and many others to raise awareness of the importance of the Travel & Tourism sector as one of the world’s largest economic sectors.As a non-profit membership-based organisation, our members and partners are the core of our organisation and include over 200 CEOs, Chairpersons, and Presidents of the world’s leading Travel & Tourism companies from all geographies and industries. 

</p>
                </div>
            </div>
        </div>
       </div>
    );
};

export default DuscountDetails;