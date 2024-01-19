import type { SystemStyleObject } from '@chakra-ui/styled-system';

export const noScrollbarsStyles: SystemStyleObject = {
  '::-webkit-scrollbar': {
    display: 'none',
  },
  scrollbarWidth: 'none',
};

export const overlayscrollbarsStyles: SystemStyleObject = {
  '.os-scrollbar': {
    /*      The size of the scrollbar */
    '--os-size': '9px',
    /*      The axis-perpedicular padding of the scrollbar (horizontal: padding-y, vertical: padding-x) */
    /* --os-padding-perpendicular: 0; */
    /*      The axis padding of the scrollbar (horizontal: padding-x, vertical: padding-y) */
    /* --os-padding-axis: 0; */
    /*      The border radius of the scrollbar track */
    /* --os-track-border-radius: 0; */
    /*      The background of the scrollbar track */
    /* --os-track-bg: rgba(0, 0, 0, 0.3); */
    /*      The :hover background of the scrollbar track */
    /* --os-track-bg-hover: rgba(0, 0, 0, 0.3); */
    /*      The :active background of the scrollbar track */
    /* --os-track-bg-active: rgba(0, 0, 0, 0.3); */
    /*      The border of the scrollbar track */
    /* --os-track-border: none; */
    /*      The :hover background of the scrollbar track */
    /* --os-track-border-hover: none; */
    /*      The :active background of the scrollbar track */
    /* --os-track-border-active: none; */
    /*      The border radius of the scrollbar handle */
    /* --os-handle-border-radius: 2px; */
    /*      The background of the scrollbar handle */
    /* --os-handle-bg: var(--invoke-colors-accentAlpha-500); */
    /*      The :hover background of the scrollbar handle */
    /* --os-handle-bg-hover: var(--invoke-colors-accentAlpha-700); */
    /*      The :active background of the scrollbar handle */
    /* --os-handle-bg-active: var(--invoke-colors-accentAlpha-800); */
    /*      The border of the scrollbar handle */
    /* --os-handle-border: none; */
    /*      The :hover border of the scrollbar handle */
    /* --os-handle-border-hover: none; */
    /*      The :active border of the scrollbar handle */
    /* --os-handle-border-active: none; */
    /*      The min size of the scrollbar handle */
    '--os-handle-min-size': '50px',
    /*      The max size of the scrollbar handle */
    /* --os-handle-max-size: none; */
    /*      The axis-perpedicular size of the scrollbar handle (horizontal: height, vertical: width) */
    /* --os-handle-perpendicular-size: 100%; */
    /*      The :hover axis-perpedicular size of the scrollbar handle (horizontal: height, vertical: width) */
    /* --os-handle-perpendicular-size-hover: 100%; */
    /*      The :active axis-perpedicular size of the scrollbar handle (horizontal: height, vertical: width) */
    /* --os-handle-perpendicular-size-active: 100%; */
    /*      Increases the interactive area of the scrollbar handle. */
    /* --os-handle-interactive-area-offset: 0; */
  },

  '.os-scrollbar-handle': {
    cursor: 'grab',
  },

  '.os-scrollbar-handle:active': {
    cursor: 'grabbing',
  },
};
