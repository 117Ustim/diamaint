import {сards_comp5} from '../../../../../data'
import Card5 from './card5/Card5';
import './cards_comp5.scss'


export default function CardsComp5 () {
return (
 <div className='card_comp5'>
<div className='cards_comp5_block'>
          {сards_comp5.map((way,index) => (
             <div key={index}className='Card5'>
             <Card5  {...way} />
            </div>
            
          ))}
        </div>
</div>
);
}