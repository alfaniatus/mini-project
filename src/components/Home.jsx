import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import page from "../assets/img/page.png";
import {eventTerbaru} from "../data/index"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    // homepage utama
    <div className="homepage"> 
      <header className="w-100 min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="header-box d-flex align-items-center">
          <Col lg="6">
          <h1 className="mb-3"><span>Pusat Informasi resmi<br />Event Kampusmu</span></h1>
          <p className="mb-3">Temukan dan ikuti rangkaian kegiatan pilihanmu disini untuk menambah wawasan baru serta meningkatkan kompetensi dirimu sekarang</p>
          <Link to="/login">
          <button className="btn btn-primary rounded-2">Jelajahi</button>
          </Link>
          </Col>
          <Col lg="6" className='pt-lg-0 pt-5'>
          <img src={page} alt="page-image"/>
          </Col>
        </Row>
      </Container> 
      </header>
      {/* halaman event */}
        <Container>
          <Row>
            <Col>
            <h1 className="text-center fw-bold">Choose Your Event</h1>
            <p className="text-center">Temukan event yang kamu inginkan</p>
            </Col>
          </Row>
          <Row>
            {eventTerbaru.map((event) => {
              return (
                <Col key={event.id}>
                  <img src={event.image} alt="event" className="w-100 mb-2"/>
                    <h5 className="mb-3 px-2">{event.date}</h5>
                    <div className="ket d-flex justify-content-beetween pb-3">
                      <p className="mb-5 px-2 text-dark fw-bold">{event.title}</p>
                    </div>
                    <div>
                    <button className="btn btn-primary">{event.click}</button>
                    </div>
                </Col>
              );
            })}
            </Row>
          </Container>
      </div>
    )
  }

  export default Home;