import { useEffect } from "react";

const AdminProcessing = ({ users, setUsers }) => {
  useEffect(() => {
    const isAdminRegistered = users.some(
      (user) => user.username === "admin" && user.password === "admin"
    );

    if (!isAdminRegistered) {
      setUsers((prevUsers) => [
        ...prevUsers,
        { username: "admin", password: "admin" },
      ]);
    }
  }, [users, setUsers]);

  return null;
};

export default AdminProcessing;
