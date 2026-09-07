/**
 * Photography registry.
 *
 * All files are local under /public/images — downloaded rather than hotlinked,
 * so the site carries no runtime dependency on a third-party CDN and Next can
 * optimize them. Sources and licence are recorded in public/images/CREDITS.md.
 *
 * Alt text is written for a screen reader rather than for search engines: these
 * are decorative backdrops behind headline copy, so the text says what the
 * picture is and stops there.
 *
 * TODO(client): every one of these is stock. Real photographs — the office on
 * the Lawrenceville square, the Gwinnett courthouse, Yari at work — would be
 * better on all of them, and are worth commissioning before launch.
 */
export const photos = {
  atlantaSkyline: {
    src: '/images/city-night.jpg',
    alt: 'Downtown Atlanta at night, seen from above, with the Downtown Connector running through the city.',
    position: 'center 55%',
  },
  atlantaAerial: {
    src: '/images/city-aerial-night.jpg',
    alt: 'Aerial view of an Atlanta interchange lit up after dark.',
    position: 'center',
  },
  highwayAmber: {
    src: '/images/highway-night.jpg',
    alt: 'A multi-lane highway at night, streaked with the light trails of passing traffic.',
    position: 'center 60%',
  },
  highwayBlue: {
    src: '/images/highway-timelapse.jpg',
    alt: 'A divided highway at night with long exposure light trails running to the horizon.',
    position: 'center 60%',
  },
  highwayLong: {
    src: '/images/highway-longexposure.jpg',
    alt: 'Long exposure of vehicle lights along a road at night.',
    position: 'center',
  },
  /**
   * Client-supplied headshot — the one photograph here that is not stock.
   * 1066×1600, so it holds up on retina in the 4:5 frames it sits in.
   *
   * The source is a 2:3 portrait and the frames are 4:5, so object-cover fills
   * the width and crops vertically. `center 18%` keeps the crop on the head and
   * shoulders rather than centring on the chest.
   */
  yariPortrait: {
    src: '/images/yari-lawson.jpg',
    alt: 'Yari D. Lawson, founding attorney of Lawson Personal Injury Attorneys.',
    position: 'center 18%',
  },
  courthouse: {
    src: '/images/courthouse.jpg',
    alt: 'The stone colonnade of a classical courthouse building in late afternoon light.',
    position: 'center 40%',
  },
} as const;

export type Photo = (typeof photos)[keyof typeof photos];
