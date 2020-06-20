import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../../redux/actions/authActions";

const AdminHeader = ({ setShowDrawer, showDrawer }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <nav className="navbar navbar-light ">
      <ul className="nav text-light">
        <span
          className="btn"
          onClick={(e) => setShowDrawer(!showDrawer)}
          type="button"
        >
          <i
            className="fa fa-arrow-circle-left fa-2x ml-1 text-primary"
            aria-hidden="true"
          ></i>
        </span>
        <h5 className="navbar-brand font-weight-bold self-align-center navlink">
          ADMINISTRATION
        </h5>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">
            Pricing
          </a>
        </li> */}
      </ul>
      <div className="ml-auto">
        <ul className="nav">
          <li className="nav-item text-primary ">
            <i className="fa fa-user-circle-o mr-1" aria-hidden="true" />

            <span className="text-primary">{user && user.name}</span>
          </li>
          <li className="nav-item text-secondary badge ">
            <small>{user && user.role}</small>
          </li>

          <li className="nav-item  ml-md-2">
            <button
              type="button"
              className="btn btn-link btn-sm active text-dark"
              onClick={(e) => dispatch(signOut())}
            >
              <i className="fa fa-sign-in"></i> Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminHeader;
