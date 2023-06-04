import { useState, useEffect } from "react";
import { sculptureList } from "./Data";
import Clock from "./Clock";
import './CSS.css';

function Gallery() {
  let [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleMoreClick() {
    setShowMore(!showMore);
  }
  function handleNextClick() {
    setIndex(index + 1);
  }
  let sculpture = sculptureList[index];
  return (
    <div className="atividades">
      <h1 className="atv"> Gallery </h1>
      <div>
        <button onClick={handleNextClick}>Next</button>
        <h2>
          <i>{sculpture.name}</i> by {sculpture.artist}
        </h2>
        <h3>
          {index + 1} of {sculptureList.length}
        </h3>
        <img src={sculpture.url} alt={sculpture.alt} />
        <button onClick={handleMoreClick}>
          {showMore ? "Hide" : "Show"} details
        </button>
        <p>{showMore && sculpture.description}</p>
      </div>
    </div>
  );
}

function GalleryAula5() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Gallery />
      <Gallery />
      <Clock time={time.toLocaleTimeString()} />
    </div>
  );
}

export default Gallery;