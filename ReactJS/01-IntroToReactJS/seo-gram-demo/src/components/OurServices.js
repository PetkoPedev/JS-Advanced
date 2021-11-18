import OnSiteSEO from "./OnSiteSEO";

function OurServices() {
  return (
    <div className="page-section bg-light">
      <div className="container">
        <div className="text-center wow fadeInUp">
          <div className="subhead">Our services</div>
          <h2 className="title-section">How SEO Team Can Help</h2>
          <div className="divider mx-auto"></div>
        </div>

        <div className="row">
          <OnSiteSEO
            name="Michael Smith"
            description="We analyse your website's structure, internal architecture & other key"
          />

          <OnSiteSEO
            name="George Balooney"
            description="We provide deep analysis of your product."
          />
          <OnSiteSEO
            name="Christian Snail"
            description="We ensure key processes are maintained strictly."
          />
          <OnSiteSEO
            name="Dennis Boardman"
            description="We strive for the best target in the given timeline."
          />
          <OnSiteSEO
            name="Francesca Howards"
            description="We are flexible in the timeline of events during a sprint."
          />
          <OnSiteSEO
            name="Diana Bros"
            description="We analyse your website's structure, internal architecture & other key"
          />
          <OnSiteSEO
            name="Claudia Martinez"
            description="We analyse your website's structure, internal architecture & other key"
          />
          <OnSiteSEO
            name="Esmeralda Duendez"
            description="We analyse your website's structure, internal architecture & other key"
          />
        </div>

      </div>
    </div>
  );
}

export default OurServices;