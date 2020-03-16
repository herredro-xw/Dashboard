import React, { useState, useEffect }  from "react";
import { Spinner } from 'react-bootstrap';
import regeneratorRuntime from "regenerator-runtime";

/*
 *
 *
 * HAVE A LOOK AT https://react-leaflet.js.org/
 *
 *
 */


import './LyricContainer.css'

let LyricContainer = (props) => {

  return(
    // Show only when props.show == true
    <div id="lyrics">
      <form id="formm">
        <h3>Search for Lyrics</h3>
        Artist: <input type="text" id="inputartist" />
        Title: <input type="text" id="inputtitle" />
        <div id="lyricsOut">SUBMIT</div>
      </form>
    </div>
  )
}

export let LyricForm = (props) => {
  const [artist,setArtist] = useState('');
  const [song,setSong] = useState('');
  const [lyrics, setLyrics] = useState('');

  const handleChangeArtist = e => {
    setArtist(e.target.value)
  }
  const handleChangeSong = e => {
    setSong(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()

  }

  async function fetchLyrics (artist, song) {
      let response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
      let data = await response.json();
      console.log('Lyrics: ', data.lyrics)
      setLyrics(artist, song)
  }

  useEffect(() => {

  }, [])

  return(
    // Show only when props.show == true

    <div id="lyrics">
      {lyrics}
      <form id="for" onSubmit={handleSubmit}>
        <h3>Search for Lyrics</h3>
        Artist:
        <input
          type="text"
          onChange={handleChangeArtist}
        />

        Title:
        <input
          type="text"
          onChange={handleChangeSong}
        />

        <input type="submit" value="Get Lyrics" />

      </form>
    </div>
  )
}

export default LyricContainer;
