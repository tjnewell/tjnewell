import { Container, Link, Box } from '@radix-ui/themes';
import { Routes, Route, Outlet, Link as RouterLink } from 'react-router-dom';

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
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-16">
      <Container size="4">
        <Outlet />
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
