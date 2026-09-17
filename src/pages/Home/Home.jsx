import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductGroup from '../../components/Product/ProductGroup';

import headphones from '../../data/Headphones';
import WirelessHeadphones from '../../data/WirelessHeadphones';
import addToCart from '../../scripts/addToCart';
function Home({ cart, addToCart, setCart }){
    return(
        <>
        <div className="page">        
        <Header cart={cart}/>
            <main>
                <ProductGroup title = "Наушники" products = {headphones} addToCart ={addToCart} setCart={setCart}/>
                <ProductGroup title = "Беспроводные Наушники" products = {WirelessHeadphones} addToCart ={addToCart} setCart={setCart}/>
            </main>
        <Footer/>
        </div>
        </>
    )
}
export default Home;