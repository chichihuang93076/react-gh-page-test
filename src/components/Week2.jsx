import { useState } from "react";
import Cart from "./Cart";
import Drink from "./Drink";
import OrderList from "./OrderList";

const Week2 = () => {
  const data = [
    {
      id: 1,
      name: "珍珠奶茶",
      description: "香濃奶茶搭配QQ珍珠",
      price: 50,
    },
    {
      id: 2,
      name: "冬瓜檸檬",
      description: "清新冬瓜配上新鮮檸檬",
      price: 45,
    },
    {
      id: 3,
      name: "翡翠檸檬",
      description: "綠茶與檸檬的完美結合",
      price: 55,
    },
    {
      id: 4,
      name: "四季春茶",
      description: "香醇四季春茶，回甘無比",
      price: 45,
    },
    {
      id: 5,
      name: "阿薩姆奶茶",
      description: "阿薩姆紅茶搭配香醇鮮奶",
      price: 50,
    },
    {
      id: 6,
      name: "檸檬冰茶",
      description: "檸檬與冰茶的清新組合",
      price: 45,
    },
    {
      id: 7,
      name: "芒果綠茶",
      description: "芒果與綠茶的獨特風味",
      price: 55,
    },
    {
      id: 8,
      name: "抹茶拿鐵",
      description: "抹茶與鮮奶的絕配",
      price: 60,
    },
  ];

  const [drinks] = useState(data);
  const [cart, setCart] = useState([]);
  const [sum, setSum] = useState(0);

  //計算總金額
  const sumtotal = (data) =>
    data
      .map((item) => item.qty * item.price)
      .reduce((arr, cur) => arr + cur, 0);

  const addToCart = (drink) => {
    const newCart = [
      ...cart,
      {
        ...drink,
        id: new Date().getTime(),
        quantity: 1,
        subtotal: drink.price,
      },
    ];
    setCart(newCart);
    setSum(sumtotal(newCart));
  };

  const updateCart = (item, value) => {
    // console.log(item, value);
    const newCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return {
          ...cartItem,
          quantity: parseInt(value),
          subtotal: cartItem.price * parseInt(value),
        };
      }
      return cartItem;
    });
    setCart(newCart);
    setSum(sumtotal(newCart));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="list-group">
            {drinks.map((item) => {
              return (
                <a
                  key={item.id}
                  href="#"
                  className="list-group-item list-group-item-action"
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(item);
                  }}
                >
                  <Drink key={item.id} drink={item} />
                </a>
              );
            })}
          </div>
        </div>
        <Cart cart={cart} setCart={setCart} sum={sum} updateCart={updateCart} />
      </div>
      <hr />
      <OrderList />
    </div>
  );
};

export default Week2;
