import { Button, Link } from "@mui/material";
import React from "react";


function Detailbutton ( { brewery, key }) {
    const showDetail = () => {
        alert('Oops! Could not load more data this time.'); 
    }
   
    return (
        <div>
            <Link to={`/${key}`} key={key}>
                <Button
                style={{marginTop: 25}}
                variant="contained" 
                color="primary"
                onClick={showDetail}
                >
                    View detail
                </Button>
            </Link>
        </div>
      );

}

export default Detailbutton; 