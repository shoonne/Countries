import React from 'react';

// Style
import './css/Style.css';

// Components
import Flag from './components/Flag';
import CountryInfoCard from './components/CountryInfoCard';
import Converter from './components/Converter';
import SearchBar from './components/SearchBar';

export default class Home extends React.Component {
      constructor(){
          super();
          // Set inital state
          this.state = {
              data: null,
              value: '',
              currency: 'SEK',
              dataLoaded: false,
              searchBy: ''
          };

          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
          this.onClickCapital = this.onClickCapital.bind(this);

      } 

      // When the user starts typing
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      // When the user presses the submit button
      handleSubmit(event) {
        var searchInput = this.state.value
        // You could also use string templates but I'm taking the easy route here :)
       if(searchInput !== ''){
        fetch('https://restcountries.eu/rest/v2/name/' + searchInput)
        .then(response => response.json())
        .then(data => this.setState({data: data, currency: data[0].currencies[0].code, dataLoaded: true, }))
        .catch(error => this.setState({ error, dataLoaded: false }));
        event.preventDefault();
       } else {
           console.log('no input')
       }
    }

     // Use this toggle to change the url to filter the search   
      onClickCapital = () => {
          this.setState({
              searchBy: 'Capital'
          })
      }

    
    render (){
        return(
        <div>
            {/* <AnimatedText/> */}

            {/* SEARCH BAR */}
            <SearchBar  value={this.state.value}  handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>

            {/* Show the view if the data has loaded */}
            {this.state.dataLoaded ? 

            <div className='country-information'>
                <Flag data={this.state.data}/>
                <CountryInfoCard data={this.state.data}/>
                <Converter currency={this.state.currency}/>
            </div>  
            :
            // Else show the placeholder
            <div className="landing-page-container">
                <h4>Learn About Your Destination and compare the local currency</h4>
            </div> 
            }

            {/* FOOTER */}
            <div>
                <p style={{fontSize:'12px', textAlign:'center', padding: '10px',}}>Note: We dont support all currencies</p>
            </div>
        

        </div>
        )
    }
}
















