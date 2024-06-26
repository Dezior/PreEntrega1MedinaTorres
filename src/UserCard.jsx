import { Button } from "antd";
import { useState } from "react";



function UserCard(props) {

    const [counter,setCounter] = useState(0)

    const handleClick = () => {
        setCounter(counter + 1)
    }

    return (
        <div className="user-card">
            <img src="https://picsum.photos/200" alt="" />
            <h2>{props.name}</h2>
            <Button>ver mas</Button>
            <button onClick={handleClick}>
                like
                <span>{counter}</span>
            </button>
        </div>
    )
}


export default UserCard;