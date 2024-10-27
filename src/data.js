import comp2Cards1 from "./img/Comp2/img_1.svg";
import comp2Cards2 from "./img/Comp2/img_2.svg";
import comp2Cards3 from "./img/Comp2/img_3.svg";
import comp2Cards3_discount from "./img/Comp2/222.png";
import comp2Cards3_basket from "./img/Comp2/add-to-cart 1.png";
// ------------------------------------------------------------------------------------comp3------------------------------------------
import comp3Cards1 from "./img/Comp3/img_1.svg";
import comp3Cards2 from "./img/Comp3/img_2.svg";
import comp3Cards3 from "./img/Comp3/img_3.svg";




export const comp2Cards = [
  {
    size: "nodiscount",
       discount: comp2Cards3_discount,
    img: comp2Cards1,
    title: "для нормальной кожи",
    text: "Увлажняющий мусс",
    price: "300 грн",
    // price_discount:'270 грн',
    basket: comp2Cards3_basket,
  },
  {
    size: "discount",
    discount: comp2Cards3_discount,
    img: comp2Cards2,
    title: "для нормальной кожи",
    text: "Увлажняющая маска",
    price: "360 грн",
    price_discount: "270 грн",
    basket: comp2Cards3_basket,
  },
  {
    size: "nodiscount",
      discount: comp2Cards3_discount,
    img: comp2Cards3,
    title: "для нормальной кожи",
    text: "Гель для умывания",
    price: "430 грн",
     price_discount: "270 грн",
    basket: comp2Cards3_basket,
  },
];


export const comp3Cards = [
  {
    size: "discount_5",
    percent:'5%',
       discount: comp2Cards3_discount,
    img: comp3Cards1,
    text: "Приобретая увлажняющий крем и маску, вы получаете скидку 5% на весь товар",
    price: "750 грн",
     price_discount:'500 грн',
    basket: comp2Cards3_basket,
  },
  {
    size: "discount_10",
    percent:'10%',
    discount: comp2Cards3_discount,
    img: comp3Cards2,
    text: "Приобретая увлажняющий мусс и гель для умывания, вы получаете скидку 10% на весь товар",
    price: "560 грн",
    price_discount: "470 грн",
    basket: comp2Cards3_basket,
  },
  {
    size: "discount_20",
    percent:'20%',
      discount: comp2Cards3_discount,
    img: comp3Cards3,
    text: "Приобретая весь набор Invisible symphony, вы получаете скидку 20% на весь товар",
    price: "930 грн",
     price_discount: "770 грн",
    basket: comp2Cards3_basket,
  },
];

export const сards_comp5 = [
  {
    advice: "Совет",     
    title: "Как выбрать крем",
    text: "7 критериев правильного выбора. Под воздействием окружающей среды кожа теряет питательные вещества...",
    read: "Читать",
   
  },
  {
    advice: "Совет",     
    title: "Что добавить к зимнему уходу",
    text: "Зимой кожа лица особенно остро нуждается в уходе. Холод и ветер, сухость воздуха отапливаемых помещений...",
    read: "Читать",
   
  },
  {
    advice: "Совет",     
    title: "Как узнать свой тип кожи",
    text: "У одних кожа от природы жирная, у других сухая и тонкая, считается, что в современных условиях...",
    read: "Читать",
   
  },
  {
    advice: "Совет",     
    title: "Как правильно наносить крем",
    text: "Любой тип кожи нельзя сильно натирать при очищении или тонизировании, все движения...",
    read: "Читать",
   
  },
];