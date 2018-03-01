import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Dropdown, Icon, Image} from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless style={{
     border: 'none', boxShadow:'none',

    }} className="topMenu">
        <Container >
        <Image src="http://murphyshawaii.com/media/2014/04/murphyshawaii.png"/>

        <Menu.Item position="right" fitted>Home</Menu.Item>
          <Dropdown item text="About Us" icon ="dropdown">
            <Dropdown.Menu>
              <Dropdown.Item>My Cart is currently empty.</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        <Menu.Item fitted>St. Patrick's Day</Menu.Item>
        <Dropdown item text="Menus" icon ="dropdown">
          <Dropdown.Menu>
            <Dropdown.Item>My Cart is currently empty.</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item >Bar</Menu.Item>
          <Menu.Item fitted><Icon name = "search" /></Menu.Item>
    </Container>
    </Menu>
  )
  }
}

class Middle extends React.Component{
  render(){
    return(
        <div className='murphys-background'>

        </div>
    )
  }
}


class Murphys extends React.Component {
  render() {
    return (
      <div>
        <TopMenu/>
        <Middle/>
      </div>
  );
  }
}

ReactDOM.render(<Murphys/>, document.getElementById('root'));
