const BASE = process.env.NEXT_PUBLIC_BASE_URL;

export const transformAboutData = (data) => {
  if (!data || !data.is_active) return null;

  const transformImage = (url) => (url ? `${BASE}${url}` : null);

  return {
    heading: data.heading,
    teamHeading: data.team_heading,

    // ------------------------ STORY SECTION ------------------------
    storyData:
      data.is_story && data.story
        ? {
            heading: data.story.heading,
            paragraph: data.story.paragraph,
            points: data.story.points || [],
            founder_image_url: transformImage(data.story.founder_image_url),
            para1: data.story.para1,
            para2: data.story.para2,
          }
        : null,

    // ------------------------ VM + VALUES + KEY STRENGTHS ------------------------
    vmData: {
      mission: data.mission?.is_active
        ? {
            heading: data.mission.heading,
            paragraph: data.mission.paragraph,
            image_url: transformImage(data.mission.image_url),
            is_active: true,
          }
        : null,

      vision: data.vision?.is_active
        ? {
            heading: data.vision.heading,
            paragraph: data.vision.paragraph,
            image_url: transformImage(data.vision.image_url),
            is_active: true,
          }
        : null,

      values: data.values?.is_active
        ? {
            heading: data.values.heading,
            points: data.values.points,
            image_url: transformImage(data.values.image_url),
            is_active: true,
          }
        : null,

      // ⭐ ADDED KEY STRENGTHS INSIDE vmData
      keyStrengths: data.key_strengths
        ? {
            heading: data.key_strengths.heading,
            points: data.key_strengths.points || [],
          }
        : null,
    },

    // ------------------------ ACHIEVEMENTS SECTION ------------------------
    achievementsData: data.is_achievements
      ? {
          heading: data.achievements.heading,
          items: (data.achievements.items || []).map((item) => ({
            ...item,
            icon: item.icon ? transformImage(item.icon) : null,
          })),
        }
      : null,

    // ------------------------ FAQ SECTION ------------------------
    faqData:
      data.is_faq && data.faq
        ? {
            heading: data.faq.heading,
            paragraph: data.faq.paragraph,
            items: data.faq.items.map((item) => ({
              id: item.id,
              title: item.title,
              description: item.description,
              is_active: item.is_active,
            })),
          }
        : null,
  };
};
