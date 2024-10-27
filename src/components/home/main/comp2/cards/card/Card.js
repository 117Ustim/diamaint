
import './card.scss'


export default function Card({discount,title,text,img,price_discount,price,basket,size}) {
  
   

return (
    
 <div className={size} >

     <div className='card_discount '>
{size === 'discount' && <img src={discount} alt='discount'/>}
</div>
 <div className='card_image'>
<img src={img} alt='images'/>
</div>
 <div className='card_title_block'>
<div className='card_title'>
<p>{title}</p>
</div>
<div className='card_text'>
<p>{text}</p>
</div>
<div className='card_block_price'>
<div className='card_block_price_price_block_discount'>
<div className='card_block_price_price_discount'>
{size === 'discount' && <p>{price_discount}</p>}
</div>
<div className='card_block_price_price'>
<p>{price}</p>
</div>
</div>

<div className='card_block_price_image'>
<img src={basket} alt='basket'/>
</div>
</div>

</div>
</div>
);
}