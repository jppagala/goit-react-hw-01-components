import Profile from './Profile/Profile';
import user from '../data/user.json';
import Statistics from './Statistics/Statistics';
import statData from '../data/statistics.json';
import FriendList from '../components/FriendList/FriendList';
import friendsList from '../data/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '50px',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={'UPLOAD STATS'} stats={statData} />
      <FriendList friends={friendsList} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
