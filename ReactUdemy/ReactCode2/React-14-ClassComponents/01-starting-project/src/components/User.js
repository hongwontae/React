import classes from './User.module.css';
import {Component} from 'react'

class User extends Component{
  
  render(){
    return <li className={classes.user}>{this.props.name}</li>
  } 
  // === JSX의 return과 같다.
  // render 메서드에서 props를 받지 않는다.

}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
