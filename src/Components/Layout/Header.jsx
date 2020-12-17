import React from "react";
import {
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Popover,
  PopoverBody,
  ListGroup,
  ListGroupItem,
  Button,
  UncontrolledPopover,
} from "reactstrap";
import bn from "../../utils/bemnames";
import routes from "../../Config/routes";
import {
  MdExitToApp,
  MdHelp,
  MdInsertChart,
  MdPersonPin,
  MdSettingsApplications,
  MdPanoramaFishEye,
  MdQuestionAnswer,
  MdPageview,
  MdPerson,
  MdReorder,
  MdGroupAdd,
} from "react-icons/md";
import { Link } from "react-router-dom";
import Avatar from "../Avatar";
import UserCard from "../Card/UserCard";

import { getUser, logout } from "../../services/authService";

const bem = bn.create("header");

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      isMobilePopoverOpen: false,
      isAboutPopoverOpen: false,
      isOpenUserCardPopover: false,
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }
  updatePredicate() {
    this.setState({ isMobile: window.innerWidth > 600 });
  }
  toggleMobilePopover = () => {
    this.setState({
      isMobilePopoverOpen: !this.state.isMobilePopoverOpen,
    });
  };
  toggleAboutPopover = () => {
    this.setState({
      isAboutPopoverOpen: !this.state.isAboutPopoverOpen,
    });
  };
  toggleUserCardPopover = () => {
    this.setState({
      isOpenUserCardPopover: !this.state.isOpenUserCardPopover,
      isOpenSearchCardPopover: false,
    });
  };

  logout = () => {
    logout();
  };

  render() {
    const isMobile = this.state.isMobile;

    return (
      <>
        <Navbar light expand className="bg-primary text-light">
          <Link
            to={{ pathname: routes.homePage }}
            style={{ textDecoration: "none" }}
          >
            <Nav navbar>LOGO </Nav>
          </Link>

          {isMobile && (
            <Nav navbar className="ml-2">
              CHRS
            </Nav>
          )}
          {isMobile ? (
            <Nav navbar className={bem.e("nav-right")}>
              <NavItem>
                <Popover
                  trigger="legacy"
                  placement="bottom"
                  isOpen={this.state.isAboutPopoverOpen}
                  toggle={this.toggleAboutPopover}
                  target="AboutPopover"
                  className="p-5 border"
                >
                  <PopoverBody className="p-2 border-light ">
                    <ListGroup flush>
                      <ListGroupItem
                        tag="button"
                        action
                        className="border-light"
                      >
                        <MdPerson className="mr-3" /> {"  "} About Us
                      </ListGroupItem>
                      <ListGroupItem
                        tag="button"
                        action
                        className="border-light"
                      >
                        <MdHelp className="mr-3" /> How CHRS Works
                      </ListGroupItem>

                      <ListGroupItem
                        tag="button"
                        action
                        className="border-light"
                      >
                        <MdPanoramaFishEye className="mr-3" /> Browse CHRS
                      </ListGroupItem>
                      <ListGroupItem
                        tag="button"
                        action
                        className="border-light"
                      >
                        <MdQuestionAnswer className="mr-3" /> FAQ
                      </ListGroupItem>
                      <ListGroupItem
                        tag="button"
                        action
                        className="border-light"
                      >
                        <MdPageview className="mr-3" /> Terms Of Service
                      </ListGroupItem>
                    </ListGroup>
                  </PopoverBody>
                </Popover>

                <NavLink onMouseEnter={this.toggleAboutPopover}>
                  <MdHelp
                    className="text-light mt-1"
                    size={25}
                    id="AboutPopover"
                  />
                </NavLink>
              </NavItem>
              {getUser() && (
                <NavItem>
                  <NavLink>
                    <Link to={{ pathname: routes.addHotels }}>
                      <Button className="border">Add Your Hotel</Button>
                    </Link>
                  </NavLink>
                </NavItem>
              )}
              {!getUser() && (
                <>
                  <NavItem>
                    <NavLink>
                      <Link to={{ pathname: routes.signUp }}>
                        <Button color="light">SignUp</Button>
                      </Link>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      <Link to={{ pathname: routes.signIn }}>
                        <Button color="light">SignIn</Button>
                      </Link>
                    </NavLink>
                  </NavItem>
                </>
              )}
              <NavItem>
                <NavLink id="Popover2">
                  <>
                    <div onClick={this.toggleUserCardPopover}>
                      <Avatar
                        size={28}
                        src={
                          this.props.currentUser &&
                          this.props.currentUser.avatar
                        }
                      />
                      <UncontrolledPopover
                        trigger="focus"
                        placement="bottom-start"
                        isOpen={this.state.isOpenUserCardPopover}
                        toggle={this.toggleUserCardPopover}
                        target="Popover2"
                        className="p-0 border-0 "
                        style={{ minWidth: 250 }}
                      >
                        <PopoverBody className="p-0 border-light userPopover">
                          <UserCard
                            title={
                              this.props.currentUser
                                ? this.props.currentUser.name
                                : "User Name"
                            }
                            subtitle={
                              this.props.currentUser
                                ? this.props.currentUser.email
                                : "User Email"
                            }
                            text={
                              this.props.currentUser
                                ? this.props.currentUser.location
                                : "User Location"
                            }
                            className="border-light"
                          >
                            <ListGroup flush>
                              <Link to={{ pathname: routes.profile }}>
                                <ListGroupItem
                                  tag="button"
                                  action
                                  className="border-light"
                                >
                                  <MdPersonPin /> Profile
                                </ListGroupItem>
                              </Link>
                              <Link to={{ pathname: routes.buyAndSell }}>
                                <ListGroupItem
                                  tag="button"
                                  action
                                  className="border-light"
                                >
                                  <MdInsertChart /> Activities
                                </ListGroupItem>
                              </Link>
                              <Link to={{ pathname: routes.settings }}>
                                <ListGroupItem
                                  tag="button"
                                  action
                                  className="border-light"
                                >
                                  <MdSettingsApplications /> Settings
                                </ListGroupItem>
                              </Link>
                              <ListGroupItem
                                tag="button"
                                action
                                className="border-light"
                              >
                                <MdHelp /> Help
                              </ListGroupItem>
                              <ListGroupItem
                                onClick={this.logout}
                                tag="button"
                                action
                                className="border-light"
                              >
                                <MdExitToApp /> Signout
                              </ListGroupItem>
                            </ListGroup>
                          </UserCard>
                        </PopoverBody>
                      </UncontrolledPopover>
                    </div>
                  </>
                </NavLink>
              </NavItem>
            </Nav>
          ) : (
            <Nav navbar className={bem.e("nav-right")}>
              <Popover
                trigger="legacy"
                placement="bottom"
                isOpen={this.state.isMobilePopoverOpen}
                toggle={this.toggleMobilePopover}
                target="MobilePopover"
                className="p-5 border"
              >
                <PopoverBody className="p-1">
                  <ListGroup flush>
                    <ListGroupItem tag="button" action className="border-light">
                      <Link to={{ pathname: routes.signIn }}>
                        <MdExitToApp className="mr-2" /> {"  "} SignIn
                      </Link>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action className="border-light">
                      <Link to={{ pathname: routes.signUp }}>
                        <MdGroupAdd className="mr-2" /> SignUp
                      </Link>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action className="border-light">
                      <MdHelp className="mr-2" /> About Us
                    </ListGroupItem>
                  </ListGroup>
                </PopoverBody>
              </Popover>
              <NavItem id="MobilePopover">
                <NavLink>
                  <MdReorder size={20} />
                </NavLink>
              </NavItem>
            </Nav>
          )}
        </Navbar>
      </>
    );
  }
}

export default Header;
