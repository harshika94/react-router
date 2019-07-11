import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Roaster extends Component{
  constructor(props){
      super(props);
      console.log(props);
  }
  componentDidMount(){
  }
  render(){
    const { history,location,match }= this.props
    return(
      <div>
            {match.params.number==location.state.user.id?
                location.state.user.email:
                "loading..."
            }
      </div>
    )
  }
}


export default Roaster;