import React from 'react';

import ListItems from '../components/ListItems';
import {SideBar} from "../components/SideBar.jsx";

export const Home = () => {

  return (
    <div className='container mx-auto flex'>
      <SideBar/>
      <ListItems />
    </div>
  );
};



