import { useSelector, useDispatch } from "react-redux";
import {
  getAllTopics,
  deleteTopic,
} from "../../../../redux/actions/topicActions";
import { useEffect } from "react";
import AdminLayout from "../../../../components/core/layouts/AdminLayout";
import Link from "next/link";

export const index = () => {
  const topics = useSelector((state) => state.topic.topics);
  const loading = useSelector((state) => state.topic.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined" && !topics) dispatch(getAllTopics());
  }, [topics]);

  return (
    <AdminLayout>
      <div className="table-responsive py-2 py-md-5">
        <table className="table table-bordered table-hover">
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
            {topics &&
              topics.map((topic, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{topic.title}</td>
                  <td>{topic.description}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm mr-1"
                      onClick={() =>
                        confirm(
                          "Are you sure to delete this, this option is not inversible"
                        ) && dispatch(deleteTopic(topic._id, topics))
                      }
                    >
                      <i className="fa fa-times" />
                    </button>

                    <Link
                      href="/admin/topic/update"
                      as={`/admin/topic/${topic._id}`}
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
