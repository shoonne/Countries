import React from 'react';
import './../css/Style.css';

export default class CountryCardInfo extends React.Component {

    renderInfo(data){
        if(!data 
            || data === undefined 
            || data === null 
            || !data[0] 
            || data[0].name === undefined){
              return (
                <div><p style={{textAlign:'center'}}>NO RESULTS</p></div>
              )
          } else {
              return (
                <div className='white-card'>
                    <h1>{data[0].countryName}</h1>
                    <p><strong>Capital :</strong> {data[0].capital}</p>
                    <p><strong>Population :</strong> {data[0].population}</p>
                    <p><strong>Currency :</strong> {data[0].currencies[0].code}</p>
                    <p><strong>Currency Name :</strong> {data[0].currencies[0].name}</p>
                </div>
              )
          }
      }
    render(){
        return(
            <div className='center-div'>
             {this.renderInfo(this.props.data)}
            </div>
     
        )
    }

}


