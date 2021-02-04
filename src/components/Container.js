

import React, { useState } from 'react'
import SingleContainer from './SingleContainer'
import './Container.css'


function Container() {

    const [topSongs, setTopSongs] = useState({
        'Top 10 Trending': [{ songName: 'haye mera dil', ArtistName: 'Alfaaz', songPic :'https://i.ytimg.com/vi/RDYLaiMk2Bs/maxresdefault.jpg' },
        { songName: 'haye mera dil', ArtistName: 'Alfaaz', songPic :'https://i.ytimg.com/vi/RDYLaiMk2Bs/maxresdefault.jpg' },
        { songName: 'haye mera dil', ArtistName: 'Alfaaz', songPic :'https://i.ytimg.com/vi/RDYLaiMk2Bs/maxresdefault.jpg' }],
        'Top 10 Hindi': [{ songName: 'haye mera dil', ArtistName: 'Alfaaz', songPic :'https://i.ytimg.com/vi/RDYLaiMk2Bs/maxresdefault.jpg' },
        { songName: 'haye mera dil', ArtistName: 'Alfaaz', songPic :'https://i.ytimg.com/vi/RDYLaiMk2Bs/maxresdefault.jpg' },
        { songName: 'haye mera dil', ArtistName: 'Alfaaz', songPic :'https://i.ytimg.com/vi/RDYLaiMk2Bs/maxresdefault.jpg' }],
        "Top 10 English": [{ songName: 'haye mera dil', ArtistName: 'Alfaaz', songPic :'https://i.ytimg.com/vi/RDYLaiMk2Bs/maxresdefault.jpg' },
        { songName: 'haye mera dil', ArtistName: 'Alfaaz', songPic :'https://i.ytimg.com/vi/RDYLaiMk2Bs/maxresdefault.jpg' },
          {  songName: 'haye mera dil', ArtistName: 'Alfaaz', songPic : 'https://i.ytimg.com/vi/RDYLaiMk2Bs/maxresdefault.jpg'}]
    })
   

    return (
        <div className='Container'>
            {  Object.keys(topSongs).map(title => <SingleContainer title={ title} value={ topSongs[title] }  />  ) }
        </div>
    )
}

export default Container

