import deleteBut from '../../assets/images/delete.svg'
import '../../style/Product.css'
function ProductForBuy({product, increaseQuantity, decreaseQuantity,deleteFromCart}){
    return(
        <div className="cartCard">
            <img src={product.img}  className="cartProductImg" alt = {product.tittle}/>

            <div className="cartInfo">
                <p>{product.title}</p>
                <span>{product.price} ₽</span>
            </div>
            <div className='rightHalf'>
                <button onClick={deleteFromCart}>
                    <img src= {deleteBut} alt = "delete" className="deleteProduct"/>
                </button>
                <p className="cartPrice">
                    {product.price * product.quantity} ₽
                </p>
            </div>
            <div className="cartButton">
                <button onClick={()=>decreaseQuantity(product.id)}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() =>increaseQuantity(product.id)}>+</button>
            </div>
            
        </div>
    );
}
export default ProductForBuy;