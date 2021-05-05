import React, { useState } from "react"
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
  
const GigBar = (props) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [modal, setModal] = useState(false);
    const [gigFields, setGigFields] = useState({
        name: '',
        description: '',
        time: '',
        address: '',
        phone: '',
        city: '',
        state: '',
        day: '',
        month: '',
        year: ''
    });
  const [password, setPassword] = useState('');

    const handleToggle = () => { setModal(!modal); };

    const handleChange = (e) => {

      if (e.target.name == "password") {
        setPassword(e.target.value);
      } else {
        let gigObj = gigFields;
        if (e.target.name !== "dateTime") {
            gigObj[e.target.name] = e.target.value;
        } else {
            gigObj["year"] = e.target.value.substring(0, 4);
            gigObj["day"] = e.target.value.substring(8, 10);
            gigObj["time"] = e.target.value.substring(11, 16);
            gigObj["month"] = e.target.value.substring(5, 7);
            switch (e.target.value.substring(5, 7)) {
              case "01":
                return gigObj["month"] = "Jan";
              case "02":
                return gigObj["month"] = "Feb";
              case "03":
                return gigObj["month"] = "Mar";
              case "04":
                return gigObj["month"] = "Apr";
              case "05":
                return gigObj["month"] = "May";
              case "06":
                return gigObj["month"] = "Jun";
              case "07":
                return gigObj["month"] = "Jul";
              case "08":
                return gigObj["month"] = "Aug";
              case "09":
                return gigObj["month"] = "Sep";
              case "10":
                return gigObj["month"] = "Oct";
              case "11":
                return gigObj["month"] = "Nov";
              case "12":
                return gigObj["month"] = "Dec";
            }
        }
        
        setGigFields(gigObj);

      }       
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("??????????");
        if (password == shoppingList) {
          console.log(gigFields);
        Axios.post('https://steppin-out-backend.herokuapp.com/api/gigEvents/creategig', {
          name: gigFields.name,
          description: gigFields.description,
          time: gigFields.time,
          address: gigFields.address,
          phone: gigFields.phone,
          city: gigFields.city,
          state: gigFields.state,
          day: gigFields.day,
          month: gigFields.month,
          year: gigFields.year
        })
        .then((response) => {
          console.log(response);
          console.log("SENT!");
        })
        .catch((error) => {
          console.log(error);
          console.log("ERROR");
        });
        
        setTimeout(() => {
          props.loadData();
        }, 1500);

        // Close modal
         handleToggle();
      } else {
        alert("The password is incorrect. Try again.");
      }
    }

  const open = Boolean(anchorEl);

    return (
        <>
        <div className={classes.root}>
          <AppBar position="static" style={{backgroundColor:'rgb(236, 236, 236)'}}>
            <Toolbar>
                <Typography variant="h5" className={classes.title}>
                  Gigs
                </Typography>
                <AddIcon className="new-post-button" onClick={handleToggle}/>
            </Toolbar>
          </AppBar>
        </div>
        <Dialog style={{cursor:'default'}} open={modal} maxWidth='lg' fullWidth>
          <DialogTitle id="customized-dialog-title">
            Create Gig Event

          </DialogTitle>
          <DialogContent dividers>
            <FormGroup>
              <TextField
              name="name"
              label="Name"
              onChange={e => handleChange(e)}
              required
              />
              <TextField
                name="description"
                multiline
                onChange={e => handleChange(e)}
                rows={6}
                label="Description"
                size="medium"
              />
                <TextField
                name="dateTime"
                type="datetime-local"
                required
                onChange={e => handleChange(e)}
                size="medium"
              />
                <TextField
                name="address"
                label="Address"
                required
                onChange={e => handleChange(e)}
                size="medium"
              />
                <TextField
                name="city"
                label="City"
                required
                onChange={e => handleChange(e)}
                size="medium"
              />
                <TextField
                name="state"
                label="State"
                required
                onChange={e => handleChange(e)}
                size="medium"
              />
                <TextField
                name="phone"
                label="Contact Phone"
                required
                onChange={e => handleChange(e)}
                size="medium"
              />
                <TextField
                name="password"
                label="Password"
                required
                onChange={e => handleChange(e)}
                size="medium"
              />
            </FormGroup>
          </DialogContent>

          <DialogActions>
          <Button autoFocus onClick={handleToggle} color="primary">
              Cancel
            </Button>
            <Button autoFocus onClick={handleSubmit} color="primary">
              Create Gig
            </Button>
          </DialogActions>
        </Dialog>
    </>
    )
}

export default GigBar;