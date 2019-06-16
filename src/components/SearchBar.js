import React from 'react';



export default class SearchBar extends React.Component {
  render(){
    return(
    <div className='search-container'>
      <form onSubmit={this.props.handleSubmit}>  
          <label className='welcome-text'>
              <h1>WELCOME</h1>
              <div className="red-border"/>
              <h2>Lets travel</h2>
              <input className='input' value={this.props.value} type="text" placeholder="Enter country name" onChange={this.props.handleChange} />
          </label>
          <br/>
          <input  style={{backgroundColor:'white', height:'70px', width:'200px', marginLeft: '20px' }} type="submit" value="SEARCH" />
      </form>    
    </div>
    )
  }
}