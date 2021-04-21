import user from './data/user.json';
import Profile from './сomponents/task-1/Profile/Profile.jsx';
import statisticalData from './data/statistical-data.json';
import Statistics from './сomponents/task-2/Statistics/Statistics.jsx';
import Container from './сomponents/Container/Container';

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
        <Statistics title="Upload stats" stats={statisticalData} />;
        <Statistics stats={statisticalData} />;
      </Container>
    </div>
  );
}

export default App;
