import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import SearchBar from "./SearchBar";

const Nav = ({ chosen, setChosen }) => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Cloudified
        </Link>
      </h1>
      <SearchBar setChosen={setChosen} />
      <div id="horizontal">
        <ul>
          <li>
            <Link id="link" to="/search">
              SEARCH
            </Link>
          </li>
          <li>
            <Link id="link" to="/steam">
              STEAM
            </Link>
          </li>
          <li>
            <Link id="link" to="/gameservicies">
              GAME SERVICIES
            </Link>
          </li>
        </ul>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 8vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #363841;
  a {
    color: white;
    text-decoration: none;
  }
  #horizontal > ul {
    display: flex;
    list-style: none;
  }
  #horizontal > ul > li {
    padding-left: 1rem;
    position: relative;
  }
  #logo {
    font-size: 2rem;
    font-family: "Comfortaa", cursive;
    font-weight: bold;
  }
  #link {
    font-size: 1rem;
    font-weight: bold;
    padding-right: 60px;
  }
`;

export default Nav;
