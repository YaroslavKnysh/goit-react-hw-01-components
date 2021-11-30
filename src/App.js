import React from "react";
import friends from "./data/friends.json";
import user from "./data/user.json";
import data from "./data/data.json";
import transactions from "./data/transactions.json";
import FriendList from "./components/Friends/FriendList";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics.jsx";
import TransactionHistory from "./components/Transaction/TransactionHistory.jsx";
function App() {
  return (
    <div className="App">
      <FriendList friends={friends} />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
