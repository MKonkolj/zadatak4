import React from "react";
import menuJSON from "./menu.json"
import MenuItem from "./MenuItem"
import {useState} from "react"

function App() {

  const [selectedItems, setSelectedItems] = useState(menuJSON);

  // Buttons
  const handleFilterItems = (pick) => {
    setSelectedItems(menuJSON.filter((item) => item.category == pick));
  }

  const handleFilterItemsAll = () => setSelectedItems(menuJSON);

  // Array svih različitih kategorija u menuJSON-u
  const allCategories = [];
  menuJSON.forEach(object => {
    if (!allCategories.includes(object.category)) {
      allCategories.push(object.category);
    }
  });
  // allCategories.push("Diner");

  return (
    <div className="App">
      <main>
        <header className='nav'>
          <h1>Our Menu</h1>
          <ul className='nav-list'>
            <li onClick={() => handleFilterItemsAll()} className='nav-item'>All</li>
            {/* Kreiranje li elementa za navigaciju na osnovu svih različith kategorija u menuJSON-u */}
            {allCategories.map((cat, index) => {
              return <li key={index} onClick={() => handleFilterItems(cat)} className='nav-item'>{cat}</li>
            })
            }
          </ul>
        </header>
        <div className="container">
          {
            selectedItems.map((item) => {
            return (<MenuItem
              key={item.id}
              title={item.title}
              price={item.price}
              img={item.img}
              desc={item.desc}
            />)
          })
          }
        </div>
      </main>
    </div>
  );
}

export default App;
