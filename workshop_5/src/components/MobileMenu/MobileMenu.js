/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import {DialogOverlay, DialogContent} from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({isOpen, onDismiss}) => {
    if (!isOpen) {
        return null;
    }

    return (
        <Overlay>
            <Content>
                <CloseButton onClick={onDismiss}>
                    <VisuallyHidden>Dismiss menu</VisuallyHidden>
                    <Icon id={"close"} size={32}/>
                </CloseButton>
                <Nav>
                    <NavLink href="/sale">Sale</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                </Nav>
                <Footer>
                    <FooterLink href="/terms">Terms and Conditions</FooterLink>
                    <FooterLink href="/privacy">Privacy Policy</FooterLink>
                    <FooterLink href="/contact">Contact Us</FooterLink>
                </Footer>
            </Content>
        </Overlay>
    );
};

export default MobileMenu;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  display: flex;
  background: var(--color-backdrop);
  top: 0;
  height: 100%;
  width: 100%;
`;

const Content = styled(DialogContent)`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  background: var(--color-white);
  margin-left: auto;
  max-width: 300px;
  padding: 32px 22px 32px 32px;
`;

const CloseButton = styled(UnstyledButton)`
  align-self: end;
  
  // Enlarged tap-surface
  position: relative;
  top: -26px;
  right: -16px;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  font-size: calc(18 / 16 * 1rem);
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FooterLink = styled.a`
  font-size: calc(14 / 16 * 1rem);
  text-decoration: none;
  color: var(--color-gray-700);
  font-weight: var(--weight-normal);
`;