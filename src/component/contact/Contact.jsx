import React, { Component } from "react";
import InputType from "./input-type/InputType";
import "./contact.css";
class Contact extends Component {
  render() {
    var { className } = this.props;
    return (
      <form className="contact-form">
        <h1 className={className}>Connect with us.</h1>
        <InputType
          value="Isha Jhunjhunwala"
          className="name"
          labelName="name"
        />
        <InputType className="email" labelName="email" />
        <InputType className="phone" labelName="phone" />
        <div className="msg inp-textarea ht-101 ">
          <textarea
            className="wd-325 ht-101 fz-10 "
            name="msg "
            id="msg "
            cols="30 "
            rows="5 "
            placeholder="Write your message here... "
          />
        </div>
        {this.props.children}
      </form>
    );
  }
}

export default Contact;
