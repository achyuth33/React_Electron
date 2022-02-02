import { Navbar, Button, Alignment } from '@blueprintjs/core';
import {Link} from 'react-router-dom';
import '../App.css';

function NavBar() {
  return (

    <><Navbar className="bp3-dark">
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Blueprint</Navbar.Heading>
        <Navbar.Divider />
        <Link style= {{textDecoration:"none"}} to="/"><Button className="bp3-minimal" icon="home">
      Home
    </Button></Link>
    <Link style= {{textDecoration:"none"}} to="/files">
    <Button className="bp3-minimal" icon="document">
      Files
    </Button></Link>
      </Navbar.Group>
    </Navbar>
     </>
  );
}

export default NavBar;
