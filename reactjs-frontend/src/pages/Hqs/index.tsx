import { useState } from "react";
import Header from "../../components/Header";
import MenuMobile from "../../components/MenuMobile";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";
import { silverSurfer, thor, wolverine } from "./data";

const HqsPage = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false)  	
  const currentPage = "/hqs";


  return (
    <>
      <MenuMobile 
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
        currentPage={currentPage}
      />
      <div>
        <Header 
          setMenuIsVisible={setMenuIsVisible}
          currentPage={currentPage}
        />
       <Carousel>
          <Card {...thor} />
          <Card {...silverSurfer} />
          <Card {...wolverine} />
        </Carousel>
        
      </div>
    
    </>
  )
}

export default HqsPage;