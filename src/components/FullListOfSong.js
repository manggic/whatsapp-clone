import React from "react";
import "./FullListOfSong.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import GetAppIcon from "@material-ui/icons/GetApp";
import IconButton from "@material-ui/core/IconButton";

function FullListOfSong() {
  return (
    <div class="fullListOfSong">
      <div className="artistInfo">
        <img src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/08/badshah-1596961258.jpg"></img>
        <div className="detail">
          <h1>Badshah</h1>
          <h5>2.2 M followers</h5>
          <p>He is an excellent rapper, musician</p>
        </div>
      </div>
      <div className="fullListBody">
        <div className="artists">
          <h4>Artists</h4>
          <div className="artist">
            <img src="https://assets.mangalorean.com/2018/02/guru-randhawa.jpg" />
            <p>Honey singh</p>
          </div>
          <div className="artist">
            <img src="https://assets.mangalorean.com/2018/02/guru-randhawa.jpg" />
            <p>Honey singh</p>
          </div>
          <div className="artist">
            <img src="https://assets.mangalorean.com/2018/02/guru-randhawa.jpg" />
            <p>Honey singh</p>
          </div>
          <div className="artist">
            <img src="https://assets.mangalorean.com/2018/02/guru-randhawa.jpg" />
            <p>Honey singh</p>
          </div>
          <div className="artist">
            <img src="https://assets.mangalorean.com/2018/02/guru-randhawa.jpg" />
            <p>Honey singh</p>
          </div>
        </div>
        <div className="allSongs">
          <div className="singleSong">
            <div className="singleSongInfo">
              <img src="https://assets.mangalorean.com/2018/02/guru-randhawa.jpg" />
              <div className='songName'>
                <h5>Song name</h5>
                <span>Singer name</span>
              </div>
            </div>
            <div className="icons">
              <GetAppIcon />
              <MoreVertIcon />
            </div>
          </div>
          <div className="singleSong">
            <div className="singleSongInfo">
              <img src="https://assets.mangalorean.com/2018/02/guru-randhawa.jpg" />
              <div>
                <p>Song name</p>
                <p>Singer name</p>
              </div>
            </div>
            <div className="icons">
              <GetAppIcon />
              <MoreVertIcon />
            </div>
          </div>
          <div className="singleSong">
            <div className="singleSongInfo">
              <img src="https://assets.mangalorean.com/2018/02/guru-randhawa.jpg" />
              <div>
                <p>Song name</p>
                <p>Singer name</p>
              </div>
            </div>
            <div className="icons">
              <GetAppIcon />
              <MoreVertIcon />
            </div>
          </div>
          <div className="singleSong">
            <div className="singleSongInfo">
              <img src="https://assets.mangalorean.com/2018/02/guru-randhawa.jpg" />
              <div>
                <p>Song name</p>
                <p>Singer name</p>
              </div>
            </div>
            <div className="icons">
              <GetAppIcon />
              <MoreVertIcon />
            </div>
          </div>
          <div className="singleSong">
            <div className="singleSongInfo">
              <img src="https://assets.mangalorean.com/2018/02/guru-randhawa.jpg" />
              <div>
                <p>Song name</p>
                <p>Singer name</p>
              </div>
            </div>
            <div className="icons">
              <GetAppIcon />
              <MoreVertIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullListOfSong;
