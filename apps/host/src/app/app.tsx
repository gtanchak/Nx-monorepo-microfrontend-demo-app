import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const MainApp = React.lazy(() => import('main-app/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/main-app">MainApp</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/main-app" element={<MainApp />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
