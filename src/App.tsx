import { Container, Link } from '@radix-ui/themes';
import { Header } from './components/Header';
import { Routes, Route, Outlet, Link as RouterLink } from 'react-router-dom';
import { Home, About, Resources, Resume, Projects } from './pages';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="resources" element={<Resources />} />
          <Route path="resume" element={<Resume />} />
          <Route path="projects" element={<Projects />} />
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
        <Header />
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
