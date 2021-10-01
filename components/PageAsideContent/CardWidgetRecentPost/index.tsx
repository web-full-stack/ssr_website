import { connect } from "react-redux";
import { getRandomNumImage } from "./../../../utils";
import moment from "moment";
import Config from "../../../config";
import BaseImage from "./../../../components/BaseImage";

// 最近文章
const Index = (props) => {
  let recentArticleData: any = { items: [] };
  try {
    recentArticleData = props.recentArticleData;
  } catch (error) {
    console.log(error);
  }
  const spmFn = (opt) => {
    try {
      let pathname = window.location.pathname;
      let [x, b] = pathname.split("/");
      b == "" ? (b = "home") : "";
      window.spm(`${Config.blogCode}.${b}.recent_btn_click`, {
        title: opt.title,
        id: opt.id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="card-widget card-recent-post">
      <div className="item-headline">
        <i className="fas fa-history"></i>
        <span>最新文章</span>
      </div>
      <div className="aside-list">
        {recentArticleData.items.map((item) => (
          <div className="aside-list-item" onClick={() => spmFn(item)}>
            <a
              className="thumbnail"
              href={`/article/${item.id}`}
              title={item.title}
            >
              <BaseImage alt={item.title} />
            </a>
            <div className="content">
              <a
                className="title"
                href={`/article/${item.id}`}
                title={item.title}
              >
                {item.title}
              </a>
              <time
              // datetime="2021-01-02T10:11:22.000Z"
              // title="發表於 2021-01-02 18:11:22"
              >
                {moment(Number(item.release_time)).format("YYYY-MM-DD")}
              </time>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default connect((state) => state)(Index);
