import React from 'react';

const Home = () => {
  return (
    <div>
      <div>
        <h1>Cart: 0</h1>
      </div>
      <div>
        <img
          src="https://media.wired.com/photos/611307f52f9ffe04bf36c862/master/pass/Gear-Samsung-Unpacked-Featured.jpg"
          alt="Samsung Galaxy Z Fold3"
          width="100px"
          height="120px"
          />
        <span> Samsung </span>
        <span> Price: $1000.00 </span>
        <button type="button">Add to cart</button>
      </div>
    </div>
  );
}

export default Home;
