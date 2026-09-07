/**
 * Blog seed set.
 *
 * These five topics come from the brief. Each carries a real, publishable
 * excerpt and a category so the index can filter — but the full post bodies are
 * intentionally not here.
 *
 * TODO(client): full 300–500 word posts are a follow-up pass and should be
 * attorney-reviewed before publication. Until a post has a body, `published`
 * stays false: the index shows it as planned rather than linking to an empty
 * page, and it stays out of sitemap.xml so nothing thin gets indexed.
 */
export type BlogCategory = 'Car Accidents' | 'Truck Accidents' | 'Premises Liability' | 'Case Value' | 'Georgia Law';

export type BlogPost = {
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  /** Flip to true only once the post has a body and has been reviewed. */
  published: boolean;
  /** Case-type page this post should link into. */
  relatedHref: string;
};

export const blogCategories: BlogCategory[] = [
  'Georgia Law',
  'Car Accidents',
  'Truck Accidents',
  'Premises Liability',
  'Case Value',
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'georgia-personal-injury-statute-of-limitations',
    title: 'How Long Do I Have to File a Personal Injury Claim in Georgia?',
    category: 'Georgia Law',
    excerpt:
      'Two years is the headline answer, but it is not the whole one. Government claims, minors, and pending criminal cases all move the deadline — and the evidence in your case expires long before the statute does.',
    published: false,
    relatedHref: '/personal-injury/faq',
  },
  {
    slug: 'what-to-do-after-a-car-accident-in-atlanta',
    title: 'What to Do After a Car Accident in Atlanta',
    category: 'Car Accidents',
    excerpt:
      'What you do in the first 48 hours shapes the claim more than anything that happens later. A practical checklist for the scene, the emergency room, and the adjuster who calls the next morning.',
    published: false,
    relatedHref: '/personal-injury/car-accidents',
  },
  {
    slug: 'how-much-is-my-personal-injury-case-worth',
    title: 'How Much Is My Personal Injury Case Worth?',
    category: 'Case Value',
    excerpt:
      'There is no multiplier and no calculator. What actually sets value: the permanence of the injury, the treatment record, lost earning capacity, how clean fault is, and how much insurance exists behind it.',
    published: false,
    relatedHref: '/personal-injury',
  },
  {
    slug: 'truck-accident-i-285-what-to-do',
    title: 'What to Do If a Truck Accident Injures You on I-285',
    category: 'Truck Accidents',
    excerpt:
      'Motor carriers send investigators to the scene the same day. Here is what evidence exists in a trucking case, how fast it disappears, and what a preservation letter has to demand.',
    published: false,
    relatedHref: '/personal-injury/truck-accidents',
  },
  {
    slug: 'do-i-need-a-lawyer-for-a-slip-and-fall-claim',
    title: 'Do I Need a Lawyer for a Slip and Fall Claim?',
    category: 'Premises Liability',
    excerpt:
      'Georgia premises cases turn on superior knowledge — what the owner knew and when. That proof lives in sweep logs and surveillance footage held by the defendant, on a deletion schedule.',
    published: false,
    relatedHref: '/personal-injury/slip-and-fall',
  },
];

export const publishedPosts = blogPosts.filter((p) => p.published);
