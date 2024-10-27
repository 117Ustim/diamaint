import dandelions from '../../../../img/Comp2/dandelions.svg'
import Comp2Cards from './cards/Comp2Cards';
import './component2.scss'


export default function Component2 () {
return (
 <div className='component2'>
     <div className='dandelions'>
  <img src={dandelions} alt='dandelions'/>  
    </div>
 <div className='component2_title'>
<p>Выбери свой продукт</p>
</div>
 <div className='component2_block_cards'>
<Comp2Cards/>
</div>
</div>
);
}