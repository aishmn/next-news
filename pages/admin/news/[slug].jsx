import { useState, useEffect } from "react";
import { getNewsBySlug, updateNews } from "../../../redux/actions/newsActions";
import AdminLayout from "../../../components/core/layouts/AdminLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../../redux/actions/categoryActions";
import { getAllTags } from "../../../redux/actions/tagActions";
import { getAllTopics } from "../../../redux/actions/topicActions";
import MultiSelect from "react-multi-select-component";
import { useRouter } from "next/router";

const create = () => {
  const router = useRouter();
  const { slug: qslug } = router.query;
  const categories = useSelector((state) => state.category.categories);
  const topics = useSelector((state) => state.topic.topics);
  const tags = useSelector((state) => state.tag.tags);
  const user = useSelector((state) => state.auth.user);
  const news = useSelector((state) => state.news.news);
  const loading = useSelector((state) => state.news.loading);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    author: "",
    coverImage: "",
    province: "",
    category: "",
    slug: "",
    status: "",
  });
  const [selectedTag, setSelectedTag] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState([]);
  const {
    title,
    body,
    coverImage,
    province,
    category,
    slug,
    status,
  } = formData;

  useEffect(() => {
    if (user) setFormData({ ...formData, author: user._id });
    if (!tags) dispatch(getAllTags());
    if (!categories) dispatch(getAllCategory());
    if (!topics) dispatch(getAllTopics());
    if (!news && qslug) dispatch(getNewsBySlug(qslug));
  }, [getAllTopics, getAllTags, getAllCategory, category, user, getNewsBySlug]);

  const tag_options = [];
  const topic_options = [];
  if (tags)
    tags.map((tag) => tag_options.push({ label: tag.title, value: tag._id }));
  if (topics)
    topics.map((topic) =>
      topic_options.push({ label: topic.title, value: topic._id })
    );

  useEffect(() => {
    if (news) {
      setFormData({
        ...formData,
        title: news.title,
        body: news.body,
        province: news.province,
        category: news.category._id,
        status: news.status,
      });
      setSelectedTopic([
        ...news.topic.map((el) => ({ label: el.title, value: el._id })),
      ]);

      setSelectedTag([
        ...news.tag.map((el) => ({ label: el.title, value: el._id })),
      ]);
    }
  }, [news]);

  useEffect(() => {
    if (title) setFormData({ ...formData, slug: title.replace(/\s+/g, "-") });
  }, [title]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(router);
    const body = {
      ...formData,
      tag: selectedTag.map((tag) => tag.value),
      topic: selectedTopic.map((topic) => topic.value),
    };
    dispatch(updateNews(body, news._id, router));
  };

  return (
    <AdminLayout>
      <div>
        {news === null ? (
          <div className="container text-center p-5 ">
            The news with that slug doesnont exists!
          </div>
        ) : (
          <form className="p-5" onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="newstitle">Title</label>
              <input
                type="text"
                className="form-control"
                id="newstitle"
                name="title"
                value={title}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="slug">Slug</label>
              <input
                type="text"
                className="form-control"
                id="slug"
                placeholder="Enter slug"
                name="slug"
                value={slug}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Body</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                name="body"
                value={body}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Category</label>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                name="category"
                value={category}
                onChange={onChange}
              >
                <option value={""}>Choose one...</option>
                {categories &&
                  categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.title}
                    </option>
                  ))}
              </select>
            </div>
            <label htmlFor="topics">Topics</label>
            <MultiSelect
              options={topic_options}
              value={selectedTopic}
              onChange={setSelectedTopic}
              labelledBy={"topics"}
              className=" mb-3"
            />
            <label htmlFor="tags">Tags</label>
            <MultiSelect
              options={tag_options}
              value={selectedTag}
              onChange={setSelectedTag}
              labelledBy={"tags"}
              className=" mb-3"
            />
            <div className="form-group my-2">
              <label htmlFor="exampleFormControlSelect1">Province</label>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                name="province"
                value={province}
                onChange={onChange}
              >
                <option value={""}>Choose one...</option>
                <option value={"Province 1"}>Province 1</option>
                <option value={"Province 2"}>Province 2</option>
                <option value={"Province 3"}>Province 3</option>
                <option value={"Province 4"}>Province 4</option>
                <option value={"Province 5"}>Province 5</option>
                <option value={"Province 6"}>Province 6</option>
                <option value={"Province 7"}>Province 7</option>
                <option value={"International"}>International</option>
              </select>
            </div>

            <div className="form-group my-2">
              <label htmlFor="exampleFormControlSelect1">Status</label>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                name="status"
                value={status}
                onChange={onChange}
              >
                <option value={""}>Choose one...</option>
                <option value={"pending"}>Pending</option>
                <option value={"published"}>Published</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary form-control mt-3">
              Submit
            </button>
          </form>
        )}
      </div>
    </AdminLayout>
  );
};

export default create;
