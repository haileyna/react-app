import './App.css';
import { Subject } from './Subject';
import { TOC } from './TOC';
import { Content } from './Content';
import { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: {
        title: 'WEB',
        sub: 'World Wide Web'
      },
      contents: [
        { id: 1, title: 'HTML2', desc: 'HTML is information.'},
        { id: 2, title: 'CSS2', desc: 'CSS is for design.'},
        { id: 3, title: 'JavaScript2', desc: 'JavaScript is for interactive.' }
      ],
      mode: 'html',
      welcome: {title: 'welcome', desc: 'Hello, React'}
    }
  }

  render() {

    let title, desc; 

    if(this.state.mode === 'welcome'){
      title = this.state.welcome.title;
      desc = this.state.welcome.desc;
    }
    else if(this.state.mode === 'html'){
      title = this.state.contents[0].title;
      desc = this.state.contents[0].desc;
    }
    

    return (  //JSX
      <div className="App">
        
        <table border='1'>
        </table>
        
        <Subject 
          
          title = {this.state.subject.title}
          sub = {this.state.subject.sub}>
        </Subject>

        <TOC onChangePage = {
          (value)=>{this.setState({mode:value})}}
          contents={this.state.contents}>
        
        </TOC>
        
        <Content title={title}
          desc={desc}>
        </Content>

      </div>
    );
  }
}


export { App };
