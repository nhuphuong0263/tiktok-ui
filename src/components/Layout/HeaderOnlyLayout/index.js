import Header from './Header';
// import Sidebar from './Sidebar';

function HeaderOnlyLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnlyLayout;