import User from "../(components)/User";
import UserForm from "@/app/(components)/UserForm";

const Users = () => {
  const users = [
    { _id: 1, name: "User1", role: "admin", email: "admin@gmail.com" },
    { _id: 2, name: "User2", role: "user", email: "user1@gmail.com" },
    { _id: 3, name: "User3", role: "user", email: "user1@gmail.com" },
    { _id: 4, name: "User4", role: "user", email: "user1@gmail.com" },
    { _id: 5, name: "User5", role: "user", email: "user1@gmail.com" },
    { _id: 6, name: "User6", role: "user", email: "user1@gmail.com" },
  ];

  async function getUsers() {
    try {
      const users = await User.find();
      console.log("USERS" ,users);
      

      return users;
    } catch (error) {
      throw new Error("Could not get Users: ", error);
    }
  }

  // const users = getUsers();

  return (
    <div className="flex items-center flex-col justify-center w-full">
      <div className="flex max-w-7xl w-full flex-col gap-5 p-5">
        <UserForm />
        <div className="grid grid-cols-3 justify-items-center border-b items-center p-4 font-bold text-primary">
          <div>Name</div>
          <div>Role</div>
          <div>Actions</div>
        </div>
        {users?.map((user) => (
          <User user={user} key={user._id} />
        ))}
      </div>
    </div>
  );
};

export default Users;
