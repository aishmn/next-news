import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../../redux/actions/authActions";
import { useRouter } from "next/router";
import Link from "next/link";

const AdminHeader = ({ setShowDrawer, showDrawer }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const handleNavigation = () => {
    if (router.pathname === "/admin") {
      router.replace("/admin");
    } else {
      router.back();
    }
  };
  return (
    <div className="">
      <nav className="navbar navbar-light d-flex-column  shadow ">
        <ul className="nav ">
          <li className="nav-item">
            <i
              className="fa fa-arrow-circle-o-left fa-lg ml-1 text-primary"
              aria-hidden="true"
              onClick={handleNavigation}
            ></i>
          </li>
          <li className="nav-item">
            <i
              className="fa fa-bars fa-lg  ml-1 text-primary"
              aria-hidden="true"
              onClick={(e) => setShowDrawer(!showDrawer)}
            ></i>
          </li>

          <div
            className="d-flex justify-content-end "
            style={{
              position: "absolute",
              right: "25px",
            }}
          >
            <li className="nav-item ">
              <i className="fa fa-user-circle-o mr-1" aria-hidden="true" />

              <span className="text-primary">{user && user.name}</span>
            </li>
            <li className="nav-item text-secondary badge ">
              <small>{user && user.role}</small>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-link btn-sm active text-dark"
                onClick={(e) => dispatch(signOut())}
              >
                <i className="fa fa-sign-in"></i> Logout
              </button>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default AdminHeader;
