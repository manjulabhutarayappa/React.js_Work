import React, { useState } from "react";
import { Card, Layout, Button, Input, Checkbox } from "antd";
import Topnavbar from "./Topnavbar";
import Sidenavbar from "./Sidenavbar";
import { WechatOutlined, SearchOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const LetsConnect = () => {
    const [selectedMembers, setSelectedMembers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [filteredMembers, setFilteredMembers] = useState([]);

    const members = ["John", "Emily", "Michael", "Jessica", "Christopher","Manjula","Anusha","Kalyani"];

    const handleSelectMember = (member) => {
        const newSelectedMembers = selectedMembers.includes(member)
            ? selectedMembers.filter((selected) => selected !== member)
            : [...selectedMembers, member];

        setSelectedMembers(newSelectedMembers);
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSendMessage = () => {
        if (selectedMembers.length === 0 || input.trim() === '') return;

        // Update the messages with the user's input
        selectedMembers.forEach((member) => {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: `Message sent to ${member}: ${input}`, isUser: true },
            ]);
        });
        setInput('');
    };

    const handleSearchChange = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchValue(value);

        const filtered = members.filter(member =>
            member.toLowerCase().includes(value)
        );

        setFilteredMembers(filtered);
    };

    return (
        <Layout style={{ backgroundColor: "white", height: "100vh", display: "flex", overflow: "none" }}>
            <Sidenavbar />
            <Layout>
                <Topnavbar />
                <Layout.Content style={{ backgroundColor: "white" }}>
                    <h3 style={{ margin: '10px' }}>Your Space</h3>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Card style={{ width: "55%", margin: '30px', justifyContent: 'center',height:'70vh' }}>
                            <h3>Select Your Homie</h3>
                            <Input
                                placeholder="Search members"
                                prefix={<SearchOutlined />}
                                value={searchValue}
                                onChange={handleSearchChange}
                                style={{ marginBottom: '10px' }}
                            />
                            <ul>
                                {(searchValue ? filteredMembers : members).map((member, index) => (
                                    <li key={index}>
                                        <Checkbox
                                            checked={selectedMembers.includes(member)}
                                            onChange={() => handleSelectMember(member)}
                                        >
                                            {member}
                                        </Checkbox>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                        <Card style={{ width: "35%", margin: '30px', justifyContent: 'center' }}>
                            <h3>Send Message</h3>
                            <TextArea value={input} onChange={handleInputChange} rows={4} />
                            <Button type="primary" onClick={handleSendMessage}>Send your Thoughts</Button>
                            <ul>
                                {messages.map((message, index) => (
                                    <li key={index} style={{ color: message.isUser ? 'blue' : 'green' }}>{message.text}</li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                </Layout.Content>
            </Layout>
        </Layout>
    );
};

export default LetsConnect;
