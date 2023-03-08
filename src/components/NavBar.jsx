import { Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;

//horizontal
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;
// width: 33.3333333333333333333333333333333333333333333%;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
`;

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>Left</Language>
          <SearchContainer>
            <Search></Search>
          </SearchContainer>
        </Left>
        <Center>center bbbbbbbbbbbbbbbbbb</Center>
        <Right>right ccccccccccccccccccccc</Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
