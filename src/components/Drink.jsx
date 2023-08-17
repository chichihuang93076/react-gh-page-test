import { useState } from "react";

const Drink = (drink) => {
  //console.log(drink);
  const [item] = useState(drink.drink);

  return (
    <>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{item.name}</h5>
        <small>${item.price}</small>
      </div>
      <p className="mb-1">{item.description}</p>
    </>
  );
};

export default Drink;
