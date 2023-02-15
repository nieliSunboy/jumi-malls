import { time } from "console";
import { observer } from "mobx-react";
import React, { useState } from "react";
import { Timer } from "~/store/tomer";

function TimerView ({timer} : {timer: Timer}) {
    const [num , setNum] = useState(0);
    return(
        <div>
            <h1>{ timer.name }</h1>

            <button onClick={() => {
                setNum(num + 1);
                timer.setName('name--'+ num)
            }}>点击</button>
        </div>
    )
}

export default observer(TimerView); 