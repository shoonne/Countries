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
          <input className="search-button" type="submit" value="SEARCH" />
      </form> 

      <div style={{marginTop:'20px'}}>
      Search By capital <input onChange={this.props.onChangeCheckBox}  type="checkbox" name="Capital" value="Capital"/> 
      </div>

    </div>
    )
  }
}