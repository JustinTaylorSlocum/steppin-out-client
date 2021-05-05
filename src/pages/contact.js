import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import  '../Styling/contactPage.css'
import ContactItem from "../components/contactFormItem"
import ContentHeader from '../components/contentHeader'
import Container from '@material-ui/core/Container';
import emailjs from 'emailjs-com';

const ContactPage = () => {
    var [inputFields, updateInputFields] = useState(
      {
        name: '',
        email: '',
        comment: ''
      }
    );

    const updateState = (field, value) => {
        var tempInputFields= inputFields;
        tempInputFields[field] = value;
        updateInputFields(tempInputFields);
    }

/*  Service ID: service_y2i4ebj
    Template ID: template_c6m6d5l
    User ID: user_PYlZd9QKAPCInoqm8viUr
    Access Token: 8818d5b8d671cc965a254b4989eb1731
    SOCalendarInfo@gmail.com
    EmailJS.com */

    const handleSubmit = (e) => {
      e.preventDefault();
      let templateParams = {
        from_name: inputFields.email + '(Name: ' + inputFields.name + ')',
        to_name: '<SOCalendarInfo@gmail.com>',
        subject: 'Steppin Out Online: Contact',
        message: inputFields.comment
       }

      emailjs.sendForm('service_y2i4ebj', 'template_c6m6d5l', e.target, 'user_PYlZd9QKAPCInoqm8viUr')
        .then((result) => {
          console.log(result.text);
          window.location.reload(false);
        }, (error) => {
          console.log(error.text);
        });
    }

    return (
      <Layout>
      <SEO title="Steppin' Out - Contact Us" />
      <ContentHeader headerText = "Contact"/>
            <Container>
            <div className = "contact-form">
              <form onSubmit={handleSubmit}>
                <div className="wrap">
                <input type="hidden" name="contact_number" />
                  <label>Name</label>
                  <input type="text" name="user_name" />
                  <label>Email</label>
                  <input type="email" name="user_email" />
                  <label>Message</label>
                  <textarea name="message" />
                </div>
                <input type="submit" value="Send" className='contact-submit'/>
              </form>
            </div>
            </Container>
    </Layout>
    )
}

export default ContactPage
