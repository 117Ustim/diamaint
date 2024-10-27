
import './card_comp3.scss'


export default function CardComp3({text,img,price_discount,price,basket,size,percent}) {
  
   

return (
    <div className='card_comp3_block'>
    <div className={size}>
  <p>Скидка {percent}</p>
    </div>   
 <div className='card_comp3' >

     <div className='card_discount_comp3 '>

</div>
 <div className='card_image_comp3'>
<img src={img} alt='images'/>
</div>
 <div className='card_title_block_comp3'>

<div className='card_text_comp3'>
<p>{text}</p>
</div>
<div className='card_block_price_comp3'>
<div className='card_block_price_price_block_discount_comp3'>
<div className='card_block_price_price_discount_comp3'>
<p>{price_discount}</p>
</div>
<div className='card_block_price_price_comp3'>
<p>{price}</p>
</div>
</div>

<div className='card_block_price_image_comp3'>
<img src={basket} alt='basket'/>
</div>
</div>

</div>
</div>
    
    </div>
    
);
}