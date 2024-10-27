
import  './component1.scss'
import Dandelion from '../../../../img/main/Dandelion333.png'
import eucalypt from '../../../../img/main/kisspng-eucalyptus.svg'
import blueberry from '../../../../img/main/Group 583.png'


export default function Component_1 () {
return (
 <div className='component1'>
      <div className='eucalypt'>
     <img src={eucalypt}alt='eucalypt'/>
     </div>
     <div className='container'>
       
     <div className='component1_title'>
<h1>Diamaint</h1>
<div className='dandelion'>
        <img src={Dandelion}alt='Dandelion'/>
        </div>
</div>
 <div className='component1_block'>
 <div className='component1_block_column1'>
 <div className='component1_block_column1_title'>
<h2>Натуральная косметика с привкусом Ирландии</h2>
</div>
<div className='component1_block_column1_text'>
<p>Ингридиенты контролируются по качеству и происхождению. Большинство из них имеют органический сертификат Ecoсert и Soil Association. Сочетание компонентов в каждой линейке подобрано с учетом особенностей типа кожи.</p>
</div>
</div>
<div className='component1_block_column2'>
<div className='component1_block_column2_text1'>
<p>Diamaint — <span>одуванчик</span> в переводе с ирландского</p>
</div>
<div className='component1_block_column2_text2'>
<p className='paragraphs'>Косметика, после которой вы уже никогда не будете прежней и обретёте новую жизнь, где наша продукция будет вашим верным спутником и помощником</p>
<p>Используем всю силу природы, а так же новейшие разработки индустрии вкупе традиционными ирландскими рецептами для того, чтобы придать вашей коже здоровый и цветущий вид</p>
<div className='component1_block_column2_button'>
<button><p>ВЫБРАТЬ ПРОДУКТ</p></button>
</div>
</div>

<div className='component1_block_column2_text3'>
<p>В основе — активные натуральные комплексы, витамины С, А, РР, В И Е, масла, воски, минералы и натуральные солнцезащитные компоненты. </p>
</div>
</div>
<div className='component1_block_column3'>

<div className='component1_block_column3_text'>
<p>Подбираем комплекс специально для вашего типа кожи</p>
</div>
<div className='component1_block_column3_title'>
<h2>Diamaint — только натуральные ингридиенты</h2>
</div>

</div>
<div className='blueberry'>
<img src={blueberry}alt=''/>
</div>
</div> 

    </div>
 
</div>
);
}