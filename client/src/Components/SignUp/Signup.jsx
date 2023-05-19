import React,{useState} from 'react';
import './Signup.css';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import signupPic from '../../images/SignupPic.png';
import facebookIcon from '../../images/f_logo.png'
import googleIcon from '../../images/2991148.png'

function Signup({caStat,setCaStat}) {
  const[passStat,setPassStat] =  useState(false);
  const [signupStat,setSignupStat] = useState(false);

  const handleChange=(e)=>{
    if(signupStat){
      setCaStat(true);
      setSignupStat(false);
    }else{
      setSignupStat(true);
    }
  }
  return (<>
    <div className="bg-div"></div>
    <div className="signupContainer">
      <div className='signupCard'>
        <div className="topSection mob-hid">
            <p className='topSection-content'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
            <CloseOutlinedIcon onClick={() => setCaStat(false)} className='closeBtn'/>
        </div>
        <div className="mainSection">
          <div className="mainSubsec">
            <p style={{fontSize:'24px',fontWeight:'700'}}>{signupStat ? 'SignUp' :'Create Account'}</p>
            <form>
              {!signupStat && <div style={{display:'flex',flexDirection:'row'}}>
                <input type="text"class="form-input _1" placeholder="FirstName"/>
                <input type="text"class="form-input _1" placeholder="LastName"/>
              </div>}
              <input type="email"class="form-input" placeholder="Email"/>
              <input type="password"class="form-input" placeholder="Password"/>
              {!signupStat && <input type="password"class="form-input" placeholder="Confirm Password"/>}
              <button type="submit" class="btn btn-primary" style={{borderRadius:'20px',marginTop:'15px'}}>{signupStat ? 'SignUp' :'Create Account'}</button>
            </form>
            <button type='button' class="f-g-singup-btn" style={{marginTop:'20px'}}>
              <img src={facebookIcon} className='f-g-logo' alt='facebook-icon'/>Sign up with Facebook
            </button>
            <button type='button' class="f-g-singup-btn">
              <img src={googleIcon} className='f-g-logo' alt='google-icon'/>Sign up with Google
            </button>
          </div>
          <div className="mainSubsec mob-hid">
            <p style={{fontSize:'14px',padding:'10px',textAlign:'end'}}>
              Already have an account? 
              <span className='S-link' onClick={handleChange}>{signupStat ? ' Create Account':' SignUp'}</span>
            </p>
            <img src={signupPic} alt='img'/>
            <p style={{fontSize:'10px',marginLeft:'15px'}}>By signing up, you agree to our Terms & conditions, Privacy policy</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup
