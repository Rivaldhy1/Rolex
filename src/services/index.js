import swal from "sweetalert";

export let USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const handleCartData = (item) => {
  // Ambil item dari localStorage
  let items = JSON.parse(localStorage.getItem("cartItems")) || [];

  // cari item.title di cartItem tapi yang di kembalikan index
  let existingItemTitle = items.findIndex(
    (cartItem) => cartItem.title === item.title
  );

  if (existingItemTitle !== -1) {
    // jika index nya ketemu
    items[existingItemTitle].quantity += 1;
    items[existingItemTitle].price *= items[existingItemTitle].quantity;
  } else {
    // Jika index tidak ketemu, dan set nilai default dari quantit menjadi 1
    items.push({ ...item, quantity: 1 });
  }

  // Simpan kembali ke localStorage
  localStorage.setItem("cartItems", JSON.stringify(items));

  swal({
    title: "Item added!",
    text: "Cek your cart for more detail!!",
    icon: "success",
    button: "Close",
  });
};

export const RemoveCartDataByName = (item) => {
  let items = JSON.parse(localStorage.getItem("cartItems")) || [];

  let updateItems = items.filter((cartItem) => cartItem.title !== item.title);

  localStorage.setItem("cartItems", JSON.stringify(updateItems));

  swal({
    title: "Item Deleted!",
    icon: "success",
    button: "Close",
  });
};
