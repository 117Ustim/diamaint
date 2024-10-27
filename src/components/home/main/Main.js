import Component1 from './comp1/Component1';
import Component2 from './comp2/Component2';
import Component3 from './comp3/Component3';
import Component4 from './comp4/Component4';
import Component5 from './comp5/Component5';
import Component6 from './comp6/Component6';

import './main.scss'


export default function Main() {
return (
 <>
   <div className='main'>
<Component1/> 
 <Component2/> 
<Component3/>

</div> 
<Component4/>  
 <div className='main'>
<Component5/> 
 <Component6/>
</div>
 </>


);
}