import React, { Component, Fragment } from 'react';
import {Link, withRouter} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container
  } from 'reactstrap';

 class AppNavbar extends Component {

    state = {
        isOpen: false
      };

      toggle = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      };

      logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
      }

    render() {
        const loginRegLink = (
            <Fragment>
                <NavItem>
                    <Link to="/register" className="nav-link">Register</Link>
                </NavItem>
                <NavItem>
                    <Link to="/login" className="nav-link">Login</Link>
                </NavItem>
          </Fragment>
            
        )
        const userLink = (
            <Fragment>
                <NavItem>
                    <Link to="/profile" className="nav-link">Profile</Link>
                </NavItem>
                <NavItem>
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                    Logout
                    </a>
                </NavItem>
            </Fragment>
        )
        return (
            <Navbar color='dark' dark expand='sm' className='mb-5'>
            <Container>
            <NavbarBrand href='/'>Profile</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
            {localStorage.usertoken ? userLink : loginRegLink}
              </Nav>
              </Collapse>
          </Container>
        </Navbar> 
        )
    }
}

export default withRouter(AppNavbar);
