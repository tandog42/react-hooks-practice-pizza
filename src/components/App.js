import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [editP, setEditP] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then(r => r.json())
      .then(pizza => setPizzas(pizza));
  }, []);
  // ----------------------------------------------------------------------------//

  function updatePizzaList(newPizza) {
    const newPizzaList = pizzas.map(pizza => {
      if (pizza.id === newPizza.id) {
        return newPizza;
      } else {
         return pizza;
      }
     
    })
    setPizzas(newPizzaList)
  }

  // ----------------------------------------------------------------------------//

  function handleEdit(id) {
    const foundPizza = pizzas.find(pizz => pizz.id === id);
    setEditP(foundPizza);
  }
  // ----------------------------------------------------------------------------//
  return (
    <>
      <Header />
      <PizzaForm
        updatePizzaList={updatePizzaList}
        {...editP}
        setEditP={setEditP}
      />
      <PizzaList handleEdit={handleEdit} pizzas={pizzas} />
    </>
  );
}

export default App;
