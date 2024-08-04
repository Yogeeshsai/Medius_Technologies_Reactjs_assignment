import Link from 'next/link';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavItem = styled.a`
  margin: 0 1rem;
  cursor: pointer;
`;

const Header = () => (
  <Navbar>
    <Link href="/" passHref><NavItem>Home</NavItem></Link>
    <Link href="/about-us" passHref><NavItem>About Us</NavItem></Link>
    <Link href="/mortgage-calculator" passHref><NavItem>Mortgage Calculator</NavItem></Link>
    <Link href="/start" passHref><NavItem>Start</NavItem></Link>
  </Navbar>
);

export default Header;
