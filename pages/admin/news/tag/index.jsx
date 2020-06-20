import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";
import AdminLayout from "../../../../components/core/layouts/AdminLayout";
import Link from "next/link";
import { deleteTag, getAllTags } from "../../../../redux/actions/tagActions";

export const index = () => {
  const tags = useSelector((state) => state.tag.tags);
  const loading = useSelector((state) => state.tag.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined" && !tags) dispatch(getAllTags());
  }, [tags]);

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
              <th scope="col">title</th>
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
            {tags &&
              tags.map((tag, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{tag.title}</td>

                  <td>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm mr-1"
                      onClick={() =>
                        confirm(
                          "Are you sure to delete this, this option is not inversible"
                        ) && dispatch(deleteTag(tag._id, tags))
                      }
                    >
                      <i className="fa fa-times" />
                    </button>

                    <Link
                      href="/admin/tag/update"
                      as={`/admin/tag/${tags._id}`}
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
