import PropTypes from "prop-types";
import Counter1 from "./Counter1";

export default function Achievements({ data }) {
  if (!data) return null;

  return (
    <section className="achivements-section fix section-bg-2 section-padding bg-cover">
      <div className="container">
        <div className="achivements-wrapper">
          <div className="row g-4 justify-content-between">
            <div>
              <div className="achivements-content">
                <div className="section-title text-center">
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">
                    {data.heading || "Achievements"}
                  </h2>
                </div>
                <Counter1 counterData={data.items || []} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ✅ Define expected prop structure
Achievements.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        count: PropTypes.number.isRequired,
        suffix: PropTypes.string,
        prefix: PropTypes.string,
        label: PropTypes.string.isRequired,
        icon: PropTypes.node,
        delay: PropTypes.string,
      })
    ),
  }),
};
