import React from 'react'

import Video from './Video'

export default (props) => {
  return (
      <dialog onClick={props.closeDialog}>
        <div onClick={(e)=>{e.stopPropagation()}}>
          <div>
            <i onClick={props.closeDialog} className="fa fa-times" />
            <Video width="560" height="315" videoId={props.videoId} />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
          </div>
        </div>
      </dialog>
  )

}

// const imgs = !props.imgRef ? null : (
//   <div className="DialogImgRow">
//   <img src={process.env.PUBLIC_URL + '/img/dialog/' + props.imgRef + '/1.jpg'} alt="salon" />
//   <img src={process.env.PUBLIC_URL + '/img/dialog/' + props.imgRef + '/2.jpg'} alt="salon" />
//   </div>
// )
// return (
//   <dialog onClick={props.closeDialog}>
//   <div onClick={(e)=>{e.stopPropagation()}}>
//   <div>
//   <i onClick={props.closeDialog} className="fa fa-times" />
//   <h3>{props.title}</h3>
//   <p className="txt_small" style={{textTransform: "none"}}>{props.text}</p>
//   </div>
//   {imgs}
//   </div>
//   </dialog>
// )
