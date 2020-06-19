const InfoCard = ({ title, value, icon, color }) => {
  return (
    <div
      className={`col-md-3 col-lg-3 col-sm-6 text-center card p-3 my-2 py-5  btn btn-${color} rounded shadow border `}
    >
      <div className="content">
        <i className={`${icon}`} aria-hidden="true"></i>

        <h1 className=" font-weight-bolder text-warning pt-2">{value}</h1>
        <span className="text-uppercase font-weight-bold text-light">
          {title}
        </span>
      </div>
    </div>
  );
};

export default InfoCard;
