import world from '../../assets/images/world.svg'
import TG from '../../assets/images/Telegram.svg'
import VK from '../../assets/images/VK.svg'
import WA from '../../assets/images/Whatsapp.svg'


function Footer(){
    return(
        <footer className="foot">
            <div>
                <h3>QPICK</h3>
            </div>

            <div>
                <a href="#">Избранное</a>
                <a href="#">Корзина</a>
                <a href="#">Контакты</a>
            </div>

            <div>
                <a href="#">Условия сервиса</a>
                <br/>
                <img className = 'imgFoot' src={world} alt='language'/>
                <p>Рус</p>
                <p>Eng</p>

            </div>

            <div>
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