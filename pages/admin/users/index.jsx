import { useSelector, useDispatch } from "react-redux";
import { getAllUsers, deleteUser } from "../../../redux/actions/userActions";
import { useEffect } from "react";
import AdminLayout from "../../../components/core/layouts/AdminLayout";
import Link from "next/link";

export const index = () => {
  const users = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined" && !users) dispatch(getAllUsers());
  }, [users, getAllUsers]);

  return (
    <AdminLayout>
      <div className="table-responsive ">
        <table
          className="table table-bordered table-hover bg-warning shadow"
          style={{
            listStyleType: "none",
            fontSize: "13px",
            textAlign: "left",
          }}
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td>
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading</span>
                    </div>
                  </div>
                </td>
              </tr>
            )}
            {users &&
              users.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className="text-primary">{user.role}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm mr-1"
                      onClick={(e) =>
                        confirm(
                          "Are you sure to delete this, this option is not inversible"
                        ) && dispatch(deleteUser(user._id, users))
                      }
                    >
                      <i className="fa fa-times" />
                    </button>

                    <Link
                      href="/admin/users/update"
                      as={`/admin/users/${user._id}`}
                      shallow={true}
                    >
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm mr-1 px-2"
                      >
                        <a>
                          <i className="fa fa-info" />
                        </a>
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default index;
