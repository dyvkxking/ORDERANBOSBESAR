import React, { useState } from 'react';

const AdminKegiatanCreatePage = () => {
  const [section, setSection] = useState('kegiatan');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSectionChange = (e) => {
    setSection(e.target.value);
    setFormData({ title: '', description: '', image: '' });
    setSuccess(false);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError('');
    try {
      // TODO: Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess(true);
    } catch (err) {
      setError('Failed to create content.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create Content for Kegiatan</h1>
      <div className="mb-4">
        <label className="mr-4">
          <input type="radio" value="kegiatan" checked={section === 'kegiatan'} onChange={handleSectionChange} /> Kegiatan
        </label>
        <label className="mr-4">
          <input type="radio" value="dokumentasi" checked={section === 'dokumentasi'} onChange={handleSectionChange} /> Dokumentasi
        </label>
        <label>
          <input type="radio" value="program-kerja" checked={section === 'program-kerja'} onChange={handleSectionChange} /> Program Kerja
        </label>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create'}
        </button>
        {success && <div className="text-green-600 mt-2">Content created successfully!</div>}
        {error && <div className="text-red-600 mt-2">{error}</div>}
      </form>
    </div>
  );
};

export default AdminKegiatanCreatePage;
