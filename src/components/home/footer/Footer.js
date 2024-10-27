import  './footer.scss'
import bg from '../../../img/footer/f.svg'
import instagram from '../../../img/footer/instagram.svg'
import facebook from '../../../img/footer/facebook.svg'

export default function Footer() {
return (
<div className='footer'>
<div className='image_b'>

    </div>
     <div className='image'>
<img src={bg}/>   
 <div className='contact'>
 
     <div className='contact_title'>
<p>Контакт</p>
</div>
<div className='contact_phone'>
<p>+38(067-327-60-40)</p>
</div>
<div className='contact_adress'>
<p>Киев. Лятошинского 48</p>
</div>

<div className='contact_logo'>
<img src={instagram}alt='logo_instagram'/>
<img src={facebook}alt='logo_facebook'/>
</div>
   

</div> 
    </div>


</div>
);
}