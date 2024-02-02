import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import Link from '@docusaurus/Link';

export default function ContactForm() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      // @TS-ignore
      if (window.hbspt) {
        // @TS-ignore
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '8738733',
          formId: '43cd579f-e01c-4adf-a5b0-234d0924037e',
          target: '#meetingForm',
        });
      }
    });
  }, []);

  return (
    <>
      <div id="request-form"></div>
      <div className={styles.contactBackground}>
        <div className="container">
          <div className={styles.contactContainer}>
            <div className={styles.contactSection}>
              <h2>Book a meeting with the team</h2>
              <br></br>
              <div id="meetingForm"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
