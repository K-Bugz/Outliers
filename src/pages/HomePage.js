import React from "react";
import '../App.css';
import Modal from "../components/modals/Modal";
import useModal from "../components/modals/useModal";
import TopBanner from '../components/TopBanner';
import Footer from "../components/Footer";
// import styled from "styled-components";

function HomePage() {

    const {isShowing, toggle} = useModal();
    // const [openModal, setOpenModal] = useState(false);
      
    return (
        <div>
            <TopBanner/>
            <button className="button-default" onClick={toggle}>Show Modal</button>
            <Modal isShowing={isShowing} hide={toggle} />
            <Footer/>
        </div>
    )
}

export default HomePage;