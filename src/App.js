import React from "react";
import menuJSON from "./menu.json"
import MenuItem from "./MenuItem"
import {useState} from "react"

function App() {

  const [selectedItems, setSelectedItems] = useState(menuJSON)

  const handleFilterItems = (pick) => {
    setSelectedItems(menuJSON.filter((item) => item.category == pick));
  }

  const handleFilterItemsAll = () => setSelectedItems(menuJSON)

  return (
    <div className="App">
      <main>
        <header className='nav'>
          <h1>Our Menu</h1>
          <ul className='nav-list'>
            <li onClick={() => handleFilterItemsAll()} className='nav-item'>All</li>
            <li onClick={() => handleFilterItems("breakfast")} className='nav-item'>Breakfast</li>
            <li onClick={() => handleFilterItems("lunch")} className='nav-item'>Lunch</li>
            <li onClick={() => handleFilterItems("shakes")} className='nav-item'>Shakes</li>
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
          {/* MENU ITEM
          <div className="menu-item">
            <img src="https://react-projects-5-menu.netlify.app/images/item-1.jpeg" alt="" />
            <div className="menu-item-text">
              <div className="menu-item-name-price">
                <h4>Buttermilk Pancakes</h4>
                <p>$15</p>
              </div>
              <div className="menu-item-text-desc">
                <p>I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed</p>
              </div>
            </div>
          </div>
          MENU ITEM END */}
        </div>
      </main>
    </div>
  );
}

export default App;
