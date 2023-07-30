import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export const TopBar = () => {
   return (
      <AppBar position="static">
         <Toolbar style={{ justifyContent: "space-between" }}>
            <Typography variant="h6">KgOpinion</Typography>
            <Button color="inherit">Login</Button>
         </Toolbar>
      </AppBar>
   );
}
