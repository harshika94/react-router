import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Roaster extends Component{
  constructor(props){
      super(props);
      this.state={
        users:[]
      }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        users:data
      })
    })
    .catch(error=>console.log(error));
  }
  render(){
    return(
      <ul>
          {this.state.users.map(user=>{
            return <li key={user.id}>
            <Link to={{
              pathname:'/roster'+'/'+user.id,
              state:{
                user:user
              }
              }}>
                {user.name}
              </Link>
            </li>
          })
          }
      </ul>
    )
  }
}


export default Roaster;