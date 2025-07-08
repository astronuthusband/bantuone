'use client';

import { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

export default function StartCampaignPage() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    target: '',
    contact: '',
    image: '',
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'campaigns'), {
        ...form,
        target: Number(form.target),
        createdAt: new Date(),
      });

      alert('✅ Campaign submitted!');
      setForm({ title: '', description: '', target: '', contact: '', image: '' });

      router.push('/campaigns');
    } catch (error) {
      console.error('Firebase error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <main className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">Start a Campaign</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow">
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
          placeholder="Campaign Title"
          className="w-full border px-4 py-2 rounded"
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          required
          placeholder="Short Description"
          className="w-full border px-4 py-2 rounded h-24"
        />

        <input
          type="number"
          name="target"
          value={form.target}
          onChange={handleChange}
          required
          placeholder="Target Amount (RM)"
          className="w-full border px-4 py-2 rounded"
        />

        <input
          type="text"
          name="contact"
          value={form.contact}
          onChange={handleChange}
          required
          placeholder="Contact Info (e.g. phone, email)"
          className="w-full border px-4 py-2 rounded"
        />

        <input
          type="text"
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL (optional)"
          className="w-full border px-4 py-2 rounded"
        />

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded w-full"
        >
          🚀 Submit My Campaign
        </button>
      </form>
    </main>
  );
}
