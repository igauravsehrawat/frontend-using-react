import React from 'react';
import ErrorBoundary from '../ErrorBoundary';

import './index.scss';

function Home() {
  return (
    <ErrorBoundary>
      <div className="fade-in-left wave-full-parent-height wave-flex wave-flex-center home">
        <p>Welcome to payroll system</p>
      </div>
    </ErrorBoundary>
  );
}

export default Home;
