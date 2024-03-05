import React, { useEffect, useState } from "react";
import axios from "axios";
import { Result, message, Button, Card, Carousel, Radio } from "antd";
import { UserAddOutlined, WechatOutlined, CaretRightOutlined, EyeOutlined, EyeInvisibleOutlined, CloseOutlined, CloseCircleFilled, LockOutlined } from '@ant-design/icons'
import "./Signup.css";


function Signup() {
    const [FullName, setFirstName] = useState('');
    const [Phone, setPhone] = useState('');
    const [Email, setEmail] = useState('');

    const [Password, setPassword] = useState('');
    const [dotPosition, setDotPosition] = useState('top');

    const handlefirstnamechange = (value) => {
        setFirstName(value);

    };
    const handlephonechange = (value) => {
        setPhone(value);
    };
    const handlemailchange = (value) => {
        setEmail(value);
    };
    const handlpasswordchange = (value) => {
        setPassword(value);
    };
    const handlesave = (value) => {
        const data = {
            FullName: FullName,
           Email: Email,
            Phone:Phone,
            Password: Password
          
        }
        const url = 'https://localhost:7097/api/Registration/registartion';
        axios.post(url, data).then(() => {

            message.success("Registartion Successfull");
        })
    };
   

    return (
        // <div style={{height:"1024px",width:"718px"}}>
        <div style={{ display: "flex" }}>
            <div className="container1" >
                <card style={{ display: "flex" }}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/600px-World_map_-_low_resolution.svg.png"
                        alt="World Map"
                        style={{ width: "30%", height: "30px" }}
                    />

                    <select
                        id="language"
                        name="language"
                        style={{ marginLeft: "14px", fontSize: "15px", border: '0px', margin: "10px", width: "80px", height: "30px" }}
                    >
                        <option value="en">English</option>
                        <option value="fr">French</option>
                        <option value="es">Spanish</option>
                        <option value="de">German</option>
                        {/* Add more language options as needed */}
                    </select>
                </card>


                <form>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "30px 0", margin: "20px" }}>
                        <img style={{ width: "50px", height: "50px", borderRadius: "10%", border: "2px solid #fff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", marginRight: "10px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS13Rds6RvyD7L13FGA1fRGcgKcJGSd7X_dU_6va9ishvJ-GC17xRJBsnZXypPJyeCM6yo&usqp=CAU" alt="Logo" />
                        <div>
                            <h2 style={{ display: "inline", fontWeight: "bold", fontSize: "24px", marginBottom: "5px" }}>Father</h2>
                            <p style={{ display: "inline", fontSize: "24px", margin: "0", marginLeft: "0px" }}>Shops</p>
                        </div>
                    </div>



                    <div>
                        <h3>Sign Up</h3>
                    </div>


                    {/* <WechatOutlined  className="icon-alignment"/>Signup </div> */}


                    <input type="text" className="email-class" placeholder='Full Name' onChange={(e) => handlefirstnamechange(e.target.value)} />

                    <input type="text" className="email-class" placeholder="Phone Number" onChange={(e) => handlephonechange(e.target.value)} />

                    <input type="text" className="email-class" placeholder="email" onChange={(e) => handlemailchange(e.target.value)} />

                    <input type="text" className="email-class" placeholder="Password"  onChange={(e) => handlpasswordchange(e.target.value)} />

                    <Button style={{ backgroundColor: "black", color: "white", fontSize: "18px", justifyContent: "flex-start", width: "55%", height: "40px" }} className="button" onClick={() => handlesave()} >Create Account</Button>
                    <p style={{ marginLeft: "45px", color: "gray" }}  >Already Have an Account {<CaretRightOutlined />}  <a href="/" style={{ color: "black" }}  > Login</a></p>
                    <p style={{ marginLeft: "30px", color: "gray", marginTop: "120px" }}  >By saying up agree to our  <a href="/" style={{ color: "black" }}  > Tearms & Conditions</a></p>

                </form>
            </div>

            <div className="container2" >

                <h3 style={{ fontSize: "20px", marginLeft: "40px", marginRight: "20px", marginBottom: "30px" ,marginTop:"20px"}}>Millions of product are just ready to Dropship</h3>
                <p style={{ fontSize: "13px", marginLeft: "40px", marginRight: "20px" }}>
                    Millions of product are just ready to Dropship  Millions of product are just ready
                    to Dropship Millions of product are just ready to Dropship
                </p>

                <Carousel className="corasalstyle" dotPosition={dotPosition}>
                    <div className="wholecardscontainer">
                        <div className="lastcontainer">

                            <Card className="cardsverticle"></Card>

                            <Card style={{ backgroundColor: "lightgray" }} className="cardsverticle"></Card>

                            <Card className="cardsverticle"></Card>
                            {/* <Card className="cardsverticle"></Card> */}
                        </div>
                        <div className="lastcontainer">

                            <Card style={{ backgroundColor: "lightgray" }} className="cardsverticle"></Card>

                            <Card style={{ backgroundColor: "lightgray", marginBottom: "auto" }} className="cardshorizontal"></Card>

                            <Card style={{ backgroundColor: "lightgray" }} className="cardsverticle"></Card>
                            {/* <Card className="cardsverticle"></Card> */}
                        </div>
                        <div className="lastcontainer">

                            <Card className="cardshorizontal"></Card>

                            <Card style={{ backgroundColor: "lightgray", marginTop: "-60px" }} className="cardsverticle"></Card>

                            <Card className="cardshorizontal"></Card>
                            {/* <Card className="cardsverticle"></Card> */}
                        </div>
                        <div className="lastcontainer">

                            <Card style={{ backgroundColor: "lightgray" }} className="cardsverticle"></Card>

                            <Card className="cardsverticle"></Card>

                            <Card style={{ backgroundColor: "lightgray" }} className="cardsverticle"></Card>
                            {/* <Card className="cardsverticle"></Card> */}
                        </div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>

                </Carousel>

            </div>
        </div>
    )

}
export default Signup;