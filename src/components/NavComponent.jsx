import { Link } from "react-router-dom";

function NavComponent() {
  //const navigate = useNavigate();

  return (
    <div>
      <nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/daywork">
                    每日任務
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/week1">
                    第一週
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/week2">
                    Week2
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/week3">
                    Week3
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/week4">
                    Week4
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </nav>
    </div>
  );
}

export default NavComponent;
