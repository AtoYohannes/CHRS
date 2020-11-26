import React from "react";
import { Button, Card, FormGroup, Input, Label } from "reactstrap";

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
   let drawerClasses='authContainer'
   if (!isMobile) {
     drawerClasses='authContainer-Mobile'
   }
    
    return (
      <div className={drawerClasses}>
        <Card align="center" className="bg-background p-5">
          <h5 className="mb-3">
            <b>Sign in or create an account</b>
          </h5>
          <hr />
          <FormGroup>
            <Label>Email Address</Label>
            <Input placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Button block>Continue With Email</Button>
          </FormGroup>
          or
          <hr />
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
