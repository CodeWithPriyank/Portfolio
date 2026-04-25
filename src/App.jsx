import { useState } from 'react';
import './App.css';
import PageLoader from './components/PageLoader/PageLoader';
import Terminal from './components/Terminal/Terminal';

function App({children}) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <PageLoader onLoadComplete={handleLoadComplete} />}
      {children}
      <Terminal />
    </>
  )
}

export default App