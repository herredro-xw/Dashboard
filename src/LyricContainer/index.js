import React, { useState, useEffect }  from "react";
// import regeneratorRuntime from "regenerator-runtime";

import './LyricContainer.css'

let Lyrics = (props) => {
  let [song, setSong] = useState('');
  let [artist, setArtist] = useState('');
  let [url, setUrl] = useState('');
  let [lyrics, setLyrics] = useState('');



  useEffect(() => {
    fetch(url)
      .then(result => result.json())
      .then(result => setLyrics(result.lyrics))
      .catch(error => console.log("Warn:", error));
  }, [url]);

  let inputForm = (
      <form onSubmit={(event) => {
          event.preventDefault();
          setSong(song);
          setArtist(artist);
          setUrl(`https://api.lyrics.ovh/v1/${artist}/${song}`);}}>
        <h3>Search for Lyrics</h3>
        Artist:
        <input
          type="text"
          value={artist}
          onChange={event => setArtist(event.target.value)}
        />
        Title:
        <input
          type="text"
          value={song}
          onChange={event => setSong(event.target.value)}
        />
        <input type="submit" value="Sing it!" />
      </form>)

  if (lyrics) {
    return (
      <>
        {inputForm}
        <p class='lyrics'>{lyrics}</p>
        <button onClick={() => {
          setLyrics('')
          setUrl('')
          setSong('')
          setArtist('')
        }}>Clear</button>
      </>
    );
  } else if (!lyrics) {
    return (inputForm);
  } else {
    return ("!!!!!!!!! I'm somehow broken !!!!!!!!!")
  }

}

export default Lyrics
