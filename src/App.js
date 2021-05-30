import {Suspense} from 'react';
import MyChart from 'components/MyChart';
import Introduction from 'components/Introduction';
import './App.scss';
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <header>
          <h1>Data visualization</h1>
        </header>
        <Introduction />
        <MyChart />
      </Suspense>
    </div>
  );
}

export default App;
