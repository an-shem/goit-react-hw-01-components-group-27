import user from './data/user.json';
import friends from './data/friends.json';
import statisticalData from './data/statistical-data.json';
import transactions from './data/transactions.json';

import Profile from './сomponents/social-profile/Profile/Profile';
import Statistics from './сomponents/statistics/Statistics/Statistics';
import Container from './сomponents/Container/Container';
import FriendList from './сomponents/friend-list/FriendList/FriendList';
import TransactionHistory from './сomponents/transaction-history/TransactionHistory/TransactionHistory';

function App() {
  return (
    <div className="App">
      <Container>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <br />
        <br />
        <br />
        <Statistics title="Upload stats" stats={statisticalData} />;
        <Statistics stats={statisticalData} />;
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <FriendList friends={friends} />
        <br />
        <br />
        <br />
        <br />
        <TransactionHistory items={transactions} />;
      </Container>
    </div>
  );
}

export default App;
