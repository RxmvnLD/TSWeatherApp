import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../components/Loader";

const Account = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  console.log(user);

  return (
    <main className="flex items-center justify-center h-[calc(100vh_-_10rem)] lg:h-[calc(100vh_-_20rem)]">
      {isLoading ? (
        <Loader />
      ) : (
        <section className="w-10/12 lg:w-2/6 h-max border-2 border-gray-500 rounded-xl flex flex-col items-center justify-center p-10 gap-3">
          <img src={user?.picture} alt={`${user?.name} profile picture`} />
          <h1 className="text-2xl font-bold mb-5">User data</h1>
          <h2>
            Name: <span>{user?.given_name}</span>
          </h2>
          <h2>
            Last name: <span>{user?.family_name}</span>
          </h2>
          <h2>
            Username: <span>{user?.nickname}</span>
          </h2>
          <h2>
            Verified user:{" "}
            {user?.email_verified ? <span>✔</span> : <span>❌</span>}
          </h2>
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            className="bg-red-300 text-blue-950 font-bold px-6 py-3"
          >
            Log Out
          </button>
        </section>
      )}
    </main>
  );
};

export default Account;
