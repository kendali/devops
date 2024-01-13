const Feature = ({ title, img, dsc }) => {
  return (
    <div className="feature-card my-7 rounded-lg text-center cursor-pointer p-3">
      <div className="card-header">
        <img className="mx-auto" width={400} src={img} alt="" />
      </div>
      <div className="card-body">
      <h4 className="text-xl font-medium">{title}</h4>
        <p className="">{dsc}</p>
      </div>
    </div>
  );
};

export default Feature;
