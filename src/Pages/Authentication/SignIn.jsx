import React from "react";
import {
  Button,
  Card,
  Form,
  FormGroup,
  Input,
  Label,
  Col,
  CardHeader,
} from "reactstrap";

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
            </FormGroup>
            <FormGroup>
              <Button block>Continue With Email</Button>
            </FormGroup>
          </Form>
          <Col align="center">or</Col>
          <hr />
          {/* // TODO Implement Other Login Options */}
          <hr />
          By signing in or creating an account, you agree with our Terms &
          Conditions and Privacy Statement
          <hr />
          All rights reserved.
        </Card>
      </div>
    );
  }
}

export default SignIn;
