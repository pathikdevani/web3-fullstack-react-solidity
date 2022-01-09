import React from 'react';
import { Tabs } from 'antd';
import { useNavigate, useLocation, Route, Routes } from "react-router-dom";

import './App.css';
import EmployeePage from './pages/employee.page';
import MyNFTPage from './pages/my.nft.page';

const { TabPane } = Tabs;


const pages = [
  {
    title: 'Employee - Contract',
    component: EmployeePage,
    path: '/employee'
  },
  {
    title: 'MyNFT - Contract',
    component: MyNFTPage,
    path: '/my-nft'
  },
]

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="App">
      <header className="App-header">
        <Tabs 
        activeKey={location.pathname}
        onChange={(key) => {
          const page = pages.find(page => page.path === key);
          if(page) {
            navigate(page.path);
          }
        }} type="card">
          {pages.map((page) => {
            return (
              <TabPane tab={page.title} key={page.path}>
                <Routes>
                  <Route path={page.path} element={<page.component />} />
                </Routes>
              </TabPane>
            );
          })}
        </Tabs>
      </header>
    </div>
  );
}

export default App;
