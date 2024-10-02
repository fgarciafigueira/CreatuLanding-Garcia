import cartwidget from './assets/cartwidget.svg'

function CartWidget (){
    return (
        <div>
            <img src={cartwidget} alt="cart-widget" />
            <span>0</span>
        </div>
    )
}

export default CartWidget