import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
import NavbarComp from "./components/NavbarComp"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"

function App () {
    return (
        <>
            <NavbarComp/>
            <main className="main">
                <div className="mainCont">
                <ItemListContainer nombre={"Libreria online"}/>
                <ItemDetailContainer/>
                </div>
            </main>
            
            
        </>
    )
}

export default App