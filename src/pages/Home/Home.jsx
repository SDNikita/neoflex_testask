import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


function Home(){
    return(
        <>
        <div className="page">

        
        <Header/>
            <main>
                <section>
                    <h2>Наушники</h2>
                </section>
                <section>
                    <h2>Беспроводные наушники</h2>
                </section>
            </main>
        <Footer/>
        </div>
        </>
    )
}
export default Home;