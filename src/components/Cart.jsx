import { useState } from "react";

const Cart = (cart) => {
  //console.log(cart.cart);
  const [item] = useState(cart.cart);

  return (
    <tr key={item.id}>
      <td>
        <button type="button" className="btn btn-sm">
          x
        </button>
      </td>
      <td>{item.name}</td>
      <td>
        <small>{item.description}</small>
      </td>
      <td>
        <select className="form-select">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </td>
      <td>{item.price}</td>
      <td>{item.subtotal}</td>
    </tr>
  );
};

export default Cart;
