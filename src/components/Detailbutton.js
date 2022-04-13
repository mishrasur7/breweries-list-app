import { Button, Link } from "@mui/material";
import React from "react";


function Detailbutton ( { brewery }) {
    return (
        <div>
            <Link to={`/$brewery`} key={brewery.id} style={{textDecoration: 'none'}}>
                <Button variant="secondary" color="primary">More detail</Button>
            </Link>
        </div>
      );

}

export default Detailbutton; 