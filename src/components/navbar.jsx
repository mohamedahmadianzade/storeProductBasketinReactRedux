import { useSelector } from "react-redux";

export default function Navbar(props) {
  let totalCount = useSelector((state) => state.app.totalCount);
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <span className="navbar-brand mb-0 h1">store</span>
            <span className="navbar-brand mb-0 h1">
              <span className="badge bg-info">{totalCount}</span>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
