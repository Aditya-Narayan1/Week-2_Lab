import Header from "./components/Header";
import UserList from "./components/UserList";
import "./App.css";

export default function App() {
  const users = [
    { id: 1, name: "Aditya", role: "Student", status: "Active" },
    { id: 2, name: "Rohan", role: "Developer", status: "Inactive" },
    { id: 3, name: "Sneha", role: "Designer", status: "Active" },
  ];

  return (
    <div className="container">
      <Header />
      <UserList users={users} />
    </div>
  );
}
