import { useRouter } from "next/router";
import AdminLayout from "../../../components/core/layouts/AdminLayout";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  getAllUsers,
  updateUser,
  getUserById,
} from "../../../redux/actions/userActions";

const index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { pid } = router.query;
  const user = useSelector((state) => state.user.user);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    role: "",
  });
  const { email, name, role } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateUser(formData, pid));
  };
  useEffect(() => {
    if (typeof window !== "undefined" && !user && pid)
      dispatch(getUserById(pid));

    if (user)
      setFormData({
        ...formData,
        email: user.email,
        name: user.name,
        role: user.role,
      });
  }, [user, getUserById, pid]);

  return (
    <AdminLayout>
      <div>
        <form className="p-5" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={onChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="fullname">Fullname</label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              placeholder="Fullname"
              name="name"
              value={name}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">User role</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              name="role"
              value={role}
              onChange={onChange}
            >
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
              <option value="user">User</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary form-control mt-3">
            Submit
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default index;
