
function ProductGroup({title,products}){
    return(
        <section className="product-group">
            <h2>{title}</h2>

            <div>
                {products.map((products)=>(
                    <div key = {products.id}>
                        <div>
                            <img src ={products.img} alt ={products.title} />
                        </div>

                        <div>
                            <p>{products.title}</p>
                            <p>{products.price}</p>
                        </div>

                        <div>
                            <p>{products.rate}</p>
                        </div>

                        <div>
                            <button>Купить</button>
                        </div>
                    </div>
                ))}
               

            </div>
        </section>
    );
}

export default ProductGroup;    