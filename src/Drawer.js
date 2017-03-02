import React from 'react'


export default (props) => {
  return (
    <div className="Drawer">
      <h3 onClick={props.toggleDrawer}>
        <i className={"fa fa-caret-" + (props.drawerOpen ? "down" : "right")} aria-hidden="true"></i>
        {props.headline}
      </h3>
      <div>
        {React.cloneElement(props.children, { open: props.drawerOpen })}
      </div>
    </div>
  )
}

// {props.drawerOpen ? props.children : null}

// <div style={props.drawerOpen ? {height: props.children.offsetHeight} : {display: "none", height: 0}}>
//   {props.children}
// </div>

// <i className={"fa fa-caret-" + (props.drawerOpen ? "down" : "left")} aria-hidden="true"></i>
