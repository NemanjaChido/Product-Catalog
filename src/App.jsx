
import "./css/App.css";
import NavBar from "./components/NavBar";
import ItemPage from "./pages/ItemPage";

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
