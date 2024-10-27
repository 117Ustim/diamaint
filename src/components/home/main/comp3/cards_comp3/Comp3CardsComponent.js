
import './comp3_cards_component.scss'
import {comp3Cards} from '../../../../../data'
import CardComp3 from './card_com3_component/CardComp3'

export default function Comp3CardsComponent () {
return (
 <div className='cards_comp3'>
<div className='cards_block_comp3'>
          {comp3Cards.map((way) => (
             <CardComp3 key={way.img} {...way} />
          ))}
        </div>
</div>
);
}