import like from '../../assets/images/like.svg';
import reproach from '../../assets/images/reproach.svg';

function Header() {
    return (
        <header className="Head">

            <div className='Logo'>
                <p>QPICK</p>
            </div>

            <div className='imgHead'>
                <img src={like} alt="Отложить"/>

                <img src={reproach} alt="Корзина"/>
            </div>

        </header>
    );
}

export default Header;