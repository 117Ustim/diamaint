
import './card5.scss'


export default function Card5 ({advice,title,text,read}) {
return (
    <>
   
    <div className='card5'>
 <div className='card5_line'>

</div>
<div className='card5_advice'>
<p>{advice}</p>
</div>
<div className='card5_title'>
<p>{title}</p>
</div>
<div className='card5_text'>
<p>{text}</p>
</div>
<div className='card5_read_block'>
<div className='card5_read_line'>

</div>
<div className='card5_read'>
<p>{read}</p>
</div>
</div>
</div>

    </>
 
);
}