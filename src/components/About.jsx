import React from "react"
import styled from "@emotion/styled"
import dimensions from "../styles/dimensions"

const AboutContainer = styled("div")`
  padding-top: 1em;
  display: grid;
  grid-template-columns: 8em 1fr 8em;
  grid-gap: 3em;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-template-columns: 1fr 3fr 1fr;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-template-columns: 7em 1fr;
    grid-template-rows: 3em 1fr;
    grid-gap: 2em;
  }
`

const AboutLinkContainer = styled("div")`
  padding-top: 1em;
  padding-bottom: 3em;
  display: flex;
  flex-direction: column;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-row: 2;
  }
`

const AboutLink = styled("a")`
  margin-bottom: 1.5em;
  font-weight: 600;
  line-height: 1.9;
  text-decoration: none;
  color: currentColor;

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    opacity: 0;
    transition: all 400ms ease-in-out;
  }

  &:hover {
    span {
      transform: translateX(0px);
      opacity: 1;
      transition: all 150ms ease-in-out;
    }
  }
`

const AboutBio = styled("div")`
  padding-bottom: 3em;
  max-width: 480px;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-row: 2;
  }
`

export default ({ socialLinks }) => (
  <AboutContainer>
    <AboutLinkContainer>
      {Object.entries(socialLinks).map(([provider, url], i) => (
        <AboutLink key={i} href={url} target="_blank" rel="noopener noreferrer">
          {provider}
          <span>&#8594;</span>
        </AboutLink>
      ))}
    </AboutLinkContainer>
    <AboutBio>
      <p>A little about me — my name is Iain, although I often go by Chaff, or variations on that in a few online communities. I'm a programmer by trade, living and working in London.</p>
      <p>I'm a huge geek if you haven't already gathered from this site, some people have said I have too many keyboards, I've no idea what they're on about.</p>
    </AboutBio>
  </AboutContainer>
)
