import React from "react";
import "./Footer.css";
import ShuffleRoundedIcon from "@material-ui/icons/ShuffleRounded";
import RepeatRoundedIcon from "@material-ui/icons/RepeatRounded";
import SkipPreviousRoundedIcon from "@material-ui/icons/SkipPreviousRounded";
import SkipNextRoundedIcon from "@material-ui/icons/SkipNextRounded";
import PlayCircleFilledRoundedIcon from "@material-ui/icons/PlayCircleFilledRounded";
import VolumeUpRoundedIcon from "@material-ui/icons/VolumeUpRounded";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import ClearIcon from '@material-ui/icons/Clear';
function Footer() {


  const clearFooter = () => {
      document.getElementsByClassName('Footer')[0].style.display = 'none'
  }

  return (
    <div className="Footer">
      <ClearIcon onClick={ clearFooter } id='FooterClear' />
      <div className="Footer__head">
        <div className="Footer__songInfo">
          <img src="https://upload.wikimedia.org/wikipedia/en/1/17/DJ_Waley_Babu_-_Cover_Art.jpeg" />
          <div className="songInfo__detail">pro</div>
        </div>
        <div className="songIcon">
          <ShuffleRoundedIcon />
          <SkipPreviousRoundedIcon />
          <PlayCircleFilledRoundedIcon fontSize="large" />
          <SkipNextRoundedIcon />
          <RepeatRoundedIcon />
        </div>
        <div className="rightIcon">
          0:00/3:10
          <VolumeUpRoundedIcon />
        </div>
      </div>
      <div className="Footer__bottom">
        <input type="range" />
        {/* <FiberManualRecordRoundedIcon className='Footer__bottomSpinner' />  */}
      </div>
    </div>
  );
}

export default Footer;
