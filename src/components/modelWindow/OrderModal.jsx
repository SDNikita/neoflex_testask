import '../../style/OrderModals.css'
function OrderModal({ total, onClose }) {
    return (
        <div className="modalOverlay" onClick={onClose}>

            <div className="orderModal" onClick={(event) => event.stopPropagation()}>

                <button className="modalClose" onClick={onClose}>
                    ×
                </button>

                <h2>Оформление заказа</h2>

                <div className="orderInfo">
                    <p>Сумма заказа:</p>
                    <span>{total} ₽</span>
                </div>

                <input type="text" placeholder="Ваше имя"/>

                <input type="tel" placeholder="Номер телефона"/>

                <input type="text" placeholder="Адрес доставки"/>

                <button className="orderButton">
                    Оформить заказ
                </button>

            </div>

        </div>
    );
}

export default OrderModal;