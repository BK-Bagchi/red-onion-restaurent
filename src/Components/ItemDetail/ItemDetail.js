import React from 'react';
import './ItemDetail.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Item from '../Database/Items';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import { useHistory, useParams } from 'react-router-dom';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const ItemDetail = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const buttonStyle = {
        background: 'red',
        color: 'white !important',
        width: '100px',
        height: '40px',
        borderRadius: '20px'
    }

    let { id } = useParams();
    const history = useHistory();
    id = Number(id)
    const thisItem = Item.filter((item) => {
        return item.id === id;
    })

    return (
        thisItem.map((item) => {
            localStorage.setItem("menuLocation", item.category)
            return (
                <section key={item.id} className={`item-detail mx-auto py-4${classes.root}`}>
                    <div className="row">
                        <div className="col-md-6 order-md-last d-flex justify-content-center">
                            <img className="item-img" src={require(`../../Resources/${item.image}`)} alt="Item Img" />
                        </div>
                        <div className="col-md-6 order-md-first d-flex flex-column justify-content-center">
                            <h1>{item.name}</h1>
                            <p className="m-0">{item.fullDescription}</p>
                            <div className="d-flex my-3">
                                <h3>${item.price}</h3>
                                <div className="plus-minus ml-4">
                                    <button className="minus"><RemoveIcon /></button>
                                    <span className="amount">1</span>
                                    <button className="plus"><AddIcon /></button>
                                </div>
                            </div>
                            <div className="d-flex">
                                <button className="back mr-4" onClick={() => history.push("/")}>Back</button>
                                <Button style={buttonStyle} variant="outlined" className="add d-flex justify-content-center align-items-center" onClick={handleClick}><ShoppingCartIcon />&nbsp; Add</Button>
                            </div>
                        </div>
                    </div>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success">
                            Item added to cart successfully
                        </Alert>
                    </Snackbar>
                </section>
            )
        })
    );
};

export default ItemDetail;
