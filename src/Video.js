import React from 'react'

export default (props) => {
  return (
    <div className="Video">
      <iframe src={"https://www.youtube.com/embed/" + props.videoId + "?rel=0&amp;showinfo=0"} frameBorder="0" allowFullScreen></iframe>
    </div>
  )
}

 // width={props.width} height={props.height}
