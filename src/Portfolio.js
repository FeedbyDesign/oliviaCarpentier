import React from 'react'

// import Thumbnail from './Thumbnail'

export default (props) => {
  return (
    <div id="Portfolio">
      {
        props.videos.map((video, id) => {
          return (
            <div key={id}>
              <div className="layer"></div>
              <a onClick={()=>props.openDialog(video.id, video.title, video.text)}>
                <img
                  src={"http://img.youtube.com/vi/" + video.id + "/hqdefault.jpg"}
                  alt={video.title}
                  />
                <i className="fa fa-caret-right fa-4x" aria-hidden="true"></i>
              </a>
              <div className="caption">
                <h5>{video.title}</h5>
                <h6>{video.text}</h6>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
