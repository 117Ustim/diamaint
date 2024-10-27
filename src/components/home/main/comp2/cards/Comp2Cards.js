
import './comp2_cards.scss'
import {comp2Cards} from '../../../../../data'
import Card from './card/Card';

export default function Comp2Cards () {
return (
 <div className='cards'>
<div className='cards_block'>
          {comp2Cards.map((way) => (
             <Card key={way.img} {...way} />
          ))}
        </div>
</div>
);
}