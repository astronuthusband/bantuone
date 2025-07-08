import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';

type Campaign = {
  id: string;
  title: string;
  description: string;
  target: number;
  image?: string;
  contact: string;
  createdAt?: any;
};

export default async function CampaignsPage() {
  const q = query(collection(db, 'campaigns'), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);

  const campaigns: Campaign[] = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Campaign[];

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-orange-600">All Campaigns</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="bg-white shadow p-4 rounded-lg">
            {campaign.image && (
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-48 object-cover rounded"
              />
            )}
            <h2 className="text-xl font-semibold mt-2">{campaign.title}</h2>
            <p className="text-sm text-gray-600">{campaign.description}</p>
            <p className="mt-2 font-medium">🎯 Target: RM {campaign.target}</p>
            <p className="text-sm text-gray-500">📞 {campaign.contact}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
