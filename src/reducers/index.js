import { combineReducers } from "redux"

const songReducer = ()=>{
  return [
    {title: "Clint eastwood", duration: "4:49" },
    {title: "Can't stop", duration: "4:38"},
    {title: "Stolen dance", duration: "5:14"},
    {title:"Back in black", duration: "4:14"}
  ];
};

const selectedSongReducer = (selectedSong=null, action)=>{
  if (action.type === "SONG_SELECTED"){
    return action.payload;
  }
  return selectedSong
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
})