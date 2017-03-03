import React from 'react'

import Video from './Video'

export default (props) => {
  return (
      <dialog onClick={props.closeDialog}>
        <div onClick={(e)=>{e.stopPropagation()}}>
          <div>
            <Video videoId={props.videoId} />
            <div className="caption--large">
              <h4>{props.title}</h4>
              <p>{props.text}</p>
            </div>
          </div>
        </div>
      </dialog>
  )

}

// <i onClick={props.closeDialog} className="fa fa-times" />
