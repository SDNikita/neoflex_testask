function deleteFromCart(id, setCart){
    setCart(prevCart=>
        prevCart.filter(item => item.id!=id)
    );
}
export default deleteFromCart