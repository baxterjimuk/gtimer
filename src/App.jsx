import { Container, Box, Typography, IconButton, CssBaseline, AppBar, Toolbar, Grid } from "@mui/material"
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from '@mui/material/styles/createTheme';
import useTheme from "@mui/material/styles/useTheme";
import LightMode from "@mui/icons-material/LightMode";
import DarkMode from "@mui/icons-material/DarkMode";
import useMediaQuery from '@mui/material/useMediaQuery';
import { createContext, useContext, useMemo, useState } from "react";
import { format } from 'date-fns/format';
import EtaCalculator from "./components/EtaCalculator";
import StaminaTimeCalculator from "./components/StaminaTimeCalculator";
import ColoTixCalculator from "./components/ColoTixCalculator";

const ColorModeContext = createContext({ toggleColorMode: () => { } });

function MyApp() {
  const [now, setNow] = useState(new Date());
  setInterval(() => setNow(new Date()), 1000);
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Container>
      <Box sx={{ m: 1, flexGrow: 1 }}>
        <AppBar position="sticky">
          <Toolbar variant="dense">
            <Typography variant="h6" component="h1" align="left" sx={{ m: 1, flexGrow: 1 }}>
              {format(now, 'PPPPpp')}
            </Typography>
            <IconButton sx={{ m: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Toolbar>
        </AppBar>
        {/* Do it here first. later extract to it's own component. */}
        <Grid container spacing={1} sx={{ mt: 0.5 }}>
          <Grid item xs={12} md={6} lg={4}>
            <EtaCalculator />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <StaminaTimeCalculator />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ColoTixCalculator />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light';
  const [mode, setMode] = useState(prefersDarkMode);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;