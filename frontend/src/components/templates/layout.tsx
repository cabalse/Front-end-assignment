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
      <header className="w-full flex flex-no-wrap flex-col xs:flex-row flex-col-reverse space-x-0 xs:space-x-4 relative bg-slate-50 shadow-md shadow-black/5 p-4">
        {header}
      </header>
      {isMobile ? (
        <main className="flex flex-col">{mainMobile}</main>
      ) : (
        <main className="flex flex-row">{mainDesktop}</main>
      )}
    </>
  );
};

export default Layout;
