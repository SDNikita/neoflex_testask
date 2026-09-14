import like from '../../assets/images/like.png';
import reproach from '../../assets/images/reproach.png';

function Header() {
    return (
        <header className="Head">

            <div>
                <p>QPICK</p>
            </div>

            <div>
                <img className="imgHead" src={like} alt="Отложить"/>

                <img className="imgHead" src={reproach} alt="Корзина"/>
            </div>

        </header>
    );
}

export default Header;