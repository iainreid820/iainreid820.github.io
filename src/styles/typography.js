import "typeface-inter"
import css from "@emotion/css"
import dimensions from "../styles/dimensions"

const typeStyles = css`
  html {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    word-spacing: 0.03em;
    letter-spacing: -0.016em;
  }

  @supports (font-variation-settings: normal) {
    html {
      font-family: 'Inter var', sans-serif;
    }
  }

  h1 {
    font-size: 2.8em;
    line-height: 1.45;
    font-weight: 800;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      font-size: 2.25em;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      font-size: 2em;
    }
  }

  h2 {
    margin-bottom: 2rem;
    margin-top: 1.5rem;
    font-size: 1.9em;
    line-height: 1.1;
  }

  h3 {
    line-height: 1.2;
    font-size: 1.5em;
  }

  h5 {
    margin-bottom: 1.45rem;
    font-weight: 500;
    line-height: 20px;
    font-size: 0.95em;
  }

  h6 {
    font-size: 0.9em;
    font-weight: 500;
    margin: 0;
  }

  p {
    line-height: 1.9;
    word-spacing: 0em;
    letter-spacing: 0em;
  }

  a {
    text-decoration: none;
    color: currentColor;

    &:hover {
      cursor: pointer;
    }
  }
`

export default typeStyles
