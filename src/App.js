import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./styles.css"
import NavbarComp from "./components/NavbarComp"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"

function App () {

    return (
        
            <BrowserRouter>
                <NavbarComp/>
                <main className="main">
                    <div className="mainCont">
                        <Routes>
                            <Route path="/" element={<ItemListContainer greeting={"Libreria online"} />} />
                            <Route path="/productos/:nombre" element={<ItemListContainer greeting={"Libreria online"} />} />
                            <Route path="/productos" element={<ItemListContainer greeting={"Libreria online"} />} />
                            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
                        </Routes>
                    </div>
                </main>
            </BrowserRouter>

    )

    
}

export default App