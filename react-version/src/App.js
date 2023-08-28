import Navigation from './components/Navigation';
import Profile from './components/Profile';
import TweetList from './components/TweetList';
import TweetForm from './components/TweetForm';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Profile />
      <TweetList />
      <TweetForm />
    </div>
  );
};

export default App;