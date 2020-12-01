import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Form,
  FormGroup,
  Input,
  Label,
  Col,
  CardHeader,
  CardImg,
  Row,
} from "reactstrap";
import { Facebook, Google } from "../../Assets/LoginAssets";
import routes from "../../Config/routes";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
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
  render() {
    const isMobile = this.state.isMobile;
    let drawerClasses = "authContainer";
    if (!isMobile) {
      drawerClasses = "authContainer-Mobile";
    }

    return (
      <div className={drawerClasses}>
        <Card className="bg-background-card p-5 card">
          <CardHeader className="mb-3" align="center">
            <h5>
              <b>Sign in </b>
            </h5>
          </CardHeader>
          <Form>
            <FormGroup>
              <Label>Email Address</Label>
              <Input placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input placeholder="Password" type="password" />
              <Col align="right" className="mb-1">
                <Link to={{ pathname: routes.signUp }}>
                  <small>Don't have an account?</small>
                </Link>
              </Col>
            </FormGroup>

            <FormGroup>
              <Button block>Continue With Email</Button>
            </FormGroup>
          </Form>
          <Col align="center">
            <div>or</div>
            <hr />
            <Row>
              <Col md={6} sm={6} xs={6}>
                <CardImg src={Facebook} />
              </Col>
              <Col md={6} sm={6} xs={6}>
                <CardImg src={Google} />
              </Col>
            </Row>
            <hr />
            By signing in or creating an account, you agree with our Terms &
            Conditions and Privacy Statement
            <hr />
            All rights reserved.
          </Col>
        </Card>
      </div>
    );
  }
}

export default SignIn;
