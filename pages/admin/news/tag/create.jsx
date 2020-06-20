import { useState } from "react";
import { createTag } from "../../../../redux/actions/tagActions";
import AdminLayout from "../../../../components/core/layouts/AdminLayout";
import { useDispatch } from "react-redux";

const create = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
  });
  const { title } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(createTag(formData));
  };
  return (
    <AdminLayout>
      <div className="pb-5">
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
              placeholder="Enter tag title"
              name="title"
              value={title}
              onChange={onChange}
            />
          </div>

          <button type="submit" className="btn btn-primary form-control mt-3">
            Create Tag
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default create;
