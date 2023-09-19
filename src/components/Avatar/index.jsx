import React, {useContext} from "react";
import { UserContext } from "../../contexts";


const Avatar = (props) => {
  const { user: { avatar } } = useContext(UserContext);

  return (<div>
    <img src={avatar} alt="avatar" />
  </div>)
  
}


export default Avatar;
