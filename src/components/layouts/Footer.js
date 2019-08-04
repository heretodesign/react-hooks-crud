import React, { Component } from 'react'
import { columns, column } from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'


function Footer() {

  return (
      <footer className="section footer-btm">
          <div className="container content has-text-centered">
              <div className="columns">
                <div className="column is-2">
                  <div className="firstFooter">
                      <h1 className="title is-4 has-text-weight-bold has-text-white has-text-left has-text-white-bis">ReactHooks</h1>
                      <div className="content">
                        <div className="subtitle is-5 has-text-white-bis">
                          <div className="has-text-left has-text-weight-light">
                              <p className="has-text-left">About Us</p>
                              <p className="has-text-left">Careers</p>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="column is-3">
                    <div className="firstFooter">
                        <h1 className="title is-4 has-text-weight-bold has-text-white has-text-left has-text-white-bis">ReactHooks Malaysia</h1>
                        <div className="content">
                            <div className="subtitle is-5 has-text-white">
                                <div className="has-text-left has-text-weight-light has-text-white-bis">
                                    <p className="has-text-left">info@reacthooks.com</p>
                                    <p className="has-text-left">
                                      04-01 UOA Tower A<br />
                                      Bangsa South<br />
                                      Kuala Lumpur 049704
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-4">
                    <div className="firstFooter">
                        <h1 className="title is-4 has-text-weight-bold has-text-white has-text-left has-text-white-bis">ReactHooks Singapore</h1>
                        <div className="content">
                            <div className="subtitle is-5 has-text-white">
                                <div className="has-text-left has-text-weight-light has-text-white-bis">
                                    <p className="has-text-left">info@reacthooks.com</p>
                                    <p className="has-text-left">
                                      A-21-06 Summer Suites,<br />
                                      8 Cecil Street <br />
                                      Singapore 50250
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-3">
                  <div className="firstFooter">
                      <h1 className="title is-4 has-text-weight-bold has-text-white has-text-left has-text-white-bis">
                      <div className="navbar-end">
                        <div className="navbar-item">
                          <div className="buttons">
                            <p className="has-text-left has-text-white-bis">info@reacthooks.com</p>
                          </div>
                        </div>
                      </div>
                      </h1>
                   </div>
                </div>
              </div>
          </div>
          <section className="section">
              <div className="container">
                  <div className="content">
                    <hr className="hr-footer" />
                  </div>
              </div>
          </section>
          <section className="section">
              <div className="container">
                <div className="columns">
                  <div className="column is-half">
                    <div className="content">
                        <div className="subtitle is-5 has-text-white">
                            <p className="has-text-left has-text-weight-light has-text-white-bis">
                                <a href="#" className="has-text-left has-text-white-bis">Terms & Conditions | Privacy Policy</a>
                            </p>
                        </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="content">
                        <div className="subtitle is-5 has-text-white">
                            <p className="has-text-right has-text-weight-light has-text-white-bis">
                                <a href="#" className="has-text-right has-text-white-bis">© 2019 reactHooks. All Rights Reserved</a>
                            </p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>
      </footer>
  );
}

export default Footer;
