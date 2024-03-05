
import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { Calendar, Layout, message } from 'antd';
import "./CalendarView.css";
import axios from "axios";
import Sidenavbar from "./Sidenavbar";
import Topnavbar from './Topnavbar';


const { Header, Content } = Layout;

const CalendarView = () => {
 
  const [value, setValue] = useState(dayjs());
  const [crawlingDates, setCrawlingDates] = useState([]);
  const [paydates, setPaydates] = useState([]);
  const [processdate, setProcessdates] = useState([]);


  const getAllCrawlingDates = async () => {
    try {
      // Generate a list of crawling dates
      const dates = [];
      for (let i = 0; i < 10; i++) {
        dates.push(dayjs().subtract(i, 'day').format('YYYY-MM-DD'));
      }
      setCrawlingDates(dates);
    } catch (error) {
      message.error("Unable to load data...");
    }
  };
  
  const getAllPaygDates = async () => {
    try {
      // Generate a list of pay dates
      const dates = [];
      for (let i = 0; i < 10; i++) {
        dates.push(dayjs().subtract(i, 'day').format('YYYY-MM-DD'));
      }
      setPaydates(dates);
    } catch (error) {
      message.error("Unable to load data...");
    }
  };
  
  const getAllProcessgDates = async () => {
    try {
      // Generate a list of processing dates
      const dates = [];
      for (let i = 0; i < 10; i++) {
        dates.push(dayjs().subtract(i, 'day').format('DD-MM-YYYY'));
      }
      setProcessdates(dates);
    } catch (error) {
      message.error("Unable to load data...");
    }
  };
  



  const onSelect = (newValue) => {
    setValue(newValue);
  };

  const onPanelChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    getAllCrawlingDates();
    getAllPaygDates()
    getAllProcessgDates()
    // Hide the year dropdown
    const yearDropdowns = document.querySelectorAll('.ant-picker-calendar-year-select');
    if (yearDropdowns) {

      const radioGroup = document.querySelector('.ant-radio-group-outline');
      if (radioGroup) {
        radioGroup.style.display = 'none';
      }
    }

  }, []);

  return (
    <>
      <Layout style={{  height: "100vh", display: "flex", overflow: "hidden" }} >
        <Sidenavbar />
        <Layout style={{ backgroundColor: "white" }}>
          <Header className="activity-header-class"><Topnavbar /></Header>
          <Content style={{ height: "100%", overflow: "auto" }}>
            <div className="pageview">
              <Calendar
                value={value}
                onSelect={onSelect}
                onPanelChange={onPanelChange}
                style={{ height: "70%" }}
                cellRender={(dateValue) => {
                  const formattedDate = dateValue.format('YYYY-MM-DD');
                  const formattedDate1 = dateValue.format('DD-MM-YYYY');
                  const isCrawlingDate = crawlingDates.includes(formattedDate);
                  const isPaydate = paydates.includes(formattedDate);
                  const isProcessdate = processdate.includes(formattedDate1);
                  return (
                    <>

                      <div style={{ color: isCrawlingDate ? 'black' : '' }}>
                        {isCrawlingDate && (
                          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                            <li style={{ color: 'black', fontWeight: 500 }}>
                              <span style={{ color: 'red', fontWeight: 'bold' }}>•</span> Birthday
                            </li>
                          </ul>
                        )}
                      </div>

                      <div style={{ color: isPaydate ? 'black' : '', }}>
                        {isPaydate && (
                          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                            <li style={{ color: 'black', fontWeight: 500 }}>
                              <span style={{ color: 'orange', fontWeight: 'bolder' }}>•</span>  Anniverasy
                            </li>
                          </ul>
                        )}
                      </div>
                      <div style={{ color: isProcessdate ? 'black' : '', }}>
                        {isProcessdate && (
                          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                            <li style={{ color: 'black', fontWeight: 500 }}>
                              <span style={{ color: 'green', fontWeight: 'bolder' }}>•</span> holiday
                            </li>
                          </ul>
                        )}
                      </div>
                    </>
                  );
                }}
              />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default CalendarView;