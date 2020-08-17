import React from 'react';
import Card from './Card';

const CardList = ({ links,name }) => {

	return(
		<div>
		<h1 className="tc f3  underline">{name} </h1> 
		<div>
			{
				
				 links.map((websites,i) => {
					 return(
						<Card key={i} name={websites.name} url={websites.url} location={websites.location} />
					 );
				 })
			}
		</div>	
		</div>	

	);
}
export default CardList;