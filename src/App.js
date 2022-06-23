import React from 'react';
import Header from "./components/Header/Header";
import ServicesGallery from "./components/ServicesGallery/ServicesGallery";

import {ITEM_CHOOSE, ITEM_DELETE} from "./redux/servicesGallerySlice";
import {useDispatch, useSelector} from "react-redux";

import SOFA from "./images/SOFA.png";
import KeyBoard from "./images/KeyBoard.png";
import Work_Media from "./images/Work_Media.png";
import DDDone from "./images/DDDone.png";
import Abstract from "./images/Abstract.png";
import HandP from "./images/HandP.png";
import Architect from "./images/Architect.png";
import CalC from "./images/CalC.png";
import Sport from "./images/Sport.png";

function App() {

  const servicesCopy = [
      {imgSrc: SOFA, name: 'SOFA 2', category: 'Design', id: 10, chosen: false},
      {imgSrc: KeyBoard, name: 'KeyBoard 2', category: 'Branding', id: 11, chosen: false},
      {imgSrc: Work_Media, name: 'Work Media 2', category: 'Illustration', id: 12, chosen: false},
      {imgSrc: DDDone, name: 'DDDone 2', category: 'Motion', id: 13, chosen: false},
      {imgSrc: Abstract, name: 'Abstract 2', category: 'Design', id: 14, chosen: false},
      {imgSrc: HandP, name: 'HandP 2', category: 'Branding', id: 15, chosen: false},
      {imgSrc: Architect, name: 'Architect 2', category: 'Motion', id: 16, chosen: false},
      {imgSrc: CalC, name: 'CalC 2', category: 'Design', id: 17, chosen: false},
      {imgSrc: Sport, name: 'Sport 2', category: 'Branding', id: 18, chosen: false}
  ];

    const dispatch = useDispatch();
    const services = useSelector(state => state.services);

    // console.log(services)

    const handleItemClick = id => {
        if(window.innerWidth > 1040) {
            dispatch(ITEM_CHOOSE(id));
        }
    }

    const handleDeleteItem = () => {
        dispatch(ITEM_DELETE());
    }

  const handleKeyDown = e => {
      if(e.key === 'Delete') {
          handleDeleteItem()
      }
  }

  return (
    <div className="App">
      <Header/>
      <ServicesGallery
          services={services}
          servicesCopy={servicesCopy}
          handleItemClick={handleItemClick}
          onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default App;
