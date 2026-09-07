import LocationPageView from '@/components/LocationPageView';
import { getLocationPage } from '@/lib/locations';
import { pageMeta } from '@/lib/seo';

// The page's content lives in lib/locations; this file is the route and its
// metadata. The non-null assertion is safe: the slug is a literal that must
// match an entry in the registry, and the build fails loudly here if it does not.
const location = getLocationPage('decatur')!;

export const metadata = pageMeta({
  title: location.metaTitle,
  description: location.metaDescription,
  path: '/decatur',
});

export default function DecaturPage() {
  return <LocationPageView location={location} />;
}
