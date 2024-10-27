import  './header.scss'
import logo from '../../../img/header/logo.svg'
import logo_D from '../../../img/header/D.svg'
import basket from '../../../img/header/basket.svg'
import basket_1 from '../../../img/header/basket_1.svg'
import Burger from './burger/Burger'


export default function Header() {
return (
<div className='header'>
 <div className='header_menu_lift'>
 <div className='header_menu_lift_logo'>
<img src={logo} alt='Logo'/>
<div className='header_menu_lift_logo_D'>
    <img src={logo_D} alt='D'/>
</div>

</div>
<div className='header_menu_lift_nav'>
    <ul>
        <li><a href="/#">О продукте</a></li>
        <li><a href="/#">Каталог</a></li>
        <li><a href="/#">Акции</a></li>
        <li><a href="/#">Полезное</a></li>
        <li><a href="/#">Авторы</a></li>
    </ul>

</div>
 <div className='header_menu_lift_nav_460'>
<Burger/>
</div>
</div>
 <div className='header_menu_right'>
 <div className='header_menu_right_basket_1'>
<img src={basket_1}alt='basket'/>
 </div>
    
 <div className='header_menu_right_basket'>
<img src={basket}alt='basket'/>
 </div>
 <div className='header_menu_right_shop'>
<p>1</p>
 </div>
 <div className='header_menu_right_network'>
    <ul>
        <li> <a href="/#">Instagram</a></li>
        <li> <a href="/#">Facebook</a></li>
        <li> <a href="/#">Telegram</a></li>
    </ul>

 </div>
 </div>
</div>
);
}