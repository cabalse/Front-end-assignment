import useMediaQuery from './usemediaquery';

export default function useBreakpoints() {
  const breakpoints = {
    isMobile: useMediaQuery('(max-width: 768px)'),
    isDesktop: useMediaQuery('(min-width: 769px)'),
  };

  return breakpoints;
}
