import { Row } from "react-bootstrap";
import InfoCard from "../../components/admin/info-card/InfoCard";
import NewsPerWeekChart from "../../components/admin/charts/news-per-week/NewsPerWeekChart";
import PostPerCategory from "../../components/admin/charts/post-per-category/PostPerCategory";
import AdminLayout from "../../components/core/layouts/AdminLayout";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../../redux/actions/userActions";
import { useEffect } from "react";
import { getAllNews } from "../../redux/actions/newsActions";

export default function index() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const all_news = useSelector((state) => state.news.all_news);
  useEffect(() => {
    if (typeof window !== undefined && users === null) dispatch(getAllUsers());
    if (typeof window !== undefined && all_news === null)
      dispatch(getAllNews());
  }, [getAllUsers, users, all_news]);
  return (
    <AdminLayout>
      <Row>
        <InfoCard
          title={"Total User"}
          value={users && users.length}
          icon={"fa fa-users fa-2x"}
          color={"primary"}
        />
        <InfoCard
          title={"Total News"}
          value={all_news && all_news.length}
          icon={"fa fa-newspaper-o fa-2x"}
          color={"danger"}
        />
        <InfoCard
          title={"Total Comments"}
          value={10529}
          icon={"fa fa-comments fa-2x"}
          color={"secondary"}
        />
        <InfoCard
          title={"Online Users"}
          value={10529}
          icon={"fa fa-comments fa-2x"}
          color={"dark"}
        />
        <div className="col-12">
          <div className="row chart-row">
            <div className="col-md-6 bg-warning pt-4">
              <NewsPerWeekChart />
            </div>
            <div className="col-md-6 bg-dark">
              <PostPerCategory />
            </div>
          </div>
        </div>
      </Row>
    </AdminLayout>
  );
}
