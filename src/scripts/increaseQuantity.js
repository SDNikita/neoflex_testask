function increaseQuantity(id, setCart){
    setCart(prevCart=>
        prevCart.map(item=>
            item.id==id?{...item,quantity: item.quantity + 1}: item
        )
    );
}
export default increaseQuantity;