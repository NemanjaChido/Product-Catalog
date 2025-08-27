
import "./css/App.css";
import NavBar from "./components/NavBar.jsx";
import ItemPage from "./pages/ItemPage.jsx";

function App() {

  return (
    <>
      <NavBar />
      <main className="container">
        <ItemPage />
      </main>
    </>
  )
}

export default App
