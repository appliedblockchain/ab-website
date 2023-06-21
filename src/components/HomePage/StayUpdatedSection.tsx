import { Grid, Typography } from "@mui/material";

function StayUpdatedSection (){
    return (
        <Grid container xs={12} className="home-stay-updated-main">
            <Grid item xs={12}>
                <Typography variant="h4" align="center" className="home-stay-updated-text-base-title">
                Stay updated
                </Typography>
                
                <Typography variant="h2" align="center" className="home-stay-updated-text-base-subtitle" mt={'10px'}>
                Check our latest content
                </Typography>
            </Grid>
        </Grid>
    )
}

export default StayUpdatedSection;