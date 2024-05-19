import { useState } from "react";
import Header from "../../components/Header";
import MenuMobile from "../../components/MenuMobile";
import CustomModal from './../../components/Modal/index';

const HqsPage = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false)  	
  const currentPage = "/hqs";

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <CustomModal 
          open={open}
          onClose={handleClose}
        />
        
      </div>
    
    </>
  )
}

export default HqsPage;