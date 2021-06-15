import * as React from "react"
import styled from "styled-components"
import { device } from "../components/device"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Container = styled.div`
  padding: 1em 2em;
  display: flex;
  flex-direction: column;

  h1 {
    justify-self: flex-start;
    align-self: start;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: auto;

    .userinput {
      width: 100%;
    }

    label {
      display: flex;
      flex-direction: column;
      width: 100%;
      input {
        margin-top: 0.5em;
      }
    }

    .form-button {
      width: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .button {
      margin: 0.5em 1em;
      padding: 0.5em 1em;
    }
  }

  @media ${device.mobileL} {
    padding: 1em 3em;
    align-items: center;

    form {
      width: 80%;
      align-items: center;
    }
  }

  @media ${device.tablet} {
    padding: 1em 3em;
    align-items: center;

    form {
      width: 70%;
      align-items: center;
      .userinput {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .name {
          padding-right: 0.5em;
        }

        :first-child {
          margin-right: 0.5em;
        }
      }
    }
  }

  @media ${device.laptopL} {
    padding: 1em 4em;
  }
`

const Contact = () => (
  <Layout>
    <Seo title="Contact" />
    <Container>
      <h1>Contact Us</h1>
      <form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <div className="userinput">
          <label className="nameinput">
            Name
            <input className="nameinput" type="text" name="name" id="name" />
          </label>
          <label>
            Email
            <input type="email" name="email" id="email" />
          </label>
        </div>

        <label>
          Subject
          <input type="text" name="subject" id="subject" />
        </label>
        <label>
          Message
          <textarea name="message" id="message" rows="5" />
        </label>
        <div className="form-buttons">
          <input className="button" type="submit" value="Send" />
          <input className="button" type="reset" value="Clear" />
        </div>
      </form>
    </Container>
  </Layout>
)

export default Contact
