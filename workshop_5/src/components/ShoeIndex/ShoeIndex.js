import React from 'react';
import styled from 'styled-components/macro';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <HideFromPhoneAndDownWrapper>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </HideFromPhoneAndDownWrapper>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>
        <HideFromTabletAndDownWrapper>
          <Spacer size={42} />
          <ShoeSidebar />
        </HideFromTabletAndDownWrapper>
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;

  @media ${props => props.theme.queries.tabletAndDown} {
    flex-direction: column-reverse;
    gap: revert;
  }
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${props => props.theme.queries.tabletAndDown} {
    flex-basis: revert;
  }
`;

const HideFromTabletAndDownWrapper = styled.div`
  @media ${props => props.theme.queries.tabletAndDown} {
    display: none;
  }
`;

const HideFromPhoneAndDownWrapper = styled.div`
  @media ${props => props.theme.queries.phoneAndDown} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: var(--weight-medium);
`;

export default ShoeIndex;
