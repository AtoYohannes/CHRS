import React from "react";
import {
  Button,
  Card,
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
          <CardHeader align="center" className="mb-3">
            <h5>
              <b>Create an account</b>
            </h5>
          </CardHeader>
          <FormGroup>
            <Label>Full Name</Label>
            <Input placeholder="Name" type="text" />
          </FormGroup>
          <FormGroup>
            <Label>Email Address</Label>
            <Input placeholder="Email" type="email" />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input placeholder="Password" type="password" />
          </FormGroup>
          <FormGroup>
            <Button block>Continue With Email</Button>
          </FormGroup>
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
