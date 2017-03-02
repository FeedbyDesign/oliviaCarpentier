import React from 'react'

export default (props) => {
  return (
    <div className="Drawer">
      <h3 onClick={props.toggleDrawer}>
        <i className={"fa fa-caret-" + (props.drawerOpen ? "down" : "right")} aria-hidden="true"></i>
        {props.headline}
      </h3>
      {props.drawerOpen ? props.children : null}
    </div>
  )
}
// <i className={"fa fa-caret-" + (props.drawerOpen ? "down" : "left")} aria-hidden="true"></i>
