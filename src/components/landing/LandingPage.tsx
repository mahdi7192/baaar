import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { CargoRequestForm } from './CargoRequestForm';
import { ValueProposition } from './ValueProposition';
import { RolePortalsSection } from './RolePortalsSection';
import { WorkflowSection } from './WorkflowSection';
import { StatsSection } from './StatsSection';
import { FAQSection } from './FAQSection';
import { Footer } from './Footer';
import { RoleModal } from './RoleModal';

export const LandingPage: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500 selection:text-white" dir="rtl">
      {/* Sticky Header Navbar */}
      <Navbar onOpenRoleModal={(role) => setSelectedRole(role)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenRoleModal={(role) => setSelectedRole(role)} />

        {/* 2. Interactive Cargo Request Form Section */}
        <CargoRequestForm />

        {/* 3. Value Proposition Section */}
        <ValueProposition />

        {/* 4. Interactive Role Portals Preview */}
        <RolePortalsSection onOpenRoleModal={(role) => setSelectedRole(role)} />

        {/* 5. Operational Workflow Lifecycle */}
        <WorkflowSection />

        {/* 6. Dark Inverted Stats Section */}
        <StatsSection />

        {/* 7. FAQ Accordions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Role Switcher Walkthrough Modal */}
      <RoleModal role={selectedRole} onClose={() => setSelectedRole(null)} />
    </div>
  );
};
