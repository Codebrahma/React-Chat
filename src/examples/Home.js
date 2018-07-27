import React, { Component } from 'react'
import { userData, mySelf } from '../data'
import DemoPage from './demoPage';

const Home = () => (
  <DemoPage userData={userData} myData={mySelf}/>
)

export default Home
