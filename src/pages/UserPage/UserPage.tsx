import { observer } from "mobx-react-lite";
import { FC, useEffect } from "react";
import userList from "../../store/userList";
import AddUser from "../../components/AddUser/AddUser";
import UserList from "../../components/UserList/UserList";
import classes from "./UserPage.module.scss";
import Search from "../../components/Search/Search";

const UserPage: FC = () => {
  useEffect(() => {
    userList.getUsers();
  }, []);

  return (
    <div className={classes.UserPage}>
      <Search />
      <UserList users={userList.users} />
      <AddUser />
    </div>
  );
};

export default observer(UserPage);
