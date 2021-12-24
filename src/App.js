import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./styles.css"
import NavbarComp from "./components/NavbarComp"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"

function App () {

    const links = [
        { href: "/", name: "home", id: 1 },
        { href: "/nosotros", name: "nosotros", id: 2 },
        { href: "/productos/papeleria", name: "papeleria", id: 3 },
        { href: "/productos/artistica", name: "artistica", id: 4 },
        { href: "/productos/bujo", name: "bujo", id: 5 },
        { href: "/productos", name: "todos", id: 6 },
        { href: "/contacto", name: "contacto", id: 7 }
    ]

    return (
        
            <BrowserRouter>
                <NavbarComp links={links}/>
                <main className="main">
                    <div className="mainCont">
                        <Routes>
                            <Route path="/" element={<ItemListContainer greeting={"Libreria online"} />} />
                            <Route path="/productos/:id" element={<ItemListContainer greeting={"Libreria online"} />} />
                            <Route path="/producto/:id" element={<ItemDetailContainer />} />
                        </Routes>
                    </div>
                </main>
            </BrowserRouter>

    )
}

export default App