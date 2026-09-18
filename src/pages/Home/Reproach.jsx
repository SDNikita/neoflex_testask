import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductForBuy from '../../components/Product/ProductForBuy'
import OrderModal from '../../components/modelWindow/OrderModal'

import increaseQuantity from '../../scripts/increaseQuantity';
import decreaseQuantity from '../../scripts/decreaseQuantity';
import deleteFromCart from '../../scripts/deleteFromCart';

import { useState } from 'react';

function Reproach({cart,setCart}){
    const [isModalOpen, setIsModalOpen] = useState(false);
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
                    <button  onClick={() => setIsModalOpen(true)}>
                        Перейти к оформлению
                    </button>
                </div>
                </div>
                
            </main>
            <Footer/>
            {isModalOpen && (
                <OrderModal total={cart.reduce(
                (sum, product) =>sum + product.price * product.quantity,0)} 
                onClose={() => setIsModalOpen(false)}/>)}
        </div>
    );
}
export default Reproach