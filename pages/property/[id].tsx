import { PROPERTYLISTINGSAMPLE } from '@/constants/index';
import { useRouter } from 'next/router';
import PropertyDetail from '../../components/property/PropertyDetailTest';
import Layout from '@/components/layout/Layout';

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  // Find property by name (URL-safe)
  const property = PROPERTYLISTINGSAMPLE.find(
    item => item.name.toLowerCase().replace(/\s+/g, '-') === id
  );

  if (!property) {
    return (
      <Layout>
        <div className="container p-6 mx-auto text-center">
          <h1 className="mb-4 text-2xl font-bold">Property not found</h1>
          <p className="text-gray-600">The property you&apos;re looking for doesn&apos;t exist.</p>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-2 mt-4 text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Go back to home
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <PropertyDetail property={property} />
    </Layout>
  );
}
