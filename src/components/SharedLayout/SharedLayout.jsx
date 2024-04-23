import { Container, Header, Link, LogoLink } from './SharedLayout.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as CamperSvg } from '../../images/camper.svg';
import { Loader } from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <LogoLink to="/" end>
          <CamperSvg />
        </LogoLink>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
