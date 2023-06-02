import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from 'mdb-react-ui-kit';
import './footer.scss'
import heart from '../../image/heart.png'

export default function Footer() {
  return (
    <div className='container-fluid footer-container'>
      <div className='row'>
        <div className='col-12'>
          <MDBFooter
            className="text-center text-lg-start text-muted"
          >
            <section className="">
              <MDBContainer className="text-center text-md-start mt-5">
                <MDBRow className="mt-3">
                  <MDBCol
                    md="3"
                    lg="4"
                    xl="3"
                    className="mx-auto mb-4"
                  >
                    <h6 className="text-uppercase fw-bold fs-3 mb-4">Tasky</h6>
                    <p>
                      Here you can use rows and columns to organize your footer
                      content. Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit.
                    </p>
                  </MDBCol>

                  <MDBCol
                    md="2"
                    lg="2"
                    xl="2"
                    className="mx-auto mb-4"
                  >
                    <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                    <p>
                      <a
                        href="#!"
                        className="text-reset"
                      >
                        Angular
                      </a>
                    </p>
                    <p>
                      <a
                        href="#!"
                        className="text-reset"
                      >
                        React
                      </a>
                    </p>
                    <p>
                      <a
                        href="#!"
                        className="text-reset"
                      >
                        Vue
                      </a>
                    </p>
                    <p>
                      <a
                        href="#!"
                        className="text-reset"
                      >
                        Laravel
                      </a>
                    </p>
                  </MDBCol>

                  <MDBCol
                    md="3"
                    lg="2"
                    xl="2"
                    className="mx-auto mb-4"
                  >
                    <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                    <p>
                      <a
                        href="#!"
                        className="text-reset"
                      >
                        Pricing
                      </a>
                    </p>
                    <p>
                      <a
                        href="#!"
                        className="text-reset"
                      >
                        Settings
                      </a>
                    </p>
                    <p>
                      <a
                        href="#!"
                        className="text-reset"
                      >
                        Orders
                      </a>
                    </p>
                    <p>
                      <a
                        href="#!"
                        className="text-reset"
                      >
                        Help
                      </a>
                    </p>
                  </MDBCol>

                  <MDBCol
                    md="4"
                    lg="3"
                    xl="3"
                    className="mx-auto mb-md-0 mb-4"
                  >
                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                    <p>
                      <MDBIcon
                        icon="home"
                        className="me-2"
                      />
                      New York, NY 10012, US
                    </p>
                    <p>
                      <MDBIcon
                        icon="envelope"
                        className="me-3"
                      />
                      info@example.com
                    </p>
                    <p>
                      <MDBIcon
                        icon="phone"
                        className="me-3"
                      />{' '}
                      + 01 234 567 88
                    </p>
                    <p>
                      <MDBIcon
                        icon="print"
                        className="me-3"
                      />{' '}
                      + 01 234 567 89
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>
          </MDBFooter>
          <p className='text-center fw-bold pt-4 pb-2'>
            Made by Usama & Ahmed
            <img src={heart} alt="Bootstrap" width="18" height="18" className='ms-1 mb-1'></img>
          </p>
        </div>
      </div>
    </div>
  );
}
