import useMediaQuery from './usemediaquery';

export default function useBreakpoints() {
  const breakpoints = {
    isMobile: useMediaQuery('(max-width: 767px)'),
    isDesktop: useMediaQuery('(min-width: 768px)'),
  };

  return breakpoints;
}
