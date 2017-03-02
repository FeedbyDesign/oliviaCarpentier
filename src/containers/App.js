import React, { Component } from 'react'
require('es6-promise').polyfill();
require('isomorphic-fetch');

import Header from '../Header'
import About from '../About'
import Portfolio from '../Portfolio'
import Drawer from '../Drawer'
import Footer from '../Footer'
import Dialog from '../Dialog'
import Contact from '../Contact'

const sheetAPIKey = 'AIzaSyDEDtipgCsH_u-qCdMDqoD61iABhScggKc'
const sheet='19Py2SBSoyntHDcMKanAsV_g81G6ZQ1KRBUfqPvISNS0'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      dialogOpen: false,
      dialogVideo: '',
      dialogTitle: '',
      dialogText: '',
      aboutDrawerOpen: true,
      aboutHeight: 0,
      portfolioDrawerOpen: true,
      portfolioHeight: 0
    }
    // this.updateDimensions = this.updateDimensions.bind(this)
  }
  componentDidMount() {
    // Listen for resize to set heights
    // window.addEventListener("resize", this.updateDimensions);

    // Fetch the spreadsheet of videos to display in Portfolio
    const url='https://sheets.googleapis.com/v4/spreadsheets/'+sheet+'/values/1?key='+sheetAPIKey
    fetch(url)
    .then((res) => {
      if (res.status >= 400) {
        throw new Error("Bad response from server")
      }
      return res.json()
    })
    .then((json) => {
      // Parse the array Response as an array of objects.
      // First line in the google sheet gives the keys of each object
      let output = []
      output.length = json.values.length -1
      for (let i=1; i<json.values.length; i++) { // for each line of the dox except the first one
        output[i-1] = {}
        for (let j=0; j<json.values[0].length; j++) { // for each column in each row
          output[i-1][json.values[0][j]] = json.values[i][j]
        }
      }
      this.setState({videos: output})
    })
  }
  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.updateDimensions);
  // }
  render() {
    return (
      <div id="App">
        {this.state.dialogOpen ? <Dialog videoId={this.state.dialogVideo} title={this.state.dialogTitle} text={this.state.dialogText} closeDialog={()=>this.toggleDialog()} /> : null}
        <Contact />
        <Header />
        <Drawer headline="à propos" drawerOpen={this.state.aboutDrawerOpen} toggleDrawer={()=>this.toggleAboutDrawer()}>
          <About />
        </Drawer>
        <Drawer headline="Portfolio" drawerOpen={this.state.portfolioDrawerOpen} toggleDrawer={()=>this.togglePortfolioDrawer()}>
          <Portfolio videos={this.state.videos} openDialog={(videoId, title, text)=>this.toggleDialog(videoId, title, text)} />
        </Drawer>
        <Footer />
      </div>
    );
  }

  // <Drawer childHeight={this.state.aboutHeight} headline="à propos" drawerOpen={this.state.aboutDrawerOpen} toggleDrawer={()=>this.toggleAboutDrawer()}>
  //   <About />
  // </Drawer>
  // <Drawer childHeight={this.state.portfolioHeight} headline="Portfolio" drawerOpen={this.state.portfolioDrawerOpen} toggleDrawer={()=>this.togglePortfolioDrawer()}>
  //   <Portfolio videos={this.state.videos} openDialog={(videoId, title, text)=>this.toggleDialog(videoId, title, text)} />
  // </Drawer>

  toggleDialog(videoId='', title='', text='') {
    this.setState({dialogOpen: !this.state.dialogOpen, dialogVideo: videoId, dialogTitle: title, dialogText: text})
  }
  toggleAboutDrawer() {
    this.setState({aboutDrawerOpen: !this.state.aboutDrawerOpen})
  }
  togglePortfolioDrawer() {
    this.setState({portfolioDrawerOpen: !this.state.portfolioDrawerOpen})
  }
  // updateDimensions() {
  //   this.setState({
  //     aboutHeight: document.getElementById("About") && document.getElementById("About").offsetHeight,
  //     portfolioHeight: document.getElementById("Portfolio") && document.getElementById("Portfolio").offsetHeight
  //   })
  // }

}

export default App;
