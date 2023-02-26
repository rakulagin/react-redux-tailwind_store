import React from 'react';
import {useSelector} from "react-redux";

import ListItems from '../components/ListItems';
import {SideBar} from "../components/SideBar.jsx";
import {Card} from '../components/Card';

export const Home = () => {
  const {cardItems} = useSelector(state => state.cardItems)

  return (
    <div className='container mx-auto flex'>
      {cardItems.isVisible && <Card/>}
      <SideBar/>
      <ListItems/>
    </div>
  );
};



