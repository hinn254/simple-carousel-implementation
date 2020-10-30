import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import "./App.css";
import image1 from "./images/airbnb.png";
import image2 from "./images/conn.png";
import image3 from "./images/covid_tracker.png";

function App() {
  const [selected, setSelected] = useState(0);
  const [myTime, setMyTime] = useState(new Date());
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timeIt = setInterval(() => setMyTime(new Date()), 1000);
    console.log(timeIt);
    return () => clearInterval(timeIt);
  }, [myTime]);

  const images = [image1, image2, image3];

  console.log(images);
  console.log(typeof images);

  // Modal toggle
  const toggleModal = () => setShowModal(!showModal);
  return (
    <div className="App">
      <p>{myTime.getSeconds()}</p>
      <div className="main">
        <img src={images[selected]} alt="images of projects" />
      </div>
      {showModal ? (
        <Modal>
          <h1>Would you like to make more modals</h1>
          <button onClick={() => alert("That is awesome")}>Yes</button>
        </Modal>
      ) : null}
      <button onClick={() => toggleModal()}>Pop Up</button>
      <div className="sub">
        {images.map((image, index) => (
          <div key={index} className="showcase">
            <img
              onClick={(e) => setSelected(+e.target.dataset.columns)}
              data-columns={index}
              src={image}
              alt="images of projects"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
