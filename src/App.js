


import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Subscrib from './subscriptions/Subscrib';


const 
id = 'd7dc7f738c7bc51a728c',
secret = '70fb07e1b4260d864f155674d9fce09ae2d8e591'







class App extends ( Component ) {
    constructor(){
      super()
      this.state = {
        result : [],
        searching : "",
        required_field : '',
        sub : ''

      }
    }
   

  getapi=()=>{
    let required = this.state.searching
      required !== ''? 
      axios.get('http://api.github.com/users/'+this.state.searching+'?client_id='+id+'&client_secret='+secret+'&sort=created')
        .then( res => {this.setState({result: [res.data]})
        this.setState({required_field: ''})
        }
      )
      .catch( err => console.log(err)) 
    
      : this.setState({required_field: 'Required field'})

  }

  // componentDidUpdate(){
  //   <Subscrib the_sub={this.state.sub}/>
  // }

  search=event=>{
     this.setState({searching:event.target.value})
     
  }



  render(){
     
      //console.log(this.state.required_field)
       
    return (
     <div className='results'>
       
          {this.state.result && this.state.result.map(value=>{
           // console.log(value)
            // this.setState({sub :value.subscriptions_url})
              return (
                <div key={value.id}>
                  
                  <h2>Full Name :{value.name}</h2>
                  <h2>User Name :{value.login}</h2>
                  <h2>Bio :{value.bio}</h2>
                  <h2>location :{value.location}</h2>
                  <h2>Email Address :{value.email}</h2>
                  <h2>User Repositories</h2>
                  
                  <Subscrib search={this.state.searching}/>
                </div>
              )
            })
          }
           <button onClick={this.getapi}>Search</button>
          <input type='text'  
           value={this.state.searching}
           name='searching'
           onChange={this.search}
          />
          <h3>{this.state.required_field} </h3>
     </div>
    )
  }
 
}

export default App;
