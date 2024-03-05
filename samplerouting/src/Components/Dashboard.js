import React, { useState } from "react";
import "./Dashboard.css";
import Sider from "antd/es/layout/Sider";
import Home from "./Home";
import { Container } from "react-bootstrap";
import { Content, Header } from "antd/es/layout/layout";
import { Layout, Rate ,Card} from "antd";
import Topnavbar from "./Topnavbar";
import Sidenavbar from "./Sidenavbar";
import { WechatOutlined ,PlusOutlined,UserOutlined} from '@ant-design/icons';
import { Progress } from 'antd';
const Dashboard = () => {

    const [activity, setActivity] = useState("")
    const [listdata, setlistData] = useState([])
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
  

    const SetAct = (e) => {
        setActivity(e.target.value)
    }
    console.log(activity)

    function addActivity() {
        setlistData([...listdata, activity])

    }
    const handleInputChange = (e) => {
        setInput(e.target.value);
      };
    
      const handleSendMessage = () => {
        if (input.trim() === '') return;
    
        // Update the messages with the user's input
        setMessages([...messages, { text: input, isUser: true }]);
        setInput('');
    
        // Simulate the chatbot's response after a delay
        setTimeout(() => {
          const response = "Hello! I'm a simple chatbot.";
          setMessages([...messages, { text: response, isUser: false }]);
        }, 1000);
      };

      const employeeNames = [
        "John Smith",
        "Emily Johnson",
        "Michael Williams",
        "Jessica Brown",
        "Christopher Jones",
       
      ];

    return (

        <>
            <Layout  style={{ backgroundColor: "white", height: "100vh", display: "flex", overflow: "none" }}>
            <Sidenavbar />
            <Layout>
                <Header>
                    <Topnavbar />
                  </Header>
                     
                      <Content style={{ backgroundColor: "white" }}>
                     
                        <div style={{ display: "flex", justifyContent: "center",margin:'10px' }}>

                        <Card  key={"Connections"} title={"Connections" } bordered={false} headStyle={{ background: '#F2F8FC' }}  style={{ width: 200, marginRight: 10, marginBottom: 16,color:'#002766',borderRadius:"2px"
                        
                      }}>
                          
                          <p>Last 30 days Count: <span style={{fontWeight:'bold'}}>500</span></p>
                          
                      </Card>
                      <Card  key={"Requests"} title={"Requests" } bordered={false} headStyle={{ background: '#F2F8FC' }}  style={{ width: 200, marginRight: 10, marginBottom: 16,color:'#002766',borderRadius:"2px"
                        
                      }}>
                          
                          <p>Last 30 days Count: <span style={{fontWeight:'bold'}}>500</span></p>
                        
                      </Card>
                      <Card  key={"Total"} title={"Total" } bordered={false} headStyle={{ background: '#F2F8FC' }}  style={{ width: 200, marginRight: 10, marginBottom: 16,color:'#002766',borderRadius:"2px"
                        
                      }}>
                          
                          <p>Last 30 days Count: <span style={{fontWeight:'bold'}}>500</span></p>
                        
                      </Card>
                      <Card  key={"Rating"} title={"Rating" } bordered={false} headStyle={{ background: '#F2F8FC' }}  style={{ width: 200, marginRight: 10, marginBottom: 16,color:'#002766',borderRadius:"2px"
                        
                      }}>
                          
                          <p>Last 30 days Count: <span style={{fontWeight:'bold'}}><Rate defaultValue={4} /></span></p>
                       
                      </Card>
                           
                        </div>
                       
{/* 
                        <div className="chatbot-container" >
                    <p style={{font:"bold"}}>Ask your Questions!</p>
                    <div   style={{ display: "flex", justifyContent: "end" }}>
                       
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.isUser ? 'user-message' : 'bot-message'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={handleInputChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
    </div> */}
                   
                   
              <h3>Find your homies</h3>
             <div style={{display:'flex', height:'40vh',marginLeft:'25px',justifyContent:'center'}}>
              
             <Card style={{ display: 'flex', width: "35%", height: '40vh', margin: '30px', marginLeft: '30px', justifyContent: 'center' }}>
      <h3>Recently Added Homies</h3>
      <ul style={{ listStyleType: 'none', padding: 0 ,color:' #002766'}}>
        {employeeNames.map((name, index) => (
          <li key={index}>
            <UserOutlined style={{padding:'10px'}} />
          {name  }
          </li>
        ))}
      </ul>
    </Card>
              <Card style={{display:'flex', width:"35%", height:'40vh',margin:'30px',marginLeft:'30px',justifyContent:'center'}}>


             <h3>Activity Level</h3>

              <Progress type="dashboard" percent={75} />

              </Card>
               
               
               </div>      
            </Content>
         
   </Layout>
   </Layout>
        </>
    )
}
export default Dashboard;