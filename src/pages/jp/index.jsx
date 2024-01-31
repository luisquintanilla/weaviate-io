import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { MetaSEO } from '/src/theme/MetaSEO';

import HomepageHeader from '/src/components/JPLocale/Header';
import HomepageWhatYouCanDo from '/src/components/JPLocale/WhatYouCanDoUpdate';
import HomepageJoinCommunity from '/src/components/JPLocale/JoinCommunityUpdate';
import HomepageIntegrations from '/src/components/JPLocale/IntegrationsUpdate';
import HomepageLatestInsights from '/src/components/JPLocale/LatestInsights';
import ContactForm from '/src/components/JPLocale/ContactForm/contactForm';
import ThemeSwitch from '/src/components/ThemeSwitch';

export default function HomeJP() {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    /*  const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.style.display = 'none';
    } */

    const tryButton = document.querySelector('.tryNow');

    if (window.location.pathname === '/jp') {
      document.body.classList.add('jp-page');

      tryButton.innerHTML = '無料で始める';
    }
  }, []);

  return (
    <div className="custom-page noBG">
      <Layout
        title="Weaviate ベクトルデータベース"
        description="Weaviate ベクトルデータベース"
      >
        <MetaSEO img="og/website/home.jpg" />
        <HomepageHeader />
        <main>
          <HomepageWhatYouCanDo />

          <ContactForm />
        </main>
      </Layout>
      <ThemeSwitch />
    </div>
  );
}
