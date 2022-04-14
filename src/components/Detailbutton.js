import { Button, Card, CardContent, Dialog, DialogTitle, Typography } from "@mui/material";
import React, { useState } from "react";


function Detailbutton ( { props }) {
    const [open, setOpen] = useState(false); 

    const showDetail = () => {
       setOpen(true);  
    }

    return (
        <div>
        <Dialog open={open}>
            <DialogTitle>
                
            </DialogTitle>
            <Card>
            <CardContent>
                <Typography><h2><b>More information</b></h2></Typography>
                <Typography>Name: {props.name}</Typography>
                <Typography>Type: {props.brewery_type}</Typography>
                <Typography> Street: {props.street}</Typography>
                <Typography>Country: {props.country}</Typography>
                <Typography>Phone: {props.phone}</Typography>
                <Typography>City: {props.city}</Typography>
                <Typography>State: {props.state}</Typography>
                <Typography>Website URL: {props.website_url}</Typography>
                <Typography>Postal code: {props.postal_code}</Typography>
                <Button
                style={{marginTop: 25}} 
                variant="contained" 
                onClick={() => setOpen(false)}>
                    close
                </Button>
            </CardContent>
        </Card>
        </Dialog>
                <Button
                style={{marginTop: 25}}
                variant="contained" 
                color="primary"
                onClick={showDetail}>
                    View detail
                </Button>
        </div>
      );

}

export default Detailbutton; 