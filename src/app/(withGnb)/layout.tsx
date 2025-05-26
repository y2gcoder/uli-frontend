export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>GNB</header>
      {children}
      <footer>FOOTER</footer>
    </>
  );
}
