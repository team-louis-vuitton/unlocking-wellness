import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSol} from '@fortawesome/free-solid-svg-icons';
import { faStar as faReg} from '@fortawesome/free-regular-svg-icons';
import stylesModal from '../styles/Modal.module.css';
import Modal from "react-modal";
import certification from "../public/certification.png";
import payment from "../public/payment.png"
import Image from 'next/image';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    width: '15rem',
    height: '26rem',
    borderRadius: 30,
    backgroundColor: '#A3B3A9',
    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.25)',
    margin: '3% 3% 3% 3%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
media: {
  height: 140,
  },
button: {
  color: 'rgba(10, 9, 9, 0.67)',
    backgroundColor: 'rgb(236, 231, 223)',
    boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.25)',
    margin: '0 auto',
    marginBottom: '1rem',
    position: 'relative',
    marginLeft: '42px',
    marginBottom: '50px',
  },
starButton: {
  fontSize: '10px',
  position: 'absolute',
  bottom: '4%',
  left: '44%',
  zIndex: '5',
  color: 'yellow',
  cursor: 'pointer',
  backgroundColor: 'rgba(10, 9, 9, 0)',
  borderRadius: '50%',
  width: '2rem',
  height: '2rem',
  paddingLeft: '0.3rem',
  paddingTop: '0.3rem',
  },
name: {
  fontSize: '1.2rem',
}
});

const SearchCard = ({ card, handleFavoriteProvider }) => {
  const classes = useStyles();

  let [isHover, setIsHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <Card className={classes.root}>
      <div style={{display: handleFavoriteProvider ? 'inline-block' : 'none'}} onClick={() => handleFavoriteProvider(card)} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className={classes.starButton}>
        <FontAwesomeIcon icon={isHover ? faSol : faReg} size='2x' className={stylesModal.star} />
      </div>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={card.image_url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.name} gutterBottom variant="h7" component="h2">
            {card.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Category: {card.categories[0].title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Location: {card.location.city}, {card.location.state}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div>
            <Button className={classes.button} size="large" color="primary"  onClick={toggleModal}>
            View Provider
            </Button>
          <div className={stylesModal.App}>
            <Modal
              isOpen={isOpen}
              onRequestClose={toggleModal}
              className={stylesModal.mymodal}
              overlayClassName={stylesModal.myoverlay}
            >
              <CardMedia className={stylesModal.media}
                image={card.image_url}
              />
              <CardContent className={stylesModal.content}>
                <Typography gutterBottom variant="h5">
                  {card.name}
                </Typography>
                <Typography variant="h7" color="textSecondary" component="p">
                  {card.location.address1}
                </Typography>
                <Typography variant="body3" color="textSecondary" component="p">
                  {card.location.city}, {card.location.state} | {card.display_phone}
                </Typography>
                <div className={stylesModal.container}>
                <Typography variant="body3" color="textSecondary" component="p">
                  PAYMENT
                </Typography>
                <CardMedia variant="body3" />
                  CERTIFICATIONS
                </div>
              </CardContent>
              <div className={stylesModal.payment}><Image src={payment} alt='certification'/></div>
              <div className={stylesModal.certification}><Image src={certification} alt='certification'/></div>
            </Modal>
      </div></div>
      </CardActions>
    </Card>
  );
}

export default SearchCard;