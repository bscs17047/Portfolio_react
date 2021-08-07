import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ReactNativeCard from './ReactNativeCards'
import ReactCard from './ReactCards'
import ExpoCard from './ExpoCards'
import './portfolio.css'

export default function Portfolio() {
    return (
        <div id='portfolio'>
            <Tabs class='nav-tabs'
                defaultActiveKey="React"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
                >
                <Tab eventKey="React" title="React">
                        <ReactCard/>
                </Tab>
                <Tab eventKey="React Native" title="React Native">
                        <ReactNativeCard/>
                </Tab>
                <Tab eventKey="Expo" title="Expo" >
                        <ExpoCard/>
                </Tab>
                </Tabs>
        </div>
    )
}
