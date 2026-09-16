import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductGroup from '../../components/Product/ProductGroup';

import headphones from '../../data/Headphones';
import WirelessHeadphones from '../../data/WirelessHeadphones';
function Home(){
    return(
        <>
        <div className="page">

        
        <Header/>
            <main>
                <ProductGroup title = "Наушники" products = {headphones}/>
                <ProductGroup title = "Беспроводные Наушники" products = {WirelessHeadphones}/>

            </main>
        <Footer/>
        </div>
        </>
    )
}
export default Home;