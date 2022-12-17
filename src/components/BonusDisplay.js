import React from 'react'

const bonusDisplay = (props) => {
    const {bonusBoxColorArray} = props;

  return (
    <div>
        {
        bonusBoxColorArray.map((box, index)=> (
            <div key={index} style ={{
                display: "inline-block",
                margin: "10px",
                height: box.size,
                width: box.size,
                backgroundColor: box.color
            }}>
            </div>

        ))
}
    </div>
    );
}

export default bonusDisplay