import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout';
import { 
  HomePage, 
  AboutPage, 
  ContactPage,
  SolutionsHubPage,
  GoToMarketStrategyPage,
  StartupAdvisoryPage,
  ProjectExecutionPage,
  BusinessGrowthPage,
  BFSIAdvisoryPage,
  AIInnovationsPage
} from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="solutions" element={<SolutionsHubPage />} />
            {/* Services routes */}
            <Route path="services" element={<Navigate to="/services/go-to-market-strategy" replace />} />
            <Route path="services/go-to-market-strategy" element={<GoToMarketStrategyPage />} />
            <Route path="services/startup-advisory" element={<StartupAdvisoryPage />} />
            <Route path="services/project-execution" element={<ProjectExecutionPage />} />
            <Route path="services/business-growth" element={<BusinessGrowthPage />} />
            <Route path="services/bfsi-it-advisory" element={<BFSIAdvisoryPage />} />
            <Route path="services/ai-innovations" element={<AIInnovationsPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
