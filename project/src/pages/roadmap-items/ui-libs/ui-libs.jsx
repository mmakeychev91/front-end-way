import { Button, Container, Typography, AppBar, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const UiLibs = () => (
  <div>
    <h2>Пример MUI</h2>
    <Container>
      <AppBar position="static">
        <Toolbar>
          <MenuIcon />
          <Typography variant="h6">
            My App
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography variant="h4" component="h1" gutterBottom>
        Hello, MUI!
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </Container>
    <h3>Добавление темизации</h3>
    <p>Вы можете настроить <a href="https://mui.com/material-ui/customization/theming/">тему</a> для вашего приложения с помощью ThemeProvider.</p>
  </div>
);

export default UiLibs;
