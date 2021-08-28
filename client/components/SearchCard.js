import styles from '../styles/SearchCard.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import mockData from '../searchCardMock.js';

const useStyles = makeStyles({
  root: {
    maxWidth: 261,
    maxHeight: 339,
    borderRadius: 30,
    backgroundColor: '#A3B3A9',
    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.25)',
  },
  media: {
    height: 140,
  },
});

const SearchCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={mockData[0].image_url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {mockData[0].name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Category: {mockData[0].categories[0].title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Location: {mockData[0].location.city}, {mockData[0].location.state}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default SearchCard;