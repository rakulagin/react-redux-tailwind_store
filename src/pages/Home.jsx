import React from 'react';

import ListItems from '../components/ListItems';
import {SideBar} from "../components/SideBar.jsx";
import {Card} from '../components/Card';

export const Home = () => {

  return (
    <div className='container mx-auto flex'>
      <Card/>
      <SideBar/>
      <ListItems/>
    </div>
  );
};



