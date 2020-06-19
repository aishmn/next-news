import { Row } from "react-bootstrap";
import InfoCard from "../../components/admin/info-card/InfoCard";
import NewsPerWeekChart from "../../components/admin/charts/news-per-week/NewsPerWeekChart";
import PostPerCategory from "../../components/admin/charts/post-per-category/PostPerCategory";
import AdminLayout from "../../components/core/layouts/AdminLayout";

export default function index() {
  return (
    <AdminLayout>
      <Row>
        <InfoCard
          title={"Total User"}
          value={7563}
          icon={"fa fa-users fa-2x"}
          color={"primary"}
        />
        <InfoCard
          title={"Total Posts"}
          value={8839}
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
