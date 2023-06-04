import {useState} from 'react'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import "./style.scss"

const SwitchTabs = ({ data, onTabChange }) => {

    const [selectedTab,setSelectedTabs] = useState(0);
    const [left,setLeft] = useState(0);

    const activeTab = (tab,index) =>{
        setLeft(index * 100)
        setTimeout(()=>{
            setSelectedTabs(index);
        },300);
        onTabChange(tab,index);
    }

  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab,index)=>{
            return (<span 
                key={index} 
                onClick={()=>activeTab(tab,index)}
                className={`tabItem ${selectedTab === index ? "active" : ""}`}
            >
                {tab}
            </span>) 
        })}
        <span className="movingBg" style={{left}}/>
      </div>
    </div>
  )
}

export default SwitchTabs

