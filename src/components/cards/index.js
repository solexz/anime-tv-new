const React = require("react");
const Card = require("react-bootstrap/Card");
const Col = require("react-bootstrap/Col");
const { Ratio } = require("react-bootstrap");
const { GlobalContext }= require('../api/globalContext')
const SpinnerComponent = require("../spinner")
const { Link } = require("react-router-dom")
const Style = require("../css/Cards/Custom.Module.css")

function Cards() {
  const Global = React.useContext(GlobalContext);

  if (Global.data === null && Global.loading === null) return null;
  return (
    <>
      {Global.loading ? (
        <SpinnerComponent />
      ) : (
        Global.data.map((data, index) => (
          <Col key={index} xs={6} md={2}>
            <Link
              to="video"
              style={{ textDecoration: "none", color: "#f2f2f2" }}
              onClick={function (e) {
                localStorage.setItem("ImageLocalId", data.category_image);
                Global.setEpisodeId(data.video_id);
                Global.setIdImage(data.category_image);
                localStorage.setItem("episodeAnimeIdLocal", data.video_id);
              }}
            >
              <Card className={Style.cardsCustom} variant="dark">
                <Ratio aspectRatio="1x1">
                  <Card.Img
                    src={`https://cdn.appanimeplus.tk/img/${data.category_image}`}
                    alt={data.title}
                  />
                </Ratio>
                <Card.Body>
                  <Card.Title className={Style.cardTitleCustom}>
                    {data.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))
      )}
    </>
  );
}

export default Cards;
