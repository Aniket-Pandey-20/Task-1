import React, { useState } from 'react'
import './ContentSection.css';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ClearIcon from '@mui/icons-material/Clear';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Post from '../Post/Post';

import profilPhoto from '../../images/profil-photo.jpg';
import profilPhoto2 from '../../images/profil-photo2.jpg';

function ContentSection() {
    const[curTab,setCurTab] = useState(1);
    const [clearStat,setClearStat] = useState(false);
    const [searchContent,setSearchContent] = useState("");

    const clearTextarea =()=>{
        document.getElementById("locationInput").value = "";
        setClearStat(false);
        setSearchContent("");
    }
    const handelSubmit = (e)=>{
        e.preventDefault();
        console.log(searchContent)
    }

    const handelInput = (e) =>{
        if(e.target.value){
            setClearStat(true);
            setSearchContent(e.target.value);
        }else{
            setClearStat(false);
        }
    }

  return (
    <div className='ContentSection container'>
        <div className="CS-Nav row">
            <div class="col-8">
                <nav class="nav">
                    <a class={curTab === 1 ? 'link activelink' : 'link'} aria-current="page" onClick={() => setCurTab(1)}>All Posts(34)</a>
                    <a class={curTab === 2 ? 'link activelink' : 'link'} onClick={() => setCurTab(2)}>Article</a>
                    <a class={curTab === 3 ? 'link activelink' : 'link'}  onClick={() => setCurTab(3)}>Events</a>
                    <a class={curTab === 4 ? 'link activelink' : 'link'}  onClick={() => setCurTab(4)}>Education</a>
                    <a class={curTab === 5 ? 'link activelink' : 'link'}  onClick={() => setCurTab(5)}>Jobs</a>
                </nav>
            </div>
            <div class="col-4">
                <div class="dropdown">
                    <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Write a Post
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                    </ul>
                </div>
                <button class="btn btn-primary btn-sm" type="submit"><GroupAddIcon style={{transform: 'scaleX(-1)',marginRight:'5px',padding:'2px'}}/>Join Group</button>
            </div>
        </div>

        <div className='CS-posts row'>
            <div className="col-8">
                <Post type={'article'} headContent={"What if famous brands had regular fonts? Meet RegulaBrands!"} profil={profilPhoto} name={"Alex Parker"}/>
                <Post type={'education'} headContent={"Tax Benefits for Investment under National Pension Scheme launched by Government"} profil={profilPhoto2} name={"John Carter"}/>
                <Post type={'event'} headContent={"Finance & Investment Elite Social Mixer @Lujiazui"} profil={profilPhoto} name={"Alex Parker"}/>
                <Post type={'job'} headContent={"Software Developer vacancy. MERN Stack required"} profil={profilPhoto2} name={"John Carter"}/>
            </div>
            <div className="col-4 sideBar">
                <div className="sideBar-search">
                    <LocationOnOutlinedIcon className='locationIcon'/>
                    <form onSubmit={handelSubmit}>
                        <input id='locationInput' type="text" placeholder='Enter your location' onChange={handelInput}/>
                        {clearStat && <ClearIcon style={{position:"absolute",top:"8px",cursor:"pointer",width:'21px'}} onClick={clearTextarea}/>}
                    </form>
                </div>
                <div className="sideBar-info">
                    <ErrorOutlineOutlinedIcon style={{width:'15px'}}/>
                    <p>Your location will help us serve better and extend a personalised experience.</p>
                </div>
                <div className="sideBar-recd-sec">
                    <h6>RECOMMENDED GROUPS</h6>
                    <div className="recd-profils">
                        <div className="recd-profils-section" style={{transform:'scale(0.8)'}}>
                            <div className="profilPhoto">
                                <img src={profilPhoto} alt='/'/>
                            </div>
                            <div className="head-name">Alex Parker</div>
                        </div>
                        <div className="recd-profils-section">
                            <button type="button" class="btn btn-light btn-sm" style={{borderRadius:'20px',fontSize:'12px',background:'#EDEEF0'}}>Connect</button> 
                            {/* <button type="button" class="btn btn-dark btn-sm" style={{borderRadius:'20px',fontSize:'12px'}}>Connected</button> */}
                        </div>
                    </div>

                    <div className="recd-profils">
                        <div className="recd-profils-section" style={{transform:'scale(0.8)'}}>
                            <div className="profilPhoto">
                                <img src={profilPhoto2} alt='/'/>
                            </div>
                            <div className="head-name">Activism</div>
                        </div>
                        <div className="recd-profils-section">
                            {/* <button type="button" class="btn btn-light btn-sm" style={{borderRadius:'20px',fontSize:'12px',background:'#EDEEF0'}}>Connect</button>  */}
                            <button type="button" class="btn btn-dark btn-sm" style={{borderRadius:'20px',fontSize:'12px'}}>Connected</button>
                        </div>
                    </div>

                    <div className="recd-profils">
                        <div className="recd-profils-section" style={{transform:'scale(0.8)'}}>
                            <div className="profilPhoto">
                                <img src={profilPhoto} alt='/'/>
                            </div>
                            <div className="head-name">Alex Parker</div>
                        </div>
                        <div className="recd-profils-section">
                            <button type="button" class="btn btn-light btn-sm" style={{borderRadius:'20px',fontSize:'12px',background:'#EDEEF0'}}>Connect</button> 
                            {/* <button type="button" class="btn btn-dark btn-sm" style={{borderRadius:'20px',fontSize:'12px'}}>Connected</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContentSection
