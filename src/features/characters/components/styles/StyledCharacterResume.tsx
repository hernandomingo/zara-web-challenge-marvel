"use client";

import styled from "styled-components";

export const CharacterResumeContainer = styled.div`
  position: relative;
  background-color: black;
  color: white;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    border-bottom: 24px solid white;
    border-left: 24px solid transparent;
  }
`;
