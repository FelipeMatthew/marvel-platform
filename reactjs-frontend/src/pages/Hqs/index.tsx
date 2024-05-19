import { useState } from "react";
import Header from "../../components/Header";
import MenuMobile from "../../components/MenuMobile";

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

        <h1>Hqs Page</h1>

      </div>
    
    </>
  )
}

export default HqsPage;