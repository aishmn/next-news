import AdminLayout from "../../../components/core/layouts/AdminLayout";
import { getAllNews, deleteNews } from "../../../redux/actions/newsActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Link from "next/link";
export const index = () => {
  const dispatch = useDispatch();
  const all_news = useSelector((state) => state.news.all_news);
  useEffect(() => {
    if (typeof window !== "undefined" && all_news === null)
      dispatch(getAllNews());
    console.log(all_news);
  }, [getAllNews]);
  return (
    <AdminLayout>
      <div className="table-responsive py-2 ">
        <table
          className="table table-bordered table-hover bg-warning"
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
              <th scope="col">Body</th>
              <th scope="col">Category</th>
              <th scope="col">Tags</th>
              <th scope="col">topic</th>
              <th scope="col">Status</th>
              <th scope="col">Author</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {all_news &&
              all_news.map((news, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{news.title}</td>
                  <td>{news.body}</td>
                  <td>{news.category.title}</td>
                  <td>
                    <ul
                      className="text-secondary"
                      style={{
                        listStyleType: "none",
                        fontSize: "12px",
                        textAlign: "left",
                      }}
                    >
                      {news.tag.map((tg) => (
                        <li>{tg.title}</li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul
                      className="text-primary"
                      style={{
                        listStyleType: "none",
                        fontSize: "12px",
                        textAlign: "left",
                      }}
                    >
                      {news.topic.map((tg) => (
                        <li>{tg.title}</li>
                      ))}
                    </ul>
                  </td>
                  <td>{news.status}</td>
                  <td>{news.author.name}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm mr-1"
                      onClick={() =>
                        confirm(
                          "Are you sure to delete this, this option is not inversible"
                        ) && dispatch(deleteNews(news._id, all_news))
                      }
                    >
                      <i className="fa fa-times" />
                    </button>

                    <Link
                      href="/admin/news/update"
                      as={`/admin/news/${news.slug}`}
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
