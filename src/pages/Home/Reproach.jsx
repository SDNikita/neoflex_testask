import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductForBuy from '../../components/Product/ProductForBuy'

import increaseQuantity from '../../scripts/increaseQuantity';
import decreaseQuantity from '../../scripts/decreaseQuantity';
import deleteFromCart from '../../scripts/deleteFromCart';

function Reproach({cart,setCart}){
    return(
        <div className='ReproachPage'>
            <Header cart={cart}/>
            <main>
                <h1>Корзина</h1>
                <div className="cartContent">
                    <div className="cardProducts">
                    {cart.map(product => (
                    <ProductForBuy key={product.id} product={product}
                        increaseQuantity={() =>increaseQuantity(product.id, setCart)}
                        decreaseQuantity={() => decreaseQuantity(product.id, setCart)}
                        deleteFromCart={() =>deleteFromCart(product.id, setCart)}/>
                    ))}
                </div>
                <div className="cartTotal">
                    <div className="totalTop">
                        <span>ИТОГО</span>
                        <span>₽
                            {cart.reduce((sum, product) =>
                                sum + product.price * product.quantity,0)} 
                        </span>
                    </div>
                    <button>
                        Перейти к оформлению
                    </button>
                </div>
                </div>
                
            </main>
            <Footer/>
        </div>
    );
}
export default Reproach