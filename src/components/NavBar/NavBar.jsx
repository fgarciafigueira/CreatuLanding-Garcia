import './NavBar.css'
import CartWidget from '../cartWidget/CartWidget'

function NavBar(){
    return (
        <nav>
            <h2>Musica - Shop</h2>
           <div>
                <button>Productos</button>
                <button>Marcas</button>
                <button>Cosas</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar