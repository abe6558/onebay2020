import React, { Component, Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import './NavBar.css';

class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  
    render() {
  
      const authLinks = (
        <Fragment>
          <NavItem>
            <span className='navbar-text mr-3'>
            </span>
          </NavItem>
          <NavItem>
       
          </NavItem>
        </Fragment>
      );
  
      const guestLinks = (
        <Fragment>
          <NavItem>
         
          </NavItem>
          <NavItem>
          
          </NavItem>
        </Fragment>
      );
  
      return (
        <div className="navigation">
          <Navbar color="light" light expand="md">
          <Container>
          <NavbarBrand href="/">
          <span className='navbar-title'>
            #Peace_Makers
            </span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="about"href="/components/">Beliefs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="location" href="https://github.com/reactstrap/reactstrap">Location</NavLink>
              </NavItem>
              <NavItem>
              <NavLink className="location" href="https://github.com/reactstrap/reactstrap">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </Container>
          </Navbar>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
         <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
         <ModalFooter>
           <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
           <Button color="secondary" onClick={this.toggle}>Cancel</Button>
         </ModalFooter>
       </Modal>
        </div>
      );
    }
  }

export default AppNavbar;