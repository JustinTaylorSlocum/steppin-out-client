import React, { useEffect, useState } from "react"

import { makeStyles } from '@material-ui/core/styles';

import AddIcon from '@material-ui/icons/Add';
import { FormGroup, Button, Typography, Toolbar, AppBar, TextField, Dialog, DialogActions, DialogTitle, DialogContent } from '@material-ui/core';
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: '1.5em'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: 'black'
    },
    popover: {
        pointerEvents: 'none',
      },
    paper: {
        padding: theme.spacing(1),
      },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
  }));

  const shoppingList = "paper7";
  
const NewsBar = (props) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [password, setPassword] = useState('');

    const handleToggle = () => { setModal(!modal); };

    const handleChange = (e) => {
        if (e.target.name == 'postTitle') {
          setTitle(e.target.value);
        }
        else if (e.target.name == 'postBody') {
          setBody(e.target.value);
        } 
        else if (e.target.name == 'password') {
          setPassword(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (password == shoppingList) {
          Axios.post('https://steppin-out-backend.herokuapp.com/api/newsPosts/createPost', {
            title: title,
            body: body,
          })
  
          setTimeout(() => {
            props.loadData();
          }, 1500);
  
          // Close modal
           handleToggle();
        } else {
          alert("The password is incorrect. Try again.");
        }
    }

    return (
        <>
        <div className={classes.root}>
          <AppBar position="static" style={{backgroundColor:'rgb(236, 236, 236)'}}>
            <Toolbar>
                <Typography variant="h5" className={classes.title}>
                  News
                </Typography>
                <AddIcon className="new-post-button" onClick={handleToggle}/>
            </Toolbar>
          </AppBar>
        </div>
        <Dialog open={modal} maxWidth='lg' fullWidth>
          <DialogTitle id="customized-dialog-title">
            New Post
          </DialogTitle>

          <DialogContent dividers>
            <FormGroup>
              <TextField
              name="postTitle"
              label="Post Title"
              onChange={e => handleChange(e)}
              required
              />
              <TextField
                name="postBody"
                multiline
                required
                onChange={e => handleChange(e)}
                rows={6}
                label="Post Body"
                size="medium"
              />
              <TextField
              name="password"
              label="Password"
              onChange={e => handleChange(e)}
              required
              />
            </FormGroup>
          </DialogContent>

          <DialogActions>
          <Button autoFocus onClick={handleToggle} color="primary">
              Cancel
            </Button>
            <Button autoFocus onClick={handleSubmit} color="primary">
              Create Post
            </Button>
          </DialogActions>
        </Dialog>
    </>
    )
}

export default NewsBar;