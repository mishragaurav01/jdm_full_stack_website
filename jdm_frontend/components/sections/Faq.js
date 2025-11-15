"use client";
import { useState, useEffect } from "react";

// Default FAQ data as fallback
const defaultFaqItems = [
  {
    id: 1,
    question: "How long should a business plan be?",
    answer: "It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of letters.",
    delay: ".1s",
  },
  {
    id: 2,
    question: "What are the different stages of a construction project?",
    answer: "It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of letters.",
    delay: ".3s",
  },
  {
    id: 3,
    question: "What are the different stages of a construction project?",
    answer: "It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of letters.",
    delay: ".5s",
  },
  {
    id: 4,
    question: "What are the different stages of a construction project?",
    answer: "It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of letters.",
    delay: ".6s",
  },
  {
    id: 5,
    question: "What are the different stages of a construction project?",
    answer: "It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of letters.",
    delay: ".7s",
  },
];

export default function Faq() {
  const [isAccordion, setIsAccordion] = useState(1);
  const [faqItems, setFaqItems] = useState(defaultFaqItems); // Initialize with default FAQ items

  // Fetch FAQ data from API on mount
  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const fetchFaqData = async () => {
      try {
        const response = await fetch(`${apiUrl}/home/api/faq/`); // Hypothetical endpoint
        const data = await response.json();
        // Assuming the API returns an array of objects with id, question, and answer
        if (data && Array.isArray(data) && data.length > 0) {
          const fetchedFaqItems = data.map((item, index) => ({
            id: item.id || index + 1, // Use API ID or fallback to index
            question: item.question || "Unnamed Question",
            answer: item.answer || item.content || "No answer provided.",
            delay: defaultFaqItems[index % defaultFaqItems.length].delay, // Reuse delays
          }));
          setFaqItems(fetchedFaqItems);
        }
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
        // Fallback to defaultFaqItems (already set)
      }
    };

    fetchFaqData();
  }, []); // Runs once on mount

  const handleAccordion = (key) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };

  return (
    <>
      <section
        className="faq-section fix section-padding section-bg-2 bg-cover"
      >
        <div className="track-shape float-bob-x">
          <img src="assets/img/track.png" alt="img" />
        </div>
        <div className="container">
          <div className="faq-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="section-title">
                    {/* <h6 className="wow fadeInUp">
                      <i className="fa-regular fa-arrow-left-long" />
                      faq
                      <i className="fa-regular fa-arrow-right-long" />
                    </h6> */}
                    <h2 className="wow fadeInUp" data-wow-delay=".2s">
                      your frequently ask & questions
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
                    It is a long established fact that a reader will be
                    distracted the readable content of a page when looking at
                    layout the point of using lorem the is Ipsum less normal
                    distribution of letters.
                  </p>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".2s">
                    <div className="icon">
                      <i className="fa-regular fa-check" />
                    </div>
                    <div className="content">
                      <h5>UNIQUE PROJECTS</h5>
                      <span>
                        It is a long established fact that a reader will be
                        distracted the readable content of a page when
                      </span>
                    </div>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".4s">
                    <div className="icon">
                      <i className="fa-regular fa-check" />
                    </div>
                    <div className="content">
                      <h5>UNIQUE PROJECTS</h5>
                      <span>
                        It is a long established fact that a reader will be
                        distracted the readable content of a page when
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    {faqItems.map((item) => (
                      <div
                        key={item.id}
                        className="accordion-item mb-3 wow fadeInUp"
                        data-wow-delay={item.delay}
                      >
                        <h5 className="accordion-header">
                          <button
                            onClick={() => handleAccordion(item.id)}
                            className={
                              isAccordion === item.id
                                ? "accordion-button"
                                : "accordion-button collapsed"
                            }
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#faq${item.id}`}
                            aria-expanded={isAccordion === item.id}
                            aria-controls={`faq${item.id}`}
                          >
                            {item.question}
                          </button>
                        </h5>
                        <div
                          id={`faq${item.id}`}
                          className={
                            isAccordion === item.id
                              ? "accordion-collapse collapse show"
                              : "accordion-collapse collapse"
                          }
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">{item.answer}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}