import React from 'react';
import Card from './Card'; // Import the Card component

const YourComponent = () => {
  return (
    <div id="root">
      <div className="App">
        <div className="Header">
          <img src="/imgs/awning.png" alt="Food Truck Favorites" />
          <h1>Local Bakeries in Huntsville, Alabama</h1>
        </div>

        <div className="container">
          <Card
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG8PXDYJsAN6sLsh52JLtpihh6AE5SyP9oMQ&usqp=CAU"
            name="Edgars Bakery"
            cuisine="Huntsville, AL"
            link="https://www.edgarsbakery.com/menus/"
          />
          <Card
            imageUrl="https://lh5.googleusercontent.com/p/AF1QipMtil7cl1DbqjXzTXKcfqmV3-5Ts-mAmq_nIeZJ=w114-h114-n-k-no"
            name="Tous Les Jours"
            cuisine="Huntsville, AL"
            link="https://tljhsv.com/"
          />
          
          <Card
            imageUrl="https://lh3.googleusercontent.com/p/AF1QipPVLRNgPHxrcv75IFe3VXTMy5nW4brArOdfcdgN=s680-w680-h510"
            name="The Moon Bakeshop"
            cuisine="Huntsville, AL"
            link="https://www.themoonbakeshop.com/menu"
          />
          <Card
            imageUrl="https://lh3.googleusercontent.com/p/AF1QipPQUxKZ_Cy13nXAnbIeR45mrWR_MH4ql4jNZ8cF=s680-w680-h510"
            name="L'Etoile Patisserie"
            cuisine="Huntsville, AL"
            link="https://www.letoilehsv.com/"
          />
          <Card
            imageUrl="https://lh3.googleusercontent.com/p/AF1QipNEbVOI1FjbaulXt4_Dw4-Wf-xsxEO5V7F8EqLo=s680-w680-h510"
            name="Parlor Doughnuts"
            cuisine="Huntsville, AL"
            link="https://www.parlordoughnuts.com/"
          />
          
          <Card
            imageUrl="data:image/jpeg;base64,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"
            name="Nothing Bundt Cakes"
            cuisine="Madison, AL"
            link="https://www.nothingbundtcakes.com/all-products/?utm_campaign=website_link&utm_medium=organic&utm_source=gbplisting&location=0525&fulfillment=3/1/2024"
          />
          <Card
            imageUrl="https://lh3.googleusercontent.com/p/AF1QipPHtZ4UPb2zX-d2E-MjJ9LQJCbd_iqDaf4wLEhH=s680-w680-h510"
            name="Mason Dixon Bakery & Bistro"
            cuisine="Huntsville, AL"
            link="https://masondixonbakery.com/"
          />
          <Card
            imageUrl="https://lh3.googleusercontent.com/p/AF1QipO97addD4Ta_0-WxkGp8eVMqlupJCIZYOj-6Cx2=s680-w680-h510"
            name="Canadian Bakin"
            cuisine="Huntsville AL"
            link="https://www.canadianbakinbread.com/"
          />
               
          <Card
            imageUrl="https://lh3.googleusercontent.com/p/AF1QipORmUMPLCSGS_meiZHYT_rDq3-CvzhGSbHGrxrZ=s680-w680-h510"
            name="Great Harvest Bread Co"
            cuisine="Huntsville AL"
            link="https://greatharvesthuntsvilleal.com/"
          />
          <Card
            imageUrl="https://lh3.googleusercontent.com/p/AF1QipPgip8Rg0nbWIZ03O13kHsSBYu3EvWT1dr6fv0I=s680-w680-h510"
            name="Bigfoot's Little Donuts"
            cuisine="Huntsville AL"
            link="http://www.bigfootslittledonuts.com/"
          />
          
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
