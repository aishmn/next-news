import { useState } from "react";
import { createUser } from "../../../redux/actions/userActions";
import AdminLayout from "../../../components/core/layouts/AdminLayout";
import { useDispatch, useSelector } from "react-redux";

const create = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    passwordConfirm: "",
    role: "",
  });
  const { email, name, password, passwordConfirm, role } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(createUser(formData));
  };
  return (
    <AdminLayout>
      <div className="pb-5">
        <form
          className="p-4 border border-secondary rounded"
          onSubmit={onSubmit}
        >
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Confirm Password"
              name="passwordConfirm"
              value={passwordConfirm}
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
            Create User
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default create;
