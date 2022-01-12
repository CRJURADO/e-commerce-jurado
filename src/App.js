import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./styles.css"
import NavbarComp from "./components/NavbarComp"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Carrito from "./components/Carrito"
import CustomProvider, { Provider } from "./components/CartContext"

function App () {

    return (
            <CustomProvider>
                <BrowserRouter>
                    <NavbarComp/>
                    <main className="main">
                        <div className="mainCont">
                            <Routes>
                                <Route path="/" element={<ItemListContainer greeting={"Libreria online"} />} />
                                <Route path="/productos/:nombre" element={<ItemListContainer greeting={"Libreria online"} />} />
                                <Route path="/productos" element={<ItemListContainer greeting={"Libreria online"} />} />
                                <Route path="/detalle/:id" element={<ItemDetailContainer />} />
                                <Route path="/carrito" element={<Carrito />} />
                            </Routes>
                        </div>
                    </main>
                </BrowserRouter>
            </CustomProvider>

    )

    
}

export default App