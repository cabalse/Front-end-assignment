type Props = {
  header: React.ReactNode;
  mainMobile: React.ReactNode;
  mainDesktop: React.ReactNode;
  breakpoint: number;
};

const Layout = ({ header, mainMobile, mainDesktop }: Props) => {
  return (
    <>
      <header className="w-full flex flex-no-wrap flex-col xs:flex-row flex-col-reverse space-x-0 xs:space-x-4 relative bg-slate-50 shadow-md shadow-black/5 p-4">
        {header}
      </header>
      <main className="flex flex-row">{mainDesktop}</main>
      <main className="flex flex-col">{mainMobile}</main>
    </>
  );
};

export default Layout;
