import { useSelector, useDispatch } from "react-redux";
import {
  getAllCategory,
  deleteCategory,
} from "../../../../redux/actions/categoryActions";
import { useEffect } from "react";
import AdminLayout from "../../../../components/core/layouts/AdminLayout";
import Link from "next/link";

export const index = () => {
  const categories = useSelector((state) => state.category.categories);
  const loading = useSelector((state) => state.category.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined" && !categories)
      dispatch(getAllCategory());
  }, [categories]);

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
              <th scope="col">Title</th>
              <th scope="col">Description</th>
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
            {categories &&
              categories.map((category, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{category.title}</td>
                  <td>{category.description}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm mr-1"
                      onClick={() =>
                        confirm(
                          "Are you sure to delete this, this option is not inversible"
                        ) && dispatch(deleteCategory(category._id, categories))
                      }
                    >
                      <i className="fa fa-times" />
                    </button>

                    <Link
                      href="/admin/category/update"
                      as={`/admin/category/${category._id}`}
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
