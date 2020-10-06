import React, { useEffect, useState } from 'react';
import './ChooseUs.css';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    root2: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    }
}));

const ChooseUs = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(true)
    const [ChooseData, setChooseData] = useState([])
    useEffect(() => {
        fetch('https://calm-tor-38553.herokuapp.com/whyChooseUs')
            .then(res => res.json())
            .then(data => {
                setChooseData(data)
                setLoading(false)
            })
    }, [])
    return (
        <section className="choose-us">
            <div className="container">
                <h1>Why you choose us</h1>
                <p className="w-50">Barton waited twenty always repair in within we do. An delighted offending curiosity my us dashwoods at. Boy properous increasing surrounded</p>
            </div>
            <div className="facility d-flex justify-content-center flex-wrap">
                {
                    loading ?
                        <div className={classes.root2}>
                            <CircularProgress />
                        </div>
                        :
                        <>
                            {
                                ChooseData.map((chooseData) => {
                                    return (
                                        <Card key={chooseData._id} className={`card ${classes.root}`}>
                                            <CardActionArea>
                                                <img className="w-100" src={require(`../../Resources/Image/${chooseData.image}`)} alt="Card Pic" />
                                                <CardContent className="d-flex">
                                                    <div className="service-icon">
                                                        <img src={require(`../../Resources/ICON/${chooseData.icon}`)} alt="" />
                                                    </div>
                                                    <div>
                                                        <Typography gutterBottom variant="h5" component="h2">
                                                            {chooseData.cause}
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            {chooseData.description}
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
                                    )
                                })
                            }
                        </>
                }
            </div>
        </section>
    );
};

export default ChooseUs;