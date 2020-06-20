import { useState } from "react";
import { createCategory } from "../../../../redux/actions/categoryActions";
import AdminLayout from "../../../../components/core/layouts/AdminLayout";
import { useDispatch, useSelector } from "react-redux";

const create = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const { title, description } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(createCategory(formData));
  };
  return (
    <AdminLayout>
      <div>
        <form
          className="p-4 border border-secondary rounded"
          onSubmit={onSubmit}
        >
          <div className="form-group">
            <label htmlFor="newstitle">Title</label>
            <input
              type="text"
              className="form-control"
              id="newstitle"
              placeholder="Enter category title"
              name="title"
              value={title}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Description</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              name="description"
              value={description}
              onChange={onChange}
            />
          </div>

          <button type="submit" className="btn btn-primary form-control mt-3">
            Create Category
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default create;
