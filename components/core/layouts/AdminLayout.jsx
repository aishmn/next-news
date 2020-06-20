import { Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import AdminSidebar from "../../admin/admin-sidebar/AdminSidebar";
import AdminHeader from "../../admin/admin-header/AdminHeader";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../../redux/actions/authActions";
import Alert from "../../alert/Alert";
import { setNotification } from "../../../redux/actions/notificationActions";
import setAuthToken from "../../../lib/setAuthToken";
import Router from "next/router";
import Link from "next/link";

const AdminLayout = ({ children }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const clientSide = typeof window !== "undefined";
  const is_authenticated = useSelector((state) => state.auth.is_authenticated);
  const loading = useSelector((state) => state.auth.loading);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (clientSide) {
      setAuthToken(localStorage.getItem("token"));
      if (!user) dispatch(loadUser());
    }
  }, [loadUser, loading, user]);

  if (clientSide && !loading && is_authenticated === false)
    Router.replace("/auth/signin");

  if (user && user.role == "user") {
    dispatch(
      setNotification(
        "You are not authorized to access admin area, reported to the admin"
      )
    );
    Router.replace("/");
  }

  return (
    <>
      {!loading && user && user.role !== "user" && (
        <Row>
          <Alert />

          {showDrawer && <AdminSidebar />}

          <div className="col m-0 shadow ">
            <AdminHeader
              setShowDrawer={setShowDrawer}
              showDrawer={showDrawer}
            />
            <div className="mx-md-5 mx-4">
              {/* link section */}
              <section className="my-1 col text-center">
                <Link href="/admin">
                  <a className="btn btn-outline-danger btn-sm rounded m-1">
                    Homepage
                  </a>
                </Link>
                <Link href="/admin/news">
                  <a className="btn btn-outline-danger btn-sm rounded m-1">
                    News
                  </a>
                </Link>
                <Link href="/admin/news/create">
                  <a className="btn btn-outline-danger btn-sm rounded m-1">
                    Create News
                  </a>
                </Link>
                <Link href="/admin/news/topic">
                  <a className="btn btn-outline-primary btn-sm rounded m-1">
                    Topics
                  </a>
                </Link>
                <Link href="/admin/news/topic/create">
                  <a className="btn btn-outline-primary btn-sm rounded m-1">
                    Create Topics
                  </a>
                </Link>
                <Link href="/admin/news/tag">
                  <a className="btn btn-outline-secondary btn-sm rounded m-1">
                    Tags
                  </a>
                </Link>
                <Link href="/admin/news/tag/create">
                  <a className="btn btn-outline-secondary btn-sm rounded m-1">
                    Create Tags
                  </a>
                </Link>
                <Link href="/admin/users">
                  <a className="btn btn-outline-danger btn-sm rounded m-1">
                    Users
                  </a>
                </Link>
                <Link href="/admin/users/create">
                  <a className="btn btn-outline-danger btn-sm rounded m-1">
                    Create new User
                  </a>
                </Link>
              </section>
              {children}
            </div>
          </div>
        </Row>
      )}
    </>
  );
};

export default AdminLayout;
