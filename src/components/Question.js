import React from 'react'
export default function Question(props) {


    let check = (num)=>{
        if(num == props.trueAnswer)
            props.res(true,props.index);
        else
            props.res(false,props.index);

    }


    return (
        <div>
            <div className='titleOfQ'>
                <h1> {props.title}</h1>
                     <span style={{fontWeight:'bold'}}>{props.index+1} שאלה</span>
                 </div>
                 <div className='card answerOfQ' onClick={()=>check(0)}>
                     {props.a1}
                 </div>
                 <div className='card answerOfQ' onClick={()=>check(1)}>
                     {props.a2}
                 </div>
                 <div className='card answerOfQ' onClick={()=>check(2)}>
                     {props.a3}
                 </div>
                 <div className='card answerOfQ' onClick={()=>check(3)}>
                     {props.a4}
                 </div>
                 <div className='card answerOfQ' id='pass' onClick={()=>check(4)}>
                     לא יודע/ת את התשובה
                 </div>
        </div>
    )
}
