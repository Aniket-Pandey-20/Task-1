import React, { useState } from 'react'
import './Post.css'
import { Link } from 'react-router-dom';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import daniel from '../../images/daniel-plan-WfMi4UZVwWc-unsplash.jpg';

function Post({type,headContent,profil,name}) {

  return (
    <div className='PostCard'>
        <div className="post-img">
            <img src={daniel} alt='Postimg'/>
        </div>

        <div className="post-type">
            <p>{type === 'article' ? '✍️ Article' : type === 'education' ? '🔬️ Education' : type === 'event' ? '🗓️ Event' :'💼️ Job'}</p>
        </div>

        <div className="post-content">
            <Link to='/' style={{textDecoration:'none',cursor:'pointer',color:'inherit',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <div className="post-Title">
                    {headContent}
                </div>
                <div class="dropdown">
                    <button class="btn" type="button" style={{position:'relative',right:'-20px',background:'transparent'}} id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <MoreHorizIcon/>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Edit</a></li>
                        <li><a class="dropdown-item" href="#">Report</a></li>
                        <li><a class="dropdown-item" href="#">Option3</a></li>
                    </ul>
                </div>
            </Link>
            {(type === 'article' || type === 'education') ? <div className="post-answer">
                If you don’t want to read my whole story, here’s the important things

                I was pretty weak in C/C++ but strong in Python so had decided to work on my Python skills instead of C/C++. You have to note that many companies ask for C/C++ explicitly. I was willing to wager my bet on Python and it paid off(Though I did a bit of C++ just for OOP). Concurrently, I was solving coding questions on LeetCode and participating in coding contests on CodeChef and CodeForces even though I was not able to solve more than 1 question at the time.
            </div>
            :
            <div className="post-discription">
                <div className="post-dis-sec">
                    <div className="post-dis-subSec date">
                        <EventOutlinedIcon/>
                        <p>Fri, 12 Oct, 2018</p>
                    </div>
                    <div className="post-dis-subSec location">
                        <LocationOnOutlinedIcon/>
                        <p>Ahmedabad, India</p>
                    </div>
                </div>
                {type === 'job' ? <button type="button" class="btn btn-sm btn-job">Apply on Timesjobs</button> : <button type="button" class="btn btn-sm btn-event">Visit Website</button>}
            </div>
            }
        </div>

        <div className="post-header">
            <div className="post-header-sec">
                <div className="profilPhoto">
                <img src={profil} alt='/'/>
                </div>
                <div className="head-name">{name}</div>
            </div>
            <div className="post-header-sec">
                <div className="head-sub-dis">
                    <VisibilityOutlinedIcon style={{width:'15px'}}/> 
                    1.4k views
                </div>
                <ShareIcon style={{marginLeft:'20px',cursor:'pointer'}}/>
            </div>
            
        </div>
    </div>
  )
}

export default Post
