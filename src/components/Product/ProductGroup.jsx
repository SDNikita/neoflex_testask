import star from '../../assets/images/rate.svg'
function ProductGroup({title,products}){
    return(
        <section className="productGroup">
            <h2>{title}</h2>

            <div className="products">
                {products.map((product)=>(
                    <div className = "productCard" key = {product.id}>
                        <div >
                            <img src ={product.img} alt ={product.title} />
                        </div>

                        <div className="productTop">
                            <p className="nameHeadphones">{product.title}</p>
                            <p className="price">{product.price} ₽</p>
                        </div>

                         <div className="productBottom">
                            <div className='productRate '>
                                <img src ={star} alt = "rating"/>
                                <p>{product.rate}</p> 
                            </div>
                            <button>Купить</button>
                        </div>
                    </div>
                ))}
               

            </div>
        </section>
    );
}

export default ProductGroup;    