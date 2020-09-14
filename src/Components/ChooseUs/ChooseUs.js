import React from 'react';
import './ChooseUs.css';
import Image from '../../Resources/Image/adult-blur-blurred-background-687824.png'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const ChooseUs = () => {
    const classes = useStyles();
    return (
        <section className="choose-us">
            <h1>Why you choose us</h1>
            <p className="w-50">Barton waited twenty always repair in within we do. An delighted offending curiosity my us dashwoods at. Boy properous increasing surrounded</p>
            <div className="facility d-flex justify-content-center flex-wrap">
                <Card className={`card ${classes.root}`}>
                    <CardActionArea>
                        <img className="w-100" src={Image} alt="Card Pic" />
                        <CardContent className="d-flex">
                            <div>Icon</div>
                            <div>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </div>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            See More
                    </Button>
                    </CardActions>
                </Card>
                <Card className={`card ${classes.root}`}>
                    <CardActionArea>
                        <img className="w-100" src={Image} alt="Card Pic" />
                        <CardContent className="d-flex">
                            <div>Icon</div>
                            <div>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                                 </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </div>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            See More
                    </Button>
                    </CardActions>
                </Card>
                <Card className={`card ${classes.root}`}>
                    <CardActionArea>
                        <img className="w-100" src={Image} alt="Card Pic" />
                        <CardContent className="d-flex">
                            <div>Icon</div>
                            <div>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </div>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            See More
                    </Button>
                    </CardActions>
                </Card>
            </div>
        </section>
    );
};

export default ChooseUs;