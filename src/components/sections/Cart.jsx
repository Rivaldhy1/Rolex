import { useEffect } from "react";
import { RemoveCartDataByName, USDollar } from "../../services/index";
import { useState } from "react";

const Cart = () => {
  const [dataCart, setDataCart] = useState([]);

  // Load data pertama kali untuk di tampilin
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setDataCart(storedCartItems);
  }, []);

  const handleRemoveItem = (item) => {
    RemoveCartDataByName(item);
    // update state setelah menghapus item
    const updatedCart = dataCart.filter(
      (cartItem) => cartItem.title !== item.title
    );
    // set data baru setelah update
    setDataCart(updatedCart);
  };

  const handleQuantity = (item, symbol) => {
    let items = JSON.parse(localStorage.getItem("cartItems"));
    let existingItemTitle = items.findIndex(
      (cartItem) => cartItem.title === item.title
    );

    if (existingItemTitle !== -1) {
      if (symbol === "-") {
        if (items[existingItemTitle].quantity > 1) {
          items[existingItemTitle].quantity -= 1;
        } else {
          handleRemoveItem(item);
          return;
        }
      } else if (symbol === "+") {
        items[existingItemTitle].quantity += 1;
      }

      localStorage.setItem("cartItems", JSON.stringify(items));
      // update data
      setDataCart([...items]);
    }
  };

  const totalPrice = dataCart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="mt-6 flow-root">
      <div className="-my-6">
        <div className="space-y-2 py-6 text-center">
          <h1 className="font-semibold text-xl dark:text-title-color-dark">
            My Cart
          </h1>

          <div className="wrap pt-14 space-y-10">
            {dataCart.length > 0 ? (
              dataCart.map((item, index) => (
                <div className="flex space-x-6 items-center" key={index}>
                  {/* Image */}
                  <div className="border p-5 shadow-sm bg-white">
                    <img src={item.image} alt={item.title} className="w-14" />
                  </div>

                  {/* Detail Product */}
                  <div className="text-start space-y-2">
                    <p className="font-medium text-xl dark:text-text-color-dark">
                      {item.title}
                    </p>
                    <p className="text-main-color font-medium dark:text-main-color-dark">
                      {USDollar.format(item.price * item.quantity)}
                    </p>

                    {/* + - */}
                    <div className="flex pt-5 space-x-6 items-center">
                      {/* minus */}
                      <button
                        className={`border border-border-color`}
                        onClick={() => handleQuantity(item, "-")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-5 dark:text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 12h14"
                          />
                        </svg>
                      </button>
                      <p className="dark:text-text-color-dark">
                        {item.quantity}
                      </p>
                      {/* Plus */}
                      <button
                        className="border border-border-color"
                        onClick={() => handleQuantity(item, "+")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-5 dark:text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </button>

                      {/* Remove */}
                      <button
                        className="pl-6"
                        onClick={() => handleRemoveItem(item)}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.5 1.66666H7.5C6.58083 1.66666 5.83333 2.41416 5.83333 3.33332V4.99999H2.5V6.66666H4.16667V16.6667C4.16667 17.5858 4.91417 18.3333 5.83333 18.3333H14.1667C15.0858 18.3333 15.8333 17.5858 15.8333 16.6667V6.66666H17.5V4.99999H14.1667V3.33332C14.1667 2.41416 13.4192 1.66666 12.5 1.66666ZM7.5 3.33332H12.5V4.99999H7.5V3.33332ZM14.1667 16.6667H5.83333V6.66666H14.1667V16.6667Z"
                            fill="#FFB568"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-xl font-medium dark:text-white">
                Belanja brow
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-between mt-20 mb-10">
          <p className="dark:text-text-color-dark">{dataCart.length} items</p>
          <p className="font-medium text-xl dark:text-text-color-dark">
            {USDollar.format(totalPrice)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
