import React from 'react';
import styles from './styles.module.scss';
import Link from '@docusaurus/Link';

export default function PricingSandBox() {
  return (
    <div className={styles.sandbox}>
      <div className={`${styles.title} ${styles.sandboxTitle}`}>
        <h3 className={styles.color}>Free Sandbox</h3>
      </div>
      <div className={styles.featuresLong}>
        <li>Round robin region: AWS, Azure, GCP</li>
        <li>14 days lifetime</li>
        <li>Monitoring</li>
      </div>
      <div className={styles.features}>
        <li>Public Slack</li>
        <li>Community support</li>
        <li>Single AZ</li>
      </div>
      <div className={styles.features}>
        <div className={styles.buttonsSales}>
          <Link className={styles.buttonOutlineSales} to="#contact-sales">
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  );
}
