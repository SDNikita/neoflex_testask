import like from '../../assets/images/like.svg';
import reproach from '../../assets/images/reproach.svg';

import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="Head">

            <div className='Logo'>
                <p>QPICK</p>
            </div>

            <div className='imgHead'>
                    <img src={like} alt="Отложить"/>

                <Link  to="/reproachpage">
                    <img src={reproach} alt="Корзина"/>
                </Link>
                
            </div>

        </header>
    );
}

export default Header;