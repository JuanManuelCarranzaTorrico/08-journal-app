import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"


export const SideBar = ({ drawerWidth=240 }) => {
  return (
    <Box 
    component={'nav'}
    sx={{ width: {sm: drawerWidth}, flexShrink: {sm: 0} }}
    >
        <Drawer
        variant="permanent"
        open
        sx={{
            display: { xs: 'block'},
            '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box'}
        }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component={'div'}> Juan Carranza </Typography>
            </Toolbar>
            <Divider/>
            <List>
                {
                    ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container>
                                        <ListItemText primary={text}/>
                                        <ListItemText secondary='lorem ipsum dolor sit amet'/>
                                    </Grid>
                            </ListItemButton>
                        </ListItem>
                        ))
                }
            </List>
        </Drawer>

    </Box>
  )
}