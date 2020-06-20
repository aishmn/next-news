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
      <nav className="navbar  navbar-light shadow">
        <i
          className="fa fa-arrow-circle-o-left fa-2x  text-primary"
          aria-hidden="true"
          onClick={handleNavigation}
        ></i>
        <i
          className="fa fa-bars fa-2x  ml-1 mr-auto text-primary "
          aria-hidden="true"
          onClick={(e) => setShowDrawer(!showDrawer)}
        ></i>

        <div id="navbarText">
          <span className="navbar-text">
            <i className="fa fa-user-circle-o mr-1" aria-hidden="true" />
            <span className="text-primary">{user && user.name}</span>
            <span className="badge text-warning rounded">
              <sup>
                <u>{user && user.role}</u>
              </sup>
            </span>
            <button
              type="button"
              className="btn btn-link btn-sm active text-dark"
              onClick={(e) => dispatch(signOut())}
            >
              <i className="fa fa-sign-in"></i> Logout
            </button>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default AdminHeader;
