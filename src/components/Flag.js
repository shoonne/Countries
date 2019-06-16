import React from 'react';


export default class Flag extends React.Component {

    rednerFlagImage(data){
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
            <div className='center-div'>
                <img className='country-img-style' src={data[0].flag}  alt=""/>
            </div>  
              )
          }
      }
    render() {
        return (
            <div>
                {this.rednerFlagImage(this.props.data)}
            </div>
        )
    }
}




