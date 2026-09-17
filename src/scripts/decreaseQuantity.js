function decreaseQuantity(id, setCart){
    setCart(prevCart=>
        prevCart.map(item=>
            item.id==id?{...item,quantity: item.quantity - 1}: item
        ).filter(item => item.quantity > 0)
        
    );
}
export default decreaseQuantity;