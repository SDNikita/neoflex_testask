
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
                            <p>{product.title}</p>
                            <p>{product.price}</p>
                        </div>

                         <div className="productBottom">
                            <p>{product.rate}</p>
                            <button>Купить</button>
                        </div>
                    </div>
                ))}
               

            </div>
        </section>
    );
}

export default ProductGroup;    