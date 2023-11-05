import {createGlobalStyle} from 'styled-components'
import chroma from 'chroma-js'

const palette = {
  $white: '#fafafa',
  $black: '#414142',
  $gray100: '#f2f2f2',
  $gray150: '#eeeeee',
  $gray200: '#dedede',
  $gray300: '#cccccc',
  $gray400: '#9e9e9e',
  $gray600: '#777777',
  $gray700: '#5e5e5e',
  $gray750: '#4a4a4a',
  $gray800: '#373737',
  $aqua: '#b0e0e6',
  $aquaLight: '#d7eff2',
  $primary100: '#60afff',
  $primary200: '#217fdb',
  $primary300: '#2c6ecb',
  $link: '#113e7e',
  $error: '#d82c0d'
}

const Theme = {
  colors: {
    ...palette,
    $backgroundPrimary: 'white',
    $backgroundSecondary: palette.$gray100,
    $contentPrimary: palette.$black,
    $contentSecondary: palette.$gray700,
    $contentDanger: palette.$error,
    $borderPrimary: palette.$gray200,
    $borderSecondary: palette.$gray100,
    $borderSeparator: palette.$gray150,
    $borderInput: palette.$gray200,
    $borderInputInvalid: palette.$error,
    $inlineFormBackground: palette.$gray100,
    $formFieldBackground: palette.$gray150,
    $inputPlaceholder: palette.$gray400,
    $inputHoverBackground: chroma
      .mix(palette.$white, palette.$gray600, 0.05)
      .css(),
    $buttonPrimaryText: '#ffffff',
    $buttonPrimaryBackground: palette.$primary300,
    $buttonSecondaryText: palette.$gray800,
    $buttonSecondaryBackground: palette.$gray150,
    $buttonLinkText: palette.$link,
    $buttonLinkHoverText: chroma(palette.$link).darken(1).css(),
    $buttonLinkActiveText: chroma(palette.$link).darken(1.3).css(),
    $buttonGhostText: palette.$gray800,
    $buttonGhostBackground: 'transparent',
    $buttonGhostHoverBackground: chroma(palette.$gray400).alpha(0.075).css(),
    $buttonGhostActiveBackground: chroma(palette.$gray600).alpha(0.1).css(),
    $linkActive: palette.$primary300,
    $anchorHoverText: chroma(palette.$link).alpha(0.5).css(),
    $linkDefaultHoverText: chroma(palette.$gray800).alpha(0.5).css(),
    $linkPrimaryText: palette.$link,
    $linkPrimaryHoverText: chroma(palette.$link).alpha(0.5).css(),
    $iconLinkHoverBackground: chroma(palette.$gray400).alpha(0.075).css(),
    $linkGhostText: palette.$gray800,
    $linkGhostHoverText: chroma(palette.$gray800).alpha(0.075).css(),
    $linkGhostBackground: 'transparent',
    $radioPrimaryBackground: palette.$primary300,
    $tooltipTextDark: palette.$gray200,
    $tooltipTextLight: palette.$gray800,
    $tooltipBackgroundDark: palette.$gray800,
    $tooltipBackgroundLight: '#ffffff',
    $popoverBackground: '#ffffff',
    $tabActiveBackground: palette.$link,
    $tableBackground: 'white',
    $tableRowHoverBackground: palette.$gray100,
    $tableRowBorder: 'transparent'
  },
  fonts: {
    $body: 'Roboto,Helvetica,Arial,sans-serif'
  },
  fontSizes: {
    $0: '0',
    $1: '10px',
    $2: '12px',
    $3: '14px',
    $4: '16px',
    $5: '18px',
    $6: '20px',
    $6_5: '22px',
    $7: '24px',
    $7_5: '26px',
    $8: '32px',
    $8_25: '36px',
    $8_5: '38px',
    $9: '48px',
    $10: '64px',
    $11: '72px'
  },
  fontWeights: {
    $thin: '100',
    $light: '300',
    $normal: '400',
    $medium: '500',
    $semibold: '600',
    $bold: '700',
    $extrabold: '800',
    $black: '900'
  },
  lineHeights: {
    $compact: '1.2',
    $heading: '1.33',
    $default: '1.5',
    $cosy: '2'
  },
  space: {
    $0: '0',
    $0_5: '2px',
    $1: '4px',
    $2: '8px',
    $3: '12px',
    $4: '16px',
    $5: '20px',
    $6: '24px',
    $7: '28px',
    $8: '32px',
    $9: '36px',
    $10: '40px',
    $11: '44px',
    $12: '48px',
    $13: '52px',
    $14: '56px',
    $15: '60px',
    $16: '64px',
    $17: '128px'
  },
  radius: {
    $default: '4px'
  },
  shadows: {
    $z0: 'none',
    $z1: '0 1px 1px 0 rgba(0, 0, 0, 0.10), 0 2px 1px -1px rgba(0, 0, 0, 0.08), 0 1px 3px 0 rgba(0, 0, 0, 0.16)',
    $z2: '0 2px 2px 0 rgba(0, 0, 0, 0.10), 0 3px 1px -2px rgba(0, 0, 0, 0.08), 0 1px 5px 0 rgba(0, 0, 0, 0.16)',
    $z3: '0 3px 4px 0 rgba(0, 0, 0, 0.10), 0 3px 3px -2px rgba(0, 0, 0, 0.08), 0 1px 8px 0 rgba(0, 0, 0, 0.16)',
    $z4: '0 4px 5px 0 rgba(0, 0, 0, 0.10), 0 1px 10px 0 rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.16)',
    $z6: '0 6px 10px 0 rgba(0, 0, 0, 0.10), 0 1px 18px 0 rgba(0, 0, 0, 0.08), 0 3px 5px -1px rgba(0, 0, 0, 0.16)',
    $z8: '0 8px 10px 1px rgba(0, 0, 0, 0.10), 0 3px 14px 2px rgba(0, 0, 0, 0.08), 0 5px 5px -3px rgba(0, 0, 0, 0.16)',
    $z9: '0 9px 12px 1px rgba(0, 0, 0, 0.10), 0 3px 16px 2px rgba(0, 0, 0, 0.08), 0 5px 6px -3px rgba(0, 0, 0, 0.16)',
    $z12: '0 12px 17px 2px rgba(0, 0, 0, 0.10), 0 5px 22px 4px rgba(0, 0, 0, 0.08), 0 7px 8px -4px rgba(0, 0, 0, 0.16)',
    $z16: '0 16px 24px 2px rgba(0, 0, 0, 0.10), 0 6px 30px 5px rgba(0, 0, 0, 0.08), 0 8px 10px -5px rgba(0, 0, 0, 0.16)',
    $z24: '0 24px 38px 3px rgba(0, 0, 0, 0.10), 0 9px 46px 8px rgba(0, 0, 0, 0.08), 0 11px 15px -7px rgba(0, 0, 0, 0.16)'
  }
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        ::-webkit-scrollbar {
          width: 7px;
          height: 2px;
        }
        ::-webkit-scrollbar-track {
          background-color: #f1f1f1;
          border-radius:${Theme.radius.$default};

        }
        ::-webkit-scrollbar-thumb {
          background-color:rgb(179, 179, 179);
          border-radius:${Theme.radius.$default};
        }
    }

    :root {
        font-family: ${Theme.fonts.$body};
        font-size: ${Theme.fontSizes.$4};
        line-height: ${Theme.fontSizes.$7};

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    body {
        background-color: ${Theme.colors.$white};
        color: ${Theme.colors.$gray800};
    }

    ul { list-style: none }

    a {
        text-decoration: none;
        color: ${Theme.colors.$link};
    }

    img, video {
        height: auto;
        max-width: 100%;
    }

    iframe { border: 0 }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`
export default Theme
