function addToCart(product, setCart) {
    //обновление состояния
    setCart(prevCart => {
        //поиск товара в корзине для повтора
        const existingProduct = prevCart.find(
            item => item.id === product.id
        );

        if (existingProduct) {
            return prevCart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 }: item
            );

        } else {
            return [
                ...prevCart,
                {
                    ...product,
                    quantity: 1
                }
            ];

        }
    });
}
export default addToCart;