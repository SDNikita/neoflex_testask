import world from '../../assets/images/world.svg'
import TG from '../../assets/images/Telegram.svg'
import VK from '../../assets/images/VK.svg'
import WA from '../../assets/images/Whatsapp.svg'
import '../../style/Footer.css'

import { Link } from 'react-router-dom';
function Footer(){
    return(
        <footer className="foot">
            <div className='LogoFoot'>
            {/* добавить якорь на страницу */}
                <p>QPICK</p>
            </div>

            <div className='footerText'>
                <a href="#">Избранное</a> <br/>
                <Link to="/reproachpage">Корзина</Link><br/>
                <a href="#">Контакты</a>
            </div>

            <div className='footerTextLan'>
                <a href="#">Условия сервиса</a>
                <div className='footLan'>
                    <img className = 'imgFoot' src={world} alt='language'/>
                    <span className="active">Рус</span>
                    <span>Eng</span>
                </div>
            </div>

            <div className='footerSocials'>
                <a href='https://vk.ru/id421460447'>
                    <img className = 'imgFoot' src={VK} alt='language'/>   
                </a>

                <a href='https://github.com/SDNikita/neoflex_testask'>
                    <img className = 'imgFoot' src={TG} alt='language'/>
                </a>

                <a href='https://doka.guide/'>
                    <img className = 'imgFoot' src={WA} alt='language'/>
                </a>
            </div>

        </footer>
    )
}
export default Footer;