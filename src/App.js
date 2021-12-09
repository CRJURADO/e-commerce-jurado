import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
import NavbarComp from "./components/NavbarComp"
import ItemListContainer from "./components/ItemListContainer"

function App () {
    return (
        <>
            <NavbarComp/>
            <main className="main">
                <ItemListContainer nombre={"Libreria online"}/>
            </main>
            
            
        </>
    )
}

export default App