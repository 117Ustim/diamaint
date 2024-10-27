import image_1 from '../../../../img/Comp6/image_1.svg'
import image_2 from '../../../../img/Comp6/image_2.svg'
import image_3 from '../../../../img/Comp6/image_3.svg'
import image_4 from '../../../../img/Comp6/bee-naturalles.svg'
import image_5 from '../../../../img/Comp6/Mask Group2.svg'
import './component6.scss'


export default function Component6 () {
return (
 <div className='component6'>
 <div className='component6_block'>
 <div className='component6_block_authors'>
 <div className='component6_block_title'>
<p>Авторы и идеологи</p>
</div>
<div className='component6_block_authors_author'>
<p>Маша Шестякова</p>
</div>
<div className='component6_block_text'>
<p>Маша — главный идеолог, создатель проекта и по совместительству главный добытчик рецептов. Машиной фишкой является бабушка-ирландка, бывшая модель с бесконечным запасом проверенных на себе народных рецептов. </p>
</div>
<div className='component6_block_text_2'>
<p>Мне нравится адаптировать культуру моих предков к современности. Я чувствую, что создаю нить между разными эпохами. И то, что мой продукт делает девушек красивыми и уверенными в себе, помогает мне чувствовать себя счастливой!</p>
</div>
<div className='component6_block_block_image'>
<img src={image_1}alt='image'/>
<img src={image_2}alt='image'/>
<img src={image_3}alt='image'/>
</div>

</div>
<div className='component6_block_image'>
<img src={image_4}alt='image_4'/>
{/* <div className='component6_block_image_group'>
 <img src={image_5}alt='image_5'/>   
</div> */}

</div>
</div>
</div>
);
}
