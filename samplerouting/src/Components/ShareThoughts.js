import React, { useState } from "react";
import "./Dashboard.css";
import Sider from "antd/es/layout/Sider";
import Home from "./Home";
import { Container } from "react-bootstrap";
import { Content, Header } from "antd/es/layout/layout";
import { Layout, Rate ,Card,Carousel} from "antd";
import Topnavbar from "./Topnavbar";
import Sidenavbar from "./Sidenavbar";
import { WechatOutlined ,PlusOutlined,UserOutlined,MobileOutlined} from '@ant-design/icons';
import { Progress } from 'antd';
const ShareThoughts = () => {

    const employeeNames = [
        "John Smith",
        "Emily Johnson",
        "Michael Williams",
        "Jessica Brown",
        "Christopher Jones",
    ];

    const moviesToWatch = [
        { title: "Inception", image: "https://images.squarespace-cdn.com/content/v1/5ec686197f8b2976074846c2/1618809593080-N5PB8CWYOW3OPDE2TT6E/Feature+3-1.png" },
        { title: "The Shawshank Redemption", image: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-71780,resizemode-75,msid-96406238/news/international/us/the-shawshank-redemption-where-to-watch-know-here.jpg" },
        { title: "Akhanda", image: "https://www.cinejosh.com/reviewsimg/big/akhanda-review_b_0212210159.jpg" },
        { title: "The Godfather", image: "https://fox2now.com/wp-content/uploads/sites/14/2022/06/GettyImages-1195327712.jpg?w=2560&h=1440&crop=1" }
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
                     <h3>Connect your Friends and watch the movie</h3>
                      <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                        <Card style={{ width: "55%", margin: '30px', justifyContent: 'center' }}>
                            <h3>Movies to Watch</h3>
                            <Carousel autoplay>
                                {moviesToWatch.map((movie, index) => (
                                    <div key={index}>
                                        <img src={movie.image} alt={movie.title} style={{ width: "100%", height: "auto" }} />
                                        <p style={{ textAlign: "center", marginTop: "10px", marginBottom: "0" }}>{movie.title}</p>
                                    </div>
                                ))}
                            </Carousel>
                        </Card>
                        <Card style={{ width: "35%", margin: '45px', justifyContent: 'center' }}>
                            <h3>Connected Members</h3>
                            <ul style={{ listStyleType: 'none', padding: 0, color: ' #002766' }}>
                                {employeeNames.map((name, index) => (
                                    <li key={index}>
                                        <UserOutlined style={{ padding: '10px' }} />
                                        {name}
                                        <MobileOutlined style={{ padding: '10px' }}/>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>   
            </Content>
         
   </Layout>
   </Layout>
        </>
    )
}
export default ShareThoughts;