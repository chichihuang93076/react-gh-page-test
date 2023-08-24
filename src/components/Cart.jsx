import { useEffect } from "react";

const Cart = (props) => {
  let { cart, setCart, sum, updateCart } = props;

  return (
    <div className="col-md-8">
      <table className="table">
        <thead>
          <tr>
            <th scope="col" width="50">
              操作
            </th>
            <th scope="col">品項</th>
            <th scope="col">描述</th>
            <th scope="col" width="90">
              數量
            </th>
            <th scope="col">單價</th>
            <th scope="col">小計</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <button
                    type="button"
                    className="btn btn-sm"
                    onClick={() => {
                      const newCart = cart.filter((cartItem) => {
                        return cartItem.id !== item.id;
                      });
                      setCart(newCart);
                    }}
                  >
                    x
                  </button>
                </td>
                <td>{item.name}</td>
                <td>
                  <small>{item.description}</small>
                </td>
                <td>
                  <select
                    className="form-select"
                    value={item.quantity}
                    onChange={(e) => {
                      const value = e.target.value;
                      updateCart(item, value);
                    }}
                  >
                    {[...Array(10).keys()].map((item) => {
                      return (
                        <option value={item + 1} key={item}>
                          {item + 1}
                        </option>
                      );
                    })}
                  </select>
                </td>
                <td>{item.price}</td>
                <td>{item.subtotal}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="text-end mb-3">
        <h5>
          總計: <span>${sum}</span>
        </h5>
      </div>
      <textarea
        className="form-control mb-3"
        rows="3"
        placeholder="備註"
      ></textarea>
      <div className="text-end">
        <button className="btn btn-primary">送出</button>
      </div>
    </div>
  );
};

export default Cart;
