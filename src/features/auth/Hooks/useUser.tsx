import { ILoginRes } from "../auth.interfaces";

export const useUser = () => {
  let user: ILoginRes | undefined = undefined;
  const userData = localStorage.getItem("user-data");
  if (userData) user = JSON.parse(userData);

  const setUser = (user: ILoginRes) => {
    localStorage.setItem("user-data", JSON.stringify(user));
  };

  return { user, setUser };
};
