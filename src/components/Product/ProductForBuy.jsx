function ProductForBuy(product, increaseQuantity, decreaseQuantity){
    return(
        <div className="cartCard">
            <img src={product.img} alt = {product.tittle}/>

            <div className="cartInfo">
                <p>{product.tittle}</p>
                <span>{product.price} ₽</span>
            </div>

            <div className="cartButton">
                <button>-</button>
                <span>{product.quantity}</span>
                <button>+</button>
            </div>
            <p className="cartPrice">
                {product.price * product.quantity} ₽
            </p>
        </div>
    );
}
export default ProductForBuy;