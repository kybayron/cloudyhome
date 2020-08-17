import React, { Component } from 'react';
import CardList from './components/CardList'
import social from './components/links/social';
import search from './components/links/search';
import icon from './assets/Asset_20.png'

class App extends Component {
  render() {
    return (
        <div>
          <div>
            <img src={icon} alt='' className='fl pa2'/>
            <h1 className='pa3'> Cloudy Home</h1>
          </div>
          <div className='tc bg-near-white bw2 mh7 br3 shadow-4'>
            <CardList links={search} name='Search Engines' />
            <CardList links={social} name='Social Media' />
           </div>
            <h1> Hello </h1>
        </div>
      )
  }
}

export default App;
