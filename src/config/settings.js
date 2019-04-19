export default {
  canvasNavigation: { // Set the hight and width of canvas thumbnails in the  CanvasNavigation companion window
    height: 50,
    width: 50,
  },
  selectedTheme: 'light', // dark also available
  themes: {
    dark: {
      palette: {
        type: 'dark',
        primary: {
          main: '#4db6ac',
        },
        shades: {
          dark: '#000000',
          main: '#424242',
          light: '#616161',
        }
      }
    },
    light: {
      palette: {
        type: 'light',
      }
    }
  },
  theme: { // Sets up a MaterialUI theme. See https://material-ui.com/customization/default-theme/
    palette: {
      type: 'light',
      primary: {
        main: '#1967d2',
      },
      secondary: {
        main: '#ffa224',
      },
      shades: { // Shades that can be used to offset color areas of the Workspace / Window
        dark: '#eeeeee',
        main: '#ffffff',
        light: '#f5f5f5',
      },
      error: {
        main: '#b00020',
      },
      section_divider: 'rgba(0, 0, 0, 0.25)',
    },
    typography: {
      fontSize: 16,
      body1: {
        fontSize: "1rem",
        letterSpacing: "0em",
        lineHeight: "1.6em",
      },
      body2: {
        fontSize: "0.878rem",
        letterSpacing: "0.015em",
        lineHeight: "1.6em",
      },
      button: {
        fontSize: "0.878rem",
        letterSpacing: "0.09em",
        lineHeight: "2.25rem",
        textTransform: "uppercase",
      },
      caption: {
        fontSize: "0.772rem",
        letterSpacing: "0.033em",
        lineHeight: "1.6rem",
      },
      body1Next: {
        fontSize: "1rem",
        letterSpacing: "0em",
        lineHeight: "1.6em",
      },
      body2Next: {
        fontSize: "0.878rem",
        letterSpacing: "0.015em",
        lineHeight: "1.6em",
      },
      buttonNext: {
        fontSize: "0.878rem",
        letterSpacing: "0.09em",
        lineHeight: "2.25rem",
      },
      captionNext: {
        fontSize: "0.772rem",
        letterSpacing: "0.33em",
        lineHeight: "1.6rem",
      },
      overline: {
        fontSize: "0.678rem",
        fontWeight: 500,
        letterSpacing: "0.166em",
        lineHeight: "2em",
        textTransform: "uppercase",
      },
      h1: {
        fontSize: "2.822rem",
        letterSpacing: "-0.015em",
        lineHeight: "1.2em",
      },
      h2: {
        fontSize: "1.575rem",
        letterSpacing: "0em",
        lineHeight: "1.33em",
      },
      h3: {
        fontSize: "1.383rem",
        fontWeight: 300,
        letterSpacing: "0em",
        lineHeight: "1.33em",
      },
      h4: {
        fontSize: "1.215rem",
        letterSpacing: "0.007em",
        lineHeight: "1.45em",
      },
      h5: {
        fontSize: "1.138rem",
        letterSpacing: "0.005em",
        lineHeight: "1.55em",
      },
      h6: {
        fontSize: "1.067rem",
        fontWeight: 400,
        letterSpacing: "0.01em",
        lineHeight: "1.6em",
      },
      subtitle1: {
        fontSize: "0.937rem",
        letterSpacing: "0.015em",
        lineHeight: "1.6em",
        fontWeight: 300,
      },
      subtitle2: {
        fontSize: "0.878rem",
        fontWeight: 500,
        letterSpacing: "0.02em",
        lineHeight: "1.75em",
      },
      useNextVariants: true // set so that console deprecation warning is removed
    },
    overrides: {
      MuiTooltip: { // Overridden from https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Tooltip/Tooltip.js#L40-L70
        tooltipPlacementLeft: {
          ['@media (min-width:600px)']: {
            margin: 0,
          },
        },
        tooltipPlacementRight: {
          ['@media (min-width:600px)']: {
            margin: 0,
          },
        },
        tooltipPlacementTop: {
          ['@media (min-width:600px)']: {
            margin: 0,
          },
        },
        tooltipPlacementBottom: {
          ['@media (min-width:600px)']: {
            margin: 0,
          },
        },
      },
    },
    props: {
      MuiButtonBase: {
        disableTouchRipple: true,
      },
    },
  },
  language: 'en', // The default language set in the application
  availableLanguages: { // All the languages available in the language switcher
    de: 'Deutsch',
    en: 'English',
    cs: 'Česky',
  },
  displayAllAnnotations: false, // Configure if annotations to be displayed on the canvas by default when fetched
  translations: { // Translations can be added to inject new languages or override existing labels
  },
  window: {
    allowClose: true, // Configure if windows can be closed or not
    allowMaximize: true, // Configure if windows can be maximized or not
    defaultSideBarPanel: 'info', // Configure which sidebar is selected by default. Options: info, rights, canvas, annotations
    defaultView: 'single',  // Configure which viewing mode (e.g. single, book, gallery) for windows to be opened in
    hideAnnotationsPanel: false, // Configure to hide the annotations panel in the WindowSideBarButtons
    sideBarOpenByDefault: false, // Configure if the sidebar (and its content panel) is open by default
  },
  windows: [], // Array of windows to be open when mirador initializes (each object should at least provide a loadedManifest key with the value of the IIIF presentation manifest to load)
  thumbnailNavigation: {
    defaultPosition: 'off', // Which position for the thumbnail navigation to be be displayed. Other possible values are "far-bottom" or "far-right"
    height: 130, // height of entire ThumbnailNavigation area when position is "far-bottom"
    width: 100, // width of one canvas (doubled for book view) in ThumbnailNavigation area when position is "far-right"
  },
  workspace: {
    showZoomControls: false, // Configure if zoom controls should be displayed by default
    type: 'mosaic', // Which workspace type to load by default. Other possible values are "elastic"
  },
  workspaceControlPanel: {
    enabled: true, // Configure if the control panel should be rendered.  Useful if you want to lock the viewer down to only the configured manifests
  },
};
