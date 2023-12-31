import Profile from "./Profile/Profile"; 
import Statistics from "./Statistics/Statistics";
import Friends from "./Friends/Friends";
import Transactions from "./Transactions/Transactions";

import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";


export const App = () => {
  return (
    <>
  <Profile 
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
  <Statistics title="Upload stats" stats={data} />
  <Friends friendsData={friends} />
  <Transactions transactionsData={transactions} />;
    </>
  );
};
