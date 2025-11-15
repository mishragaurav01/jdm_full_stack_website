// components/sections/TeamDetails1.tsx
import Link from "next/link";
// import Image from "next/image";
import React from "react";

const renderDescription = (text) => {
  return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
};

export default function TeamDetails1({ member }) {
  return (
    <section className="team-details-section fix section-padding">
      <div className="container">
        <div className="team-details-wrapper">
          <div className="team-details-items">
            <div className="details-image">
              <img
                src={member?.image || "/assets/img/team/details-1.jpg"}
                alt={member?.name || "Team member"}
                width={400}
                height={400}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="team-details-content">
              <div className="details-header">
                <h3>{member?.name}</h3>
                <span>{member?.role}</span>
              </div>
              <p className="cont" dangerouslySetInnerHTML={{
                      __html: renderDescription(member?.bio),
                    }}/>
              {member?.phone && (
                <h6 className="team-details-info">
                  <span className="text-title">Phone Number:</span>
                  <span className="text-data">
                    <Link href={`tel:${member.phone}`}>{member.phone}</Link>
                  </span>
                </h6>
              )}
              {member?.email && (
                <h6 className="team-details-info">
                  <span className="text-title">Email:</span>
                  <span className="text-data">
                    <Link href={`mailto:${member.email}`}>{member.email}</Link>
                  </span>
                </h6>
              )}
              {member?.website && (
                <h6 className="team-details-info">
                  <span className="text-title">Website:</span>
                  <span className="text-data">
                    <Link href={member.website}>{member.website}</Link>
                  </span>
                </h6>
              )}
              {member?.experience && (
                <h6 className="team-details-info">
                  <span className="text-title">Experience:</span>
                  <span className="text-data">{member.experience}</span>
                </h6>
              )}
              {member?.availability && (
                <h6 className="team-details-info">
                  <span className="text-title">Availability:</span>
                  <span className="text-data">{member.availability}</span>
                </h6>
              )}
              {(member?.social?.facebook ||
                member?.social?.twitter ||
                member?.social?.youtube ||
                member?.social?.linkedin) && (
                <div className="social-icon d-flex align-items-center">
                  {member?.social?.facebook && (
                    <Link href={member.social.facebook} aria-label="Facebook profile">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  )}
                  {member?.social?.twitter && (
                    <Link href={member.social.twitter} aria-label="Twitter profile">
                      <i className="fab fa-twitter" />
                    </Link>
                  )}
                  {member?.social?.youtube && (
                    <Link href={member.social.youtube} aria-label="YouTube channel">
                      <i className="fab fa-youtube" />
                    </Link>
                  )}
                  {member?.social?.linkedin && (
                    <Link href={member.social.linkedin} aria-label="LinkedIn profile">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}