
import './component4.scss';
import image from '../../../../img/Comp4/park-street.svg'
import kulbaba from '../../../../img/Comp4/Mask_Group.svg'



export default function Component4 () {
return (
 <div className='component4'>
     <div className='kulbaba'>
    <img src={kulbaba} alt='kulbaba'/>
    </div>
 <div className='comp4_title'>
<p>Diamant</p>
</div>
 <div className='comp4_block'>
 <div className='comp4_block_image'>
<img src={image} alt='image'/>
</div>
<div className='comp4_block_content'>
<div className='comp4_block_content_title'>
<p>Протестировали и довольны результатом</p>
</div>
<div className='comp4_block_content_number'>
<p>6800 <span>женщин</span> </p>
</div>
<div className='comp4_block_content_text'>
<p>96% женщин заметили положительный результат уже после недели использования линейки средств. Кожа стала более ухоженной, увлажненной и напитанной. Исчезли или значительно уменьшились воспаления. А приятный аромат и легкая текстура стали отличным дополнением с утренне-вечерним ритуалам ухода</p>
</div>
</div>
</div>
</div>
);
}