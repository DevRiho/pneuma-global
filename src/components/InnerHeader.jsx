const InnerHeader = ({ title }) => (
  <section className="tp-breadcrumb__area p-relative fix">
    <div className="tp-breadcrumb__shape-1 z-index-5">
      <img src="/assets/breadcrumb-shape-1.png" alt="" />
    </div>
    <div className="tp-breadcrumb__shape-2 z-index-5">
      <img src="/assets/breadcrumb-shape-2.png" alt="" />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="tp-breadcrumb__content z-index-5">
            <h3 className="tp-breadcrumb__title">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default InnerHeader;
