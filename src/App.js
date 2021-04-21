import user from './data/user.json';
import friends from './data/friends.json';
import statisticalData from './data/statistical-data.json';

import Profile from './сomponents/task-1/Profile/Profile.jsx';
import Statistics from './сomponents/task-2/Statistics/Statistics.jsx';
import Container from './сomponents/Container/Container';
import FriendList from './сomponents/task-3/FriendList/FriendList';

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
      </Container>
    </div>
  );
}

export default App;
