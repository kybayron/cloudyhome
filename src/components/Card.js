import React from 'react';

const Card = ({name, url, location}) => {
	return(
		<a href={url} className='link black'>
		<div className='tc grow bg-light-gray br3 dib bw3 shadow-5 mw4 pa2 ma1 ' >
		   <img alt='' src={require(""+location)} width='50%'  max-width='50%' />
		   <div>
			<h1 className='f6'>{name} </h1> 
			</div>
		</div>
		</a>


		)
}

export default Card;