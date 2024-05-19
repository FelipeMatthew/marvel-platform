import Card from "../../components/Card";
import Header from "../../components/Header";
import { hulkCard, spiderManCard, thanosCard, wandaCard } from "./data";
import Carousel from "../../components/Carousel";
import { useState } from "react";
import MenuMobile from "../../components/MenuMobile";

const CharactersPage = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false)  	

  const currentPage = "/characters";

  return (
    <>
      <MenuMobile 
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
        currentPage={currentPage}
      />
      <div>
        <Header 
          currentPage={currentPage}
          setMenuIsVisible={setMenuIsVisible}
        />
        <Carousel>
          <Card {...wandaCard} />
          <Card {...hulkCard} />
          <Card {...spiderManCard} />
          <Card {...thanosCard} />
        </Carousel>
      </div>
    </>
  );
}

export default CharactersPage;