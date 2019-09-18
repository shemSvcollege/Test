import React , {useState} from 'react'
import '../SelectCss.css'
export default function Register(props) {
    

    const [fn , setFn] = useState('');
    const [mail , setMail] = useState('');
    const [option , setOption] = useState('qa');
    

    const validation=()=>{
        if(fn==''||mail==''){
           alert('יש להזין שם מלא ומייל')
        }
        else
        props.addUser({fullName:fn,mail:mail,option:option})
    }

    return (
        <div className='App'>
            <h1 style={{marginTop:'5%'}}>הרשמה</h1>
            <h3>יש להזין את הפרטים האישיים שלך על מנת שנוכל לסיים את התהליך בהצלחה</h3>
        
            <input className='input' type='text' onChange={(e)=>setFn(e.target.value)} placeholder='שם מלא'/><br />
            <input className='input' type='mail' onChange={(e)=>setMail(e.target.value)} placeholder='מייל'/><br />
            <h4>בחר קטגורה שהכי מעניינת אותך</h4>
            <select className='custom-select' onChange={(e)=>{setOption(e.target.value)}}>
                <option value='qa'>בדיקות תוכנה</option>
                <option value='fe'>פיתוח תוכנה</option>
                <option value='dev'>DEVOPS</option>
                <option value='it'>ניהול רשתות</option>
                <option value='none'>אחר</option>
            </select> <br />
            <br />
            <button className='btn btn-primary' style={{fontSize:'30px'}} onClick={()=>validation()}>בואו נתחיל</button>
        </div>
    )
}
