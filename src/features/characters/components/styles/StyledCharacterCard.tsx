"use client";

import styled from "styled-components";

export const CharacterCardContainer = styled.div`
  position: relative;
  width: 172.5px;
  background-color: black;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    border-bottom: 13px solid white;
    border-left: 13px solid transparent;
  }
`;

export const CharacterImageContainer = styled.div`
  width: 172.5px;
  border-bottom: 5px solid var(--marvel-red);
`;

export const CharacterInfoContainer = styled.div`
  align-items: center;
  background: linear-gradient(
    to bottom,
    var(--marvel-red),
    var(--marvel-red) 50%,
    black,
    black 50%
  );
  background-position: 100% 100%;
  background-size: 100% 200%;
  color: white;
  display: flex;
  height: 56px;
  justify-content: space-between;
  padding: 16px 16px 24px 16px;
  text-transform: uppercase;
  transition: all ease-in-out 300ms;

  ${CharacterCardContainer}:hover & {
    background-position: 0 0;
  }
`;
