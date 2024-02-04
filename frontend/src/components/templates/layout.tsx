import useBreakpoints from '../../hooks/usebreakpoints';

type Props = {
  header: React.ReactNode;
  mainMobile: React.ReactNode;
  mainDesktop: React.ReactNode;
};

const Layout = ({ header, mainMobile, mainDesktop }: Props) => {
  const { isMobile } = useBreakpoints();

  return (
    <>
      <header>{header}</header>
      {isMobile ? (
        <main className="flex flex-col">{mainMobile}</main>
      ) : (
        <main className="flex flex-row">{mainDesktop}</main>
      )}
    </>
  );
};

export default Layout;
