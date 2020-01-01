import React, { Component } from 'react'
import '../App.css'
export default class Scholarship extends Component {
    

    constructor(props){
        super(props);
        this.state = {
            user : props.userDetails,
            grade : props.grade,
            send:''
        }
    }
    
   

    render() {

        let grade =Math.floor(this.state.grade / 420 * 100);

        return (
            <div className='scholarshipMain backGroundLogo'>
                <h1 className='App' style={{marginTop:'10px'}}>בקשה למלגה</h1><br/>
                <h4 className='scholarshipH4'>לאחר שליחת הבקשה יש לפנות ליועץ הלימודים על מנת לקבל מענה לזכאות המלגה</h4>
            <form className='scholarshipInput' id="fs-frm" name="registration-form" acceptCharset="utf-8" action={"https://formspree.io/"+this.state.send} method="post">
                <fieldset id="fs-frm-inputs">
                <input className='insideInput' name='name' placeholder='שם מלא' value={this.state.user.fullName} onChange={(e)=>{this.setState({user:{fullName:e.target.value,mail:this.state.user.mail,option:this.state.option},grade:this.state.grade,send:this.state.send})}}/>
                <label>הזן של מלא</label><br />
                <input className='insideInput' type="email" name="מייל התלמיד" placeholder='מייל התלמיד' value={this.state.user.mail} onChange={(e)=>{this.setState({user:{fullName:this.state.user.fullName,mail:e.target.value,option:this.state.option},grade:this.state.grade,send:this.state.send})}}/>
                <label>מייל התלמיד</label><br />
                <input className='insideInput' type="text" name="grade" value={grade} onChange={()=>alert('cant change grade')}/>
                <label>ציון</label><br />
                <input className='insideInput' type="text" name="הבחירה של התלמיד" value={this.state.user.option}/>
                <label>מקצוע נבחר</label><br />
                <input className='insideInput' type="email" name="המייל של היועץ" onChange={this.changeMail} onChange={(e)=>{this.setState({user:this.state.user,grade:this.state.grade,send:e.target.value})}} placeholder='מייל יועץ המכירות' />
                <label>מייל היועץ</label><br />
                <select className='insideInput' name='status'>
                    <option value="מצב משפחתי" selected="" disabled="">מצב משפחתי</option>
                    <option value='רווק'>רווק</option>
                    <option value='נשוי'>נשוי</option>
                    <option value='גרוש'>גרוש</option>
                    <option value='אלמן'>אלמן</option>
                </select>
                {/* <input className='insideInput' type="number" name="כמה ילדים" placeholder='כמה ילדים' /><br/> */}
                <select className='insideInput' name='work status'>
                    <option value="סוג עבודה" selected="" disabled="">סוג עבודה</option>
                    <option value='עצמאי'>עצמאי</option>
                    <option value='שכיר'>שכיר</option>
                </select><br/>
                <select className='insideInput' name='משכורת'>
                    <option value="משכורת" selected="" disabled="">משכורת</option>
                    <option value='שכר מינימום'>עד 6000</option>
                    <option value='6 - 8'>6001 - 8000</option>
                    <option value='8 - 11'>8001 - 11000</option>
                    <option value='11 - 13'>11001 - 13000</option>
                    <option value='13 +'>ומעלה 13</option>
                </select><br/>
                <select className='insideInput' name='אזור מגורים'>
                    <option value="אזור מגורים" selected="" disabled="">אזור מגורים</option>
                    <option value='צפון'>צפון</option>
                    <option value='דרום'>דרום</option>
                    <option value='מרכז'>מרכז</option>
                </select><br/>
                <select className='insideInput' name='השכלה'>
                    <option value="סוג השכלה" selected="" disabled="">השכלה</option>
                    <option value='על יסודית'>על יסודית</option>
                    <option value='אקדמאית'>אקדמאית</option>
                </select><br/>
                <select className='insideInput' name='רמת אנגלית'>
                    <option value="רמת אנגלית" selected="" disabled="">רמת אנגלית</option>
                    <option value='בסיסית'>בסיסית</option>
                    <option value='טובה'>טובה</option>
                    <option value='טובה מאוד'>טובה מאוד</option>
                    <option value='שפת אם'>שפת אם</option>
                </select><br/>
                <input className='insideInput btn btn-primary' style={{fontSize:'30px'}} type='submit' value="Send" />
                </fieldset>
            </form>
        </div>
        )
    }
}




  



