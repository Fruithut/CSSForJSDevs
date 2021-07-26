import React from 'react';
import styled from 'styled-components/macro';

import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);

    return (
        <header>
            <SuperHeader/>
            <MainHeader>
                <Side>
                    <Logo/>
                </Side>
                <Nav>
                    <NavLink href="/sale">Sale</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                    <NavLink href="/sale">A Lengthy Item</NavLink>
                </Nav>
                <MobileNav>
                    <NavLink href="#"><Icon id="shopping-bag" strokeWidth={2} size={24} color={'var(--color-gray-900)'}/></NavLink>
                    <NavLink href="#"><Icon id="search" strokeWidth={2} size={24} color={'var(--color-gray-900)'}/></NavLink>
                    <UnstyledButton onClick={() => setShowMobileMenu(true)}>
                        <VisuallyHidden>Open menu</VisuallyHidden>
                        <Icon id="menu" strokeWidth={2} size={24} color={'var(--color-gray-900)'}/>
                    </UnstyledButton>
                </MobileNav>
                <RightSide/>
            </MainHeader>

            <MobileMenu
                isOpen={showMobileMenu}
                onDismiss={() => setShowMobileMenu(false)}
            />
        </header>
    );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 18px 32px;
  min-height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
  border-top: 4px solid var(--color-gray-900);
  overflow-x: auto;
  overflow-y: hidden;

  @media ${props => props.theme.queries.phoneAndDown} {
    padding: 20px 16px;
  }

  @media ${props => props.theme.queries.tabletAndDown} {
    align-items: center;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
      1rem,
      3.5vw - 1rem,
      3rem
  );
  margin: 0px 48px;

  @media ${props => props.theme.queries.tabletAndDown} {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: none;
  gap: 40px;

  @media ${props => props.theme.queries.tabletAndDown} {
    display: flex;
  }

  @media ${props => props.theme.queries.phoneAndDown} {
    gap: 23px;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${props => props.theme.queries.tabletAndDown} {
    flex: revert;
  }
`;

const RightSide = styled(Side)`
  @media ${props => props.theme.queries.tabletAndDown} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);
  white-space: nowrap;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
