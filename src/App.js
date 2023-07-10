import logo from './logo.svg';
import './App.css';
import SwiggyHeader from './SwiggyHeader';
import SwiggyCarousels from './SwiggyCarousels';
import SwiggyCard from './SwiggyCard'
import SwiggyFooter from './SwiggyFooter';
function App() {
  return (
    <div className="App">
      <SwiggyHeader/>
      <SwiggyCarousels/>
      <SwiggyCard/>
      <SwiggyFooter/>
    </div>
  );
}

export default App;
