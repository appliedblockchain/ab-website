import { Grid, styled } from "@mui/material";

const Right = styled(Grid)`
    background-color: #1E2126;
    height: 122.5px;
    border-top-right-radius: 100% 80%;
`
const Left = styled(Grid)`
    background-color: #1E2126;
    height: 122.5px;
    border-top-left-radius: 100% 80%;
`

function TopDecoratorWhatMakesUsDifferentSection() {
  return (
    <Grid container xs={12}>
        <Left item xs={6} />
        <Right item xs={6} />
    </Grid>
  );
}

export default TopDecoratorWhatMakesUsDifferentSection;