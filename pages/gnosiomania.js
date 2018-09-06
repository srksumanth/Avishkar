import Meta from "../components/Meta";
import Footer from "../components/Footer";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "next/router";
const styles = {
  card: {
    minHeight: 400,
    padding: 10,
    margin: 25,
    textAlign: "justify"
  },
  media: {
    height: 480
  }
};
const Index = props => {
  const { classes } = props;
  return (
    <>
      <Meta />
      <div className="container">
        <h2>Gnosiomania</h2>
        <div className="row">
          <div className="col-md-6">
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="/static/img/gnosis/quiz1.jpg"
                title="Gnosiomania"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Gnosiomania Quizzing
                </Typography>
                <Typography component="p">
                  Does magic exist? Our speaker has given newer dimensions to
                  this question. Not a magician but a psychological illusionist,
                  Karan Singh Magic is going to bowl the audience over with his
                  keen mind-reading abilities. Just with the help of a few
                  simple questions, he would be into one's brain. We always
                  ponder over how we can do our bit for the society that we live
                  in. The Robin Hood Army has turned this noble thought to
                  reality. Driving away hunger from the society in a sustainable
                  manner, this organization is making full use of the abilities
                  of the younger force of our nation. A Ramnath Goenka awardee,
                  our speaker is the righteous example to show how media is
                  indeed a pillar of our democracy. J. Gopikrishnan, an
                  investigative journalist, has uncovered the mystery behind the
                  2G, National Herald and Aircel-Maxis cases. There is a great
                  chance that the songs that we hum merrily or melancholically
                  are his creation. With the Guinness world record for writing
                  the most number of songs, Sameer has contributed a lot in
                  shaping the music industry. His efforts have been acknowledged
                  with three filmfare awards
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="col-md-6">
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="/static/img/gnosis/gnosiomania.jpg"
                title="Gnosiomania"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  GnoTalks
                </Typography>
                <Typography component="p">
                  With the stage being graced by eminent personalities each
                  year, gnoTalks has been enriching the experience that Avishkar
                  brings forth since its inception. gnoTalks presents a panel of
                  illustrious people who have paved their way to glory,
                  exemplifying the notion of inspiration. It showcases unique
                  performances and talks, making the event one of its kind. This
                  year, we are going to take forward the legacy, greatly created
                  last year with personalities like Mr. Devendra Jhajharia, The
                  Indian Jam Project, Mr. Vinay Pathak, Dr. Ananda Shankar
                  Jayant and Mr. Vivek Patil on the stage
                </Typography>
                <br />
                <Typography gutterBottom variant="headline" component="h2">
                  Speakers
                </Typography>
                <div className="img">
                  <img src="/static/img/gnosis/speaker2.jpg" alt="" />
                </div>
                <div className="img">
                  <img src="/static/img/gnosis/speaker3.jpeg" alt="" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>
        {`
          .container {
            padding: 10px;
          }
          .img img {
            height: 300px;
            margin-left: 50%;
            margin-right: 0;
            transform: translateX(-50%);
          }
          @media (max-width: 700px) {
            .container {
              margin-top: 50px;
            }
          }
        `}
      </style>
    </>
  );
};
Index.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(withRouter(Index));