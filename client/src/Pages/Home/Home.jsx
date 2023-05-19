import React,{useState} from 'react';
import Topbar from '../../Components/Topbar/Topbar';
import './Home.css';
import ContentSection from '../../Components/ContentSection/ContentSection';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

function Home() {
  const[joinStat,setJoinStat] = useState(false);
  return (
    <div className="Container" style={{padding:'0'}}>
        <Topbar/>
        <div className="home-header">
          {!joinStat ? <button className='btn btn-sm' onClick={() => setJoinStat(!joinStat)}>Join Group</button>:
          <button className='btn btn-sm' onClick={() => setJoinStat(!joinStat)}>Leave Group</button>}
          <div className="home-header-bg"></div>
          <h2>Computer Engineering</h2>
          <p>142,765 Computer Engineers follow this</p>
        </div>
        <ContentSection/>
        <div className="write-post-mob">
          <CreateOutlinedIcon/>
        </div>
    </div>
  )
}

export default Home
