import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer py-5 mt-5 mb-1"> 
        <Container>
            <Row>
                <Col>
                <h3 className="fw-bold">EventKampus</h3>
                <p className="desc">Raih prestasi gemilangmu melalui informasi <br/>kegiatan seputar kampusmu <br />secara lengkap disini</p>
                </Col>
                <Col>
                <h5 className="fw-bold">Social Media</h5>
                <div className="mail mb-1 mt-2">
                    <Link className="text-decoration-none">
                    <i className="fa-regular fa-envelope"></i>
                    <p className="m-0">sholehahalfaniatus@gmail.com</p>
                </Link>
                </div>
                <div className="ig mb-1 mt-2">
                    <Link className="text-decoration-none">
                    <i className="fa-brands fa-instagram"></i>
                    <p className="m-0">alfaniatuss</p>
                    </Link>
                </div>
                <div className="wa mb-1 mt-2"> 
                    <Link className="text-decoration-none">
                    <i className="fa-brands fa-whatsapp"></i>
                    <p className="m-0">+6285335100361</p>
                    </Link>
                </div>
                </Col>
                <Col>
                <h5 className="fw-bold">Address</h5>
                <p>Jalan Raya Jember No.KM13, Kawang, Labanasem, Kec. Kabat, Kabupaten Banyuwangi<br /> Jawa Timur 68461</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <p className="text-center px-md-0 px-3">&copy; Copyright by <span className="fw-bold">EventKampus</span>, All Right Reserved</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default FooterComponent;