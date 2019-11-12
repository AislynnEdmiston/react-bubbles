import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [refresh, setRefresh] = useState(false)
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  
  
  useEffect(() => {
    axiosWithAuth().get('http://localhost:5000/api/colors')
    .then(res => {
      console.log(res.data)
      if(localStorage.getItem('token')){
        setColorList(
          res.data
        )
      }
    })
    .catch(err => console.log(err))
  }, [refresh])

  const refreshColor = () => {
    setRefresh(!refresh)
  }

  return (
    <>
      <ColorList colors={colorList} refresh={refreshColor} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
