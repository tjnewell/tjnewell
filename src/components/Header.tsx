import { Flex, Heading, Separator, Link } from '@radix-ui/themes';
import { Link as RouterLink } from 'react-router-dom';

export const Header = () => {
  return (
    <Heading>
      <Flex direction="column">
        <Flex pb="1">
          <Link size="8">
            <RouterLink to="/">tjnewell.com</RouterLink>
          </Link>
        </Flex>
        <Separator my="3" size="4" />
        <Flex gap="4" pt="2" pb="4" justify="between" align="end">
          <Link size="2">
            <RouterLink to="about">About</RouterLink>
          </Link>
          <Link size="2">
            <RouterLink to="resources">Resources</RouterLink>
          </Link>
          <Link size="2">
            <RouterLink to="resume">Resume</RouterLink>
          </Link>
          <Link size="2">
            <RouterLink to="projects">Projects</RouterLink>
          </Link>
        </Flex>
      </Flex>
    </Heading>
  );
};
