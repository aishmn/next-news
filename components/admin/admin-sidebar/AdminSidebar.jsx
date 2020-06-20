import Link from "next/link";
import { useSelector } from "react-redux";

const AdminSidebar = () => {
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);
  const leadStyle = {
    fontSize: "14px",
    letterSpacing: "1.2px",
    fontWeight: "bold",
  };
  return (
    <div
      className="bg-primary border-right border-dark container-fluid shadow text-light"
      style={{
        minHeight: "100vh",
        width: "230px",
        fontSize: "14px",
      }}
    >
      <div className="text-left pl-3 mt-1">
        <section
          className="text-center font-weight-bolder d-flex align-items-center justify-content-center"
          style={{ fontSize: "24px" }}
        >
          <i
            className="fa fa-snowflake-o fa-lg p-1 pt-3"
            aria-hidden="true"
          ></i>

          <span className="text-alert ">
            <u>admin</u>
          </span>
          <span className="text-warning">
            <u>pannel</u>
          </span>
        </section>
        <section className="py-2 mt-3 bg-gradient-primary rounded p-1">
          <div className="">
            <img
              src="https://placeimg.com/48/48/people"
              className="rounded-circle"
              alt="avatar"
            />
            <span className="pl-4 ">
              <i className="fa fa-bell fa-lg m-1" aria-hidden="true"></i>
              <i className="fa fa-comments-o m-1" aria-hidden="true"></i>
              <i className="fa fa-exclamation m-1" aria-hidden="true"></i>
            </span>
          </div>
        </section>
        <section className="p-1">
          <small>
            <b
              style={{
                fontSize: "18px",
                paddingBottom: "0px",
                letterSpacing: "1px",
              }}
            >
              {user && user.name}
            </b>
            <br />
            <u
              className="text-warning"
              style={{ fontSize: "12px", lineHeight: "1" }}
            >
              administrator
            </u>
          </small>
        </section>
      </div>

      <ul className="nav flex-column pl-3 pt-2">
        {user && !loading && user.role === "admin" && (
          <li className="nav-item">
            <small style={leadStyle} className="text-muted text-left p-1 ">
              User Settings
            </small>
            <Link href="/admin/users">
              <a className="nav-link text-light" href="#">
                <i className="fa fa-users fa-lg mr-1" aria-hidden="true"></i>
                Users
              </a>
            </Link>
            <Link href="/admin/users/create">
              <a className="nav-link text-light" href="#">
                <i
                  className="fa fa-user-plus fa-lg mr-1"
                  aria-hidden="true"
                ></i>
                Add User
              </a>
            </Link>
          </li>
        )}
        <h6 style={leadStyle} className="text-muted text-left p-1">
          News settings
        </h6>
        <li className="nav-item ">
          <Link href="/admin/news">
            <a className="nav-link text-light" href="#">
              <i
                className="fa fa-newspaper-o fa-lg mr-1"
                aria-hidden="true"
              ></i>
              News
            </a>
          </Link>
          <Link href="/admin/news/create">
            <a className="nav-link text-light" href="#">
              <i
                className="fa fa-plus-square-o fa-lg m-1"
                aria-hidden="true"
              ></i>
              Create News
            </a>
          </Link>
          <h6 style={leadStyle} className="text-muted text-left p-1">
            Tags settings
          </h6>
          <Link href="/admin/news/tag">
            <a className="nav-link text-light" href="#">
              <i className="fa fa-tags mr-1" aria-hidden="true"></i>
              Tags
            </a>
          </Link>
          <Link href="/admin/news/tag/create">
            <a className="nav-link text-light" href="#">
              <i className="fa fa-tag fa-lg mr-1" aria-hidden="true"></i>
              Create Tag
            </a>
          </Link>
          <h6 style={leadStyle} className="text-muted text-left p-1">
            Topics settings
          </h6>
          <Link href="/admin/news/topic">
            <a className="nav-link text-light" href="#">
              <i className="fa fa-bookmark fa-lg mr-1" aria-hidden="true"></i>
              Topics
            </a>
          </Link>
          <Link href="/admin/news/topic/create">
            <a className="nav-link text-light" href="#">
              <i className="fa fa-bookmark-o fa-lg mr-1" aria-hidden="true"></i>
              Create Topic
            </a>
          </Link>
          <h6 style={leadStyle} className="text-muted text-left p-1">
            Category settings
          </h6>
          <Link href="/admin/news/category">
            <a className="nav-link text-light" href="#">
              <i className="fa fa-list fa-lg mr-1" aria-hidden="true"></i>
              Category
            </a>
          </Link>
          <Link href="/admin/news/category/create">
            <a className="nav-link text-light" href="#">
              <i className="fa fa-list-alt fa-lg mr-1" aria-hidden="true"></i>
              Create Category
            </a>
          </Link>
        </li>
        <h6 style={leadStyle} className="text-muted text-left p-1">
          Configuration
        </h6>
        <li className="nav-item">
          <Link href="/admin/users">
            <a className="nav-link text-light" href="#">
              <i className="fa fa-cogs fa-lg mr-1" aria-hidden="true"></i>
              Settings
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
