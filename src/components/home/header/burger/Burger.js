import "./burger.scss";


export default function Burger() {
  return (
    <div className="burger-menu">
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-btn" htmlFor="menu-toggle">
        <span>Menu</span>
      </label>

      <ul className="menubox">       
        <li className="menu-item">О продукте </li>
        <li className="menu-item">Каталог</li>
        <li className="menu-item">Акции</li>
        <li className="menu-item">Полезное</li>
        <li className="menu-item">Авторы</li>       
      </ul>
    </div>
  );
}
