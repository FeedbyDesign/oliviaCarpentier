import React from 'react'

export default (props) => {
  return (
    <div id="Portfolio" className={props.open ? "DrawerContent--open" : "DrawerContent--closed"}>
      {
        props.videos.map((video, id) => {
          return (
            <div key={id}>
              <a onClick={()=>props.openDialog(video.id, video.title, video.text)}>
                <div className="layer">
                  <i className="fa fa-caret-right fa-4x" aria-hidden="true"></i>
                </div>
                <img
                  src={"http://img.youtube.com/vi/" + video.id + "/hqdefault.jpg"}
                  alt={video.title}
                  />
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
