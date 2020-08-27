import React from 'react';
import './Card.css';





const Card = (props) => {
  const {name ,email, id}=props;
	return(
		<React.Fragment>
         <div className='bg-light-green dib br3 pa3 mr2 grow'>
			<img alt='Photo' src={'https://robohash.org/${props.id}?200x200'} />
              <div><font color="Black">
            <h2>{name}</h2>
            <p> {email}</p></font>
              </div>
	     </div>
		</React.Fragment>
    
     
  
         

		);
}
export default Card;