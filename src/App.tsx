import { Container, Link, Box, Text, Flex, Button } from '@radix-ui/themes';
import { Routes, Route, Outlet, Link as RouterLink } from 'react-router-dom';
import tj from './assets/tj-avatar.png';
import { useTheme } from './components/theme-provider';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Page() {
  const { setTheme } = useTheme();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-16">
      <Container size="4" align="center">
        <Flex gap="4" direction="column" align="center">
          <Box height="400px" width="400px">
            <img src={tj} />
          </Box>
          <Box width="400px">
            <Flex direction="column" gap="4">
              <Text align="center" as="div" size="6" weight="medium">
                Hey! I'm TJ.
              </Text>
              <Text wrap="wrap" align="center" as="div">
                Let's go on a fishing trip and get to know each other a little
                bit more. But before we just head out, let's nail down some
                details...
              </Text>
              <Text wrap="wrap" align="center" as="div" weight="medium">
                Do you prefer fishing in the morning or the evening?
              </Text>
            </Flex>
          </Box>
          <Box width="400px">
            <Flex gap="6" direction="row" justify="center">
              <Button size="4" onClick={() => setTheme('light')}>
                Morning
              </Button>
              <Button size="4" onClick={() => setTheme('dark')}>
                Evening
              </Button>
            </Flex>
          </Box>
        </Flex>

        {/* <Outlet /> */}
      </Container>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>404</h2>
      <p>
        <Link>
          <RouterLink to="/">Go to the home page</RouterLink>
        </Link>
      </p>
    </div>
  );
}
