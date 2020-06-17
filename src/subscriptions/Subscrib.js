

import React, { Component } from 'react'
import axios from 'axios';
import App from '../App';

 class Subscrib extends Component {
    constructor(props){
        super(props)
        this.state = {
            sub: []
        }

    }
    componentWillReceiveProps(){
           this.getsub()
    }
    getsub=()=>{
        
        this.props.search !==''?
        axios.get('https://api.github.com/users/'+this.props.search+'/subscriptions')
            .then( res => {  
                this.setState({sub:res.data})
            })
            // console.log(res.data)

        .catch( err => console.log(err)) 
        : console.log('no')
       
        
    }


    render() {
        //console.log(this.state.sub)
        return (
            <div>
                {this.state.sub && this.state.sub.map(value=>{
              console.log(value)
              let hee = ''+value.html_url+''
              console.log(hee)
              return (
                <div key={value.id}>
                    
              <h3><a href={hee}>{value.description}</a></h3>
                </div>
              )})
            }
            </div>
        )
    }
}

export default Subscrib
