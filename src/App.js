import menuJSON from "./menu.json"
import MenuItem from "./MenuItem"

function App() {

  console.log(menuJSON);

  return (
    <div className="App">
      <main>
        <header className='nav'>
          <h1>Our Menu</h1>
          <ul className='nav-list'>
            <li className='nav-item'>All</li>
            <li className='nav-item'>Breakfast</li>
            <li className='nav-item'>Lunch</li>
            <li className='nav-item'>Shakes</li>
          </ul>
        </header>
        <div className="container">
          {
            menuJSON.map((item) => {
            return (<MenuItem
              key={item.id}
              title={item.title}
              category={item.category}
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
