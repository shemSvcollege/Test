import React from 'react'

export default function Introduction(props) {
    return (
        <div className='App'>
            <h2 style={{marginTop:'5%'}}>?לאיזה מקצוע אני הכי מתאים</h2><br />
            <h4>מבדק זה בודק לאיזה מקצוע את/ה הכי מתאימ/ה</h4><br />
            <h2 className='boldText'> QA בדיקות תוכנה </h2> <br />
            <h2 className='boldText'> ניהול רשתות ואבטחת מידע </h2> <br /> 
            <h2 className='boldText'>  DEVOPS איש  </h2> <br />
            <h3 className='boldText'>  FRONT-END מפתח תוכנה  </h3> <br />
            <h4>על פי הקישורים האישיים  וידע מבחן זה יוכל לאבחן</h4>
            <h4>לאיזה מקצוע את/ה הכי מתאימ/ה </h4> <br />
            <h2>!בהצלחה</h2><br />
            <button style={{fontSize:'30px'}} className='btn btn-primary' onClick={()=>props.start()} >התחל</button>
        </div>
    )
}
