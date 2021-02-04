import React from "react";
import "./SingleContainer.css";
import PlayCircleFilledRoundedIcon from "@material-ui/icons/PlayCircleFilledRounded";

function SingleContainer({ title, value }) {
  const showFooter = () => {
    document.getElementsByClassName("Footer")[0].style.display = "block";
  };

  const showToPlay = () => {
    // document.getElementsByClassName('PlayIcon')[0].style.display ='block'
    document
      .getElementsByClassName("PlayIcon")[0]
      .classList.toggle("showToPlay");
  };

  return (
    <div className="SingleContainer">
      <h4>{title}</h4>
      <div className="songInfo">
        {value.map((song) => (
          <div  className="songCard">
            <PlayCircleFilledRoundedIcon onClick={showFooter } className="PlayIcon" />
              <img src={song.songPic} />
              <p>{song.songName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleContainer;
