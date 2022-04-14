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
                <h2><b>More information</b></h2> 
            </DialogTitle>
            <Card>
            <CardContent>
                <Typography><b>Name: </b>{props.name}</Typography>
                <Typography><b>Type: </b>{props.brewery_type}</Typography>
                <Typography><b>Street: </b>{props.street}</Typography>
                <Typography><b>Country: </b>{props.country}</Typography>
                <Typography><b>Phone: </b>{props.phone}</Typography>
                <Typography><b>City: </b>{props.city}</Typography>
                <Typography><b>State: </b>{props.state}</Typography>
                <Typography><b>Website URL: </b>{props.website_url}</Typography>
                <Typography><b>Postal code: </b>{props.postal_code}</Typography>
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