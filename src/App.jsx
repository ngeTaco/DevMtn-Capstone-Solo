import './App.css'
import Header from './components/common/Header.jsx'


function App() {

  return (
    <div>

      <Header />


      <article>
        <div className="Location-Tile">
          <img src="https://picsum.photos/seed/picsum/50"></img>
          <h2>Location01</h2>
          <button>Go To Location</button>
          <button>Edit</button>
          <button>Save</button>
        </div>

        <div className="Location-Tile">
          <img src="https://picsum.photos/seed/picsum/50"></img>
          <h2>Location02</h2>
          <button>Go To Location</button>
          <button>Edit</button>
          <button>Save</button>
        </div>

        <div className="Location-Tile">
          <img src="https://picsum.photos/seed/picsum/50"></img>
          <h2>Location03</h2>
          <button>Go To Location</button>
          <button>Edit</button>
          <button>Save</button>
        </div>
      </article>

    </div>
  )
}


export default App
