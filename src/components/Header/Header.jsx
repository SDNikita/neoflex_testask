import like from '../../assets/images/like.svg';
import reproach from '../../assets/images/reproach.svg';
import '../../style/Header.css'

import { Link } from 'react-router-dom';

function Header({cart}) {
    const cartCount = cart.reduce(
        (sum, item)=>sum+item.quantity,0
    );
    return (
        <header className="Head">

            <div className='LogoHead'>
                <Link to = "/" >
                    <p>QPICK</p>
                </Link>
            </div>

            <div className='imgHead'>
                    <img src={like} alt="Отложить"/>

                <Link  to="/reproachpage"  className="cartIcon">
                    <img src={reproach} alt="Корзина"/>
                     {cartCount > 0 && (
                        <span className="cartCount"> {cartCount}</span>)}
                </Link>
                
            </div>

        </header>
    );
}

export default Header;