import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackageList from "./PackageList";
import Footer from "./Footer";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleClearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items from your list?"
    );
    if (confirmed) setItems([]);
  }

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  // function handlePackedItem(id) {
  //   const [item] = items.filter((it) => it.id === id);
  //   item.packed = item.packed ? false : true;
  //   handleDeleteItem(id);
  //   handleAddItem(item);
  // }

  function handlePackedItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackageList
        onPackedItem={handlePackedItem}
        onDeleteItem={handleDeleteItem}
        onClearList={handleClearItems}
        items={items}
      />
      <Footer items={items} />
    </div>
  );
}
