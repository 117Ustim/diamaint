import "./component3.scss";
import stock_image from "../../../../img/Comp2/img_2.svg";
import arrow_1 from "../../../../img/Comp3/arrow1.svg";
import arrow_2 from "../../../../img/Comp3/arrow2.svg";
import list from "../../../../img/Comp3/Rectangle.svg";
import vector_1 from "../../../../img/Comp3/Vector1.svg";
import Comp3CardsComponent from "./cards_comp3/Comp3CardsComponent";


export default function Component3() {
  return (
    <div className="component3">
       <div className='list'>
      <img src={list}alt="list"/>
      </div>
      <div className="container">
        <div className="stock_block">
          <div className="stock">
            <div className="stock_title">
              <h2>Акции</h2>
            </div>
            <div className="stock_text">
              <p>
                Каждый месяц мы отбираем специальную линейку продуктов, которая
                нравится вам и снижаем цены!
              </p>
            </div>
            <div className="stock_arrows">
                 <div className='block_arrow_1'>
                 <img src={arrow_1} alt="arrows" />
              <div className="vector_1">
                <p>&#60;</p>
              </div>
                </div>
              <div className='block_arrow_2'>
             <img src={arrow_2} alt="arrows" />
              <div className="vector_2">
                <p>&#62;</p>
              </div>
             </div>

              
            </div>
          </div>
          <div className="Invisible">
          <div className='blue_line_left'><p>для нормальной кожи</p></div>
            <div className="Invisible_block">
              
              
             
              <div className="Invisible_block_block">
                <div className="Invisible_block_block_number">
                  <p>01</p>
                </div>
                <div className="Invisible_block_block_title">
                  <p>
                    Invisible symphony — ваша волшебная палочка для борьбы с
                    несовершенствами
                  </p>
                </div>
                <div className="Invisible_block_block_text">
                  <p>
                    Сочетая энергию природы и возможности науки восстанавливает
                    вашу кожу, помогает регенерации клеток, разглаживает рельеф,
                    интенсивно увлажняет надолго.
                  </p>
                </div>
              </div>
              <div className="Invisible_image">
                <img src={stock_image} alt="arrows" />
              </div>

            </div>
          
          </div>
        </div>
      </div>
   <Comp3CardsComponent/>
    </div>
  );
}
