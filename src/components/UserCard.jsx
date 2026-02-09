export default function UserCard({ name, role, status }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p><b>Role:</b> {role}</p>
      <p><b>Status:</b> {status}</p>
    </div>
  );
}
