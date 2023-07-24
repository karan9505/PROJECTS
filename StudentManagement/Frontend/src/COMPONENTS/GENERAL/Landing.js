import { useState } from 'react';
import '../../CSS/Landing.css'
export default function Landing() {

  // const [userData,setUserData]=useState({});


  // const sendData=()=>
  // {
  //   axios.post("http://localhost:8000/User",userData)
  //   .then((response)=>{
  //     console.log(response.data)
  //   })
  //   .catch((error)=>{
  //     console.log(error.message)
  //   })
  // }


  // const search=(e)=>
  // {
  //   axios.post("http://localhost:8000/User/Search",{key:e.target.value})
  //   .then((resp)=>{
  //     console.log(resp.data);
  //   })
  // }

  const [loginImg,setLoginImg]=useState('');

  const [loginSignup,setLS]=useState(true);

  const moveL=()=>
  {
    let slider=document.getElementById("slider");
    slider.style.transform="translateX(-514px)"
  }

  const moveR=()=>
  {
    let slider=document.getElementById("slider");
    slider.style.transform="translateX(0px)"
  }

  const radioClicked=(e)=>{
    let adminDiv=document.getElementById("adminDivid");
    let studentDiv=document.getElementById("studetDivid");
    let nextButton=document.getElementById("roleToLogin");
    nextButton.style.visibility="visible";
    if(e.target.parentElement.id==="adminDivid"){
      studentDiv.style.backgroundColor="rgb(255,255,255)";
      adminDiv.style.backgroundColor="rgba(227, 79, 79,0.5)";
      nextButton.value="Continue as admin...";
      setLoginImg('../IMAGES/AdminLogo.png');
    }
    else{
      adminDiv.style.backgroundColor="rgb(255,255,255)";
      studentDiv.style.backgroundColor="rgba(227, 79, 79,0.5)";
      nextButton.value="Continue as student...";
      setLoginImg('../IMAGES/StudentLogo.png');
    }
  }

  return (
    <>
      <div className="landingBack">
        <div className="landingLeft">
          <h1 id="llHeading"><span>Veracross.</span><br></br>studentManagementSystem...</h1>
          <img src='../IMAGES/VeracrossLogo.png' alt='IamgeNotFpund' id="llimage1"></img>
          <img src='../IMAGES/LandingLOGO.png' alt='IamgeNotFpund' id="llimage2"></img>
        </div>
        <div className="landingRight" id="landingRight">
          <div id="slider">


            <div className='optioncard' id="card1">
              <h1 className='sliderHeading'><span>Welcome to Veracross</span><br></br>Choose your role</h1>
              <div className='roleDiv' id="adminDivid">
                <input type='radio' name="roleRadio" id="adminRoleRadio" onClick={(e)=>(radioClicked(e))}></input>
                <h1>Admin</h1>
              </div>
              <div className='roleDiv' id="studetDivid">
                <input type='radio' name="roleRadio" id="studentRoleRadio" onClick={(e)=>(radioClicked(e))}></input>
                <h1>Student</h1>
              </div>
            <input type='button' onClick={()=>(moveL())} className='cardButton' id="roleToLogin"></input>
            </div> 


          <div className='optioncard' id="card2">
            <img src="../IMAGES/Back.png" onClick={()=>(moveR())} id="BackButton" alt="NotGount"></img>
            
            {
              loginSignup?
              <>
              <h1 className='sliderHeading' id="loginHeading"><span>Login</span></h1>
              <img src={loginImg} className='loginImage' alt='NotFound'></img>
              <div className='inputDataDiv' id="loginInputEmailDiv">
                <label for="loginEmail">Email</label>
                <input type='text' placeholder='Email...' id="loginEmail" className='inputField'></input>
              </div>
              <div className='inputDataDiv' id="loginInputpassilDiv">
                <label for="loginPass">Password</label>
                <input type='password' placeholder='Password...' id="loginEmail" className='inputField'></input>
              </div>
              <input type='button' value={"Login"} className='cardButton' id="loginButon"></input>
              <p id="newLoginText">New to Veracross?<span onClick={()=>(setLS(prev=>!prev))}>Let's Signup</span></p>
              </>:
              <>
              <h1 className='sliderHeading' id="signupHeading"><span>Sign-Up</span></h1>
              </>
            }
          </div>

          </div>
          
        </div>
      </div>
    </>
  )
    // <div id="Signupform">
    //   <div>
    //   <label for="firstName">First Name : </label>
    //   <input type="text" placeholder='First name' id='firstName' onChange={(e)=>{setUserData({...userData,firstName:e.target.value})}}></input>
    //   </div>
      
    //   <div>
    //   <label for="lastName">Last Name : </label>
    //   <input type="text" placeholder='Last name' id='lastName' onChange={(e)=>{setUserData({...userData,lastName:e.target.value})}}></input>
    //   </div>
      
    //   <div>
    //   <label for="email">Email : </label>
    //   <input type="text" placeholder='Email' id='email' onChange={(e)=>{setUserData({...userData,email:e.target.value})}}></input>
    //   </div>
      
    //   <div>
    //   <label for="password">Password : </label>
    //   <input type="text" placeholder='Password' id='password' onChange={(e)=>{setUserData({...userData,password:e.target.value})}}></input>
    //   </div>
      
    //   <div>
    //   <label for="userType">User Type : </label>
    //   <div id='userType'>
    //       <label for='adminradio'>Admin</label>
    //       <input type="radio" placeholder='First name' name="userType" id="adminradio" onClick={(e)=>{setUserData({...userData,userType:1})}}></input>

    //       <label for='userradio'>User</label>
    //       <input type="radio" placeholder='First name' name="userType" id="userradio" onClick={(e)=>{setUserData({...userData,userType:0})}}></input>
    //   </div>
    //   <input type='button' value="SUBMIT" onClick={()=>(sendData())}></input>
    //   </div>
    //   <input type='text' onChange={(e)=>(search(e))}></input>

    // </div>
}
