"use client";
import React, { useState, useEffect, memo } from "react";

// Utility to render markdown-like bold text
const renderDescription = (text) =>
  text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

// Reusable Section Component
const Section = memo(({ title, content, listItems, image, isImageLeft }) => (
  <div className="row g-4 p-4 justify-content-between align-items-center">
    <div className={`col-lg-7 order-lg-${isImageLeft ? 2 : 1}`}>
      <div className="about-content">
        <div className="section-title">
          <h2 className="wow fadeInUp" data-wow-delay=".2s">{title}</h2>
        </div>
        {content && (
          <p
            className="mt-3 mt-md-0 wow fadeInUp"
            data-wow-delay=".4s"
            dangerouslySetInnerHTML={{ __html: renderDescription(content) }}
          />
        )}
        {listItems && (
          <ul className="mt-3 wow fadeInUp text-muted" data-wow-delay=".4s">
            {listItems.map((item, index) => (
              <li key={index} className="value-item d-flex align-items-center">
                <i className="fas fa-check-circle me-2" aria-hidden="true" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    <div className={`col-lg-5 order-lg-${isImageLeft ? 1 : 2}`}>
      <div className="about-image">
        <img
          src={image}
          alt={`${title} - JDM Group`}
          className="wow fadeInLeft img-fluid"
          data-wow-delay=".2s"
          loading="lazy"
        />
      </div>
    </div>
    <style jsx>{`
      .fa-check-circle{
          color:var(--theme);
        }
    `}</style>
  </div>
));


const VisionMissionFounder = ({data}) => {
  console.log("VisionMissionFounder data:", data);
 const { mission, vision, values } = data || {}
  return (
    <div className="container">
      <div className="about-wrapper">
          <>
            {mission?.is_active && (
              <Section
                title={mission.heading}
                content={mission.paragraph}
                image={mission.image_url}
                isImageLeft={false}
              />
            )}
            {vision?.is_active && (
              <Section
                title={vision.heading}
                content={vision.paragraph}
                image={vision.image_url}
                isImageLeft={true}
              />
            )}
            {values?.is_active && (
              <Section
                title={values.heading}
                listItems={values.points}
                image={values.image_url}
                isImageLeft={false}
              />
            )}
          </>
      </div>

      <style jsx>{`
        .about-content {
          transition: all 0.3s ease;
        }
        .section-title h2 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }
        .fa-check-circle {
          color: var(--theme);
        }
        ul {
          list-style-type: none;
          padding-left: 0;
        }
        .value-item {
          font-size: 14px;
        }
        .value-item:hover {
          color: #333;
        }
        .value-item .fas.fa-check-circle {
          font-size: 1rem;
        }
        .skeleton {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .skeleton-text {
          width: 80%;
          height: 1rem;
          background: #f0f0f0;
          animation: pulse 1.5s infinite;
        }
        .skeleton-image {
          width: 100%;
          height: 200px;
          background: #f0f0f0;
          animation: pulse 1.5s infinite;
        }
        .error-message {
          text-align: center;
          padding: 2rem;
        }
        .error-message button {
          padding: 0.5rem 1rem;
          background: var(--theme);
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        @keyframes pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }
        @media (max-width: 767px) {
          .row.align-items-center {
            flex-direction: column-reverse;
          }
          .col-lg-5,
          .col-lg-7 {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default memo(VisionMissionFounder);