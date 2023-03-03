const {Col, Container, Row} = require ("react-bootstrap")
const Spinner = require("react-bootstrap/Spinner")
const Style = require("../css/Snipper/Custom.Module.css")

function SpinnerComponent() {
  return (
    <>
      <Container
       className={Style.ContainerCustom}
      >
        <Row>
          <Col xs={6} md={2}>
            <Spinner animation="border" variant="warning" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SpinnerComponent;
