import React from 'react';

const Card = ({name, url, location}) => {
	return(
		<a href={url} className='link black'>
		<div className='tc grow bg-near-white br3 pa4 ma3 dib bw3 shadow-5' >
		   <img alt='' src={require(""+location)} width='100px' height='auto'/>
		   <div>
			<h1 className='f6'>{name} </h1> 
			</div>
		</div>
		</a>


		)
}

export default Card;