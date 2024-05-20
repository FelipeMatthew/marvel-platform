import { useState } from "react";
import Header from "../../components/Header";
import MenuMobile from "../../components/MenuMobile";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";
import { america, capitanMarvel, ironMan1, ironMan2, thor } from "./data";

const MoviesPage = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false)  	

  const currentPage = "/movies";

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
          <Card {...ironMan1} />
          <Card {...ironMan2} />
          <Card {...thor} />
          <Card {...america} />
          <Card {...capitanMarvel} />
        </Carousel>

      </div>
    
    </>
  )
}

export default MoviesPage;