import logo from './logo.svg';
import './App.css';
import Timer from './timer';
import ZenQuote from './ZenQuote';
import GithubUserInfo from './GithubUserInfo';

function App() {
  return (
    <div className="App">
      <GithubUserInfo username='facebook' />      
      <GithubUserInfo username='colt' />      
      <GithubUserInfo username='gaearon' />      
      <GithubUserInfo username='kzaid0767' />
      <ZenQuote />      
    </div>
  );
}

export default App;
