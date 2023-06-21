import { Grid, Typography } from "@mui/material";

function StayUpdatedSection (){
    return (
        <Grid container xs={12} className="home-stay-updated-main">
            <Grid item xs={12}>
                <Typography variant="h4" align="center" color="primary">
                Stay updated
                </Typography>
                
                <Typography variant="h2" align="center" color="primary">
                Check our latest content
                </Typography>

            </Grid>
        </Grid>
    )
}

export default StayUpdatedSection;