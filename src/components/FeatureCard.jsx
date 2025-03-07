export default function FeatureCard({ icon, title, description }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="text-indigo-500 text-2xl mb-4">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }
  