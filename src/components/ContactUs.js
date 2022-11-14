import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div>
            <h4>Feel free to contact me / view my CV</h4>
          </div>
          <div className="row">
            <div className="contact-btn-ctr">
              <a target="_blank" rel="noreferrer" href="mailto: sariputra.gunawan@gmail.com" alt="E-mail">
                <button className="contact-btn"><i className="fa fa-envelope contact-btn-icon" /> E-mail</button>
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/rzilla92" alt="github">
                <button className="contact-btn"><i className="fa fa-github contact-btn-icon" /> Github</button>
              </a>
              <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1i0Csl3zy_7wAx6X463IYWuqK1sCKasCZ/view?usp=sharing" alt="CV">
                <button className="contact-btn"><i class="fa fa-file-contract"></i> CV</button>
              </a>
              
            </div>
          </div>
        </section>
        );
  }
}