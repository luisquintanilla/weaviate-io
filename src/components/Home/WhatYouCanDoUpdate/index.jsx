import React from 'react';

import styles from './styles.module.scss';
import Link from '@docusaurus/Link';
import * as Tabs from '@radix-ui/react-tabs';
import { LinkButton } from '/src/theme/Buttons';
import { ButtonContainer } from '../../../theme/Buttons';
import CodeSnippet from './CodeSnippet';

export default function HomepageWhatYouCanDo() {
  const codeExample = `{
    Get {
      Publication(
        nearText: {
          concepts: ["fashion"]
           limit: 1
     ) {
        name
        _additional {
           certainty
           distance
            vector
        }
     }
   }
  }
`;

  const codeExample2 = `{
    Get {
     Article(
      hybrid: {
        query: "Board games people
        are looking out for"
      }
     limit: 10
   ) {
     summary
     title
     url
     wordCount
    }
  }
  }`;

  const codeExample3 = `{
  Get {
   Article(
    ask: {
      question: "What movie did
      Ravensburger create
      a board game about?"
}
   limit: 1
 ) {
   summary
   title
   url
   wordCount
   _additional{
    answer{
      result
      }
    }
  }
}
}`;

  return (
    <div className="container">
      <div className={styles.header}>
        <h2 className={styles.title}>Why build with Weaviate</h2>
        <p className={styles.subtitle}>
          Weaviate is more than just a database. It’s a flexible platform for
          building powerful, production-ready AI applications.
        </p>
      </div>

      <div className={styles.module}>
        <Tabs.Root className={styles.tabs} defaultValue="tab1">
          <div className={styles.left}>
            <Tabs.List
              className={styles.tabsList}
              aria-label="What you can do with Weaviate"
            >
              <Tabs.Trigger
                className={styles.tabsTrigger}
                value="tab1"
                disabled={false}
              >
                <h3 className={styles.tabHeader01}>Empowers all developers</h3>
                <p>
                  Open source with a strong community. Enable developers of all
                  levels to build production-ready AI applications.
                </p>
                <div className={styles.accordianBar}></div>
              </Tabs.Trigger>

              <Tabs.Trigger className={styles.tabsTrigger} value="tab2">
                <h3 className={styles.tabHeader02}>Built for hybrid search</h3>
                <p>
                  Combine keyword-based search with vector search techniques for
                  state-of-the-art results.
                </p>
                <div className={styles.accordianBar}></div>
              </Tabs.Trigger>
              <Tabs.Trigger className={styles.tabsTrigger} value="tab3">
                <h3 className={styles.tabHeader03}>Pluggable ML models</h3>
                <p>
                  Use any generative model in combination with your data, for
                  example to do Q&A over your dataset.
                </p>
                <div className={styles.accordianBar}></div>
              </Tabs.Trigger>
              <Tabs.Trigger className={styles.tabsTrigger} value="tab4">
                <h3 className={styles.tabHeader04}>
                  Scalable multi-tenant architecture
                </h3>
                <p>
                  Use any generative model in combination with your data, for
                  example to do Q&A over your dataset.
                </p>
                <div className={styles.accordianBar}></div>
              </Tabs.Trigger>
              <Tabs.Trigger className={styles.tabsTrigger} value="tab5">
                <h3 className={styles.tabHeader05}>
                  Secure, flexible deployment
                </h3>
                <p>
                  Use any generative model in combination with your data, for
                  example to do Q&A over your dataset.
                </p>
                <div className={styles.accordianBar}></div>
              </Tabs.Trigger>
            </Tabs.List>
          </div>
          <div className={styles.right}>
            <Tabs.Content className={styles.tabsContent} value="tab1">
              <div className={styles.codeContainer}>
                <p className={styles.tabsText}>
                  Perform lightning-fast pure vector similarity<br></br>search
                  over raw vectors or data objects,<br></br> even with filters.
                </p>
                <div className={styles.codeBlockTitleSmall} />
                <div className={styles.lineBarSmall} />
                <CodeSnippet
                  code={codeExample}
                  buttonText="Vector Search"
                  buttonClass={styles.copyButton}
                  outLink="https://console.weaviate.io/console/query#weaviate_uri=https://demo.dataset.playground.semi.technology&graphql_query=%7B%0A%20%20Get%20%7B%0A%20%20%20%20Publication(%0A%20%20%20%20%20%20nearText%3A%20%7B%0A%20%20%20%20%20%20%20%20concepts%3A%20%5B%22fashion%22%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20limit%3A%201%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20_additional%20%7B%0A%20%20%20%20%20%20%20%20certainty%0A%20%20%20%20%20%20%20%20distance%0A%20%20%20%20%20%20%20%20vector%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D"
                />
              </div>
            </Tabs.Content>
            <Tabs.Content className={styles.tabsContent} value="tab2">
              <div className={styles.codeContainer}>
                <p className={styles.tabsText}>
                  Combine keyword-based search with vector search techniques for
                  state-of-the-art results.
                </p>
                <div className={styles.codeBlockTitleSmall} />
                <div className={styles.lineBarSmall} />
                <CodeSnippet
                  code={codeExample2}
                  buttonText="Hybrid Search"
                  buttonClass={styles.copyButton}
                  outLink="https://console.weaviate.io/console/query#weaviate_uri=https://demo.dataset.playground.semi.technology&graphql_query=%7B%0A%20%20Get%20%7B%0A%20%20%20%20Publication(%0A%20%20%20%20%20%20nearText%3A%20%7B%0A%20%20%20%20%20%20%20%20concepts%3A%20%5B%22fashion%22%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20limit%3A%201%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20_additional%20%7B%0A%20%20%20%20%20%20%20%20certainty%0A%20%20%20%20%20%20%20%20distance%0A%20%20%20%20%20%20%20%20vector%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D"
                />
              </div>
            </Tabs.Content>
            <Tabs.Content className={styles.tabsContent} value="tab3">
              <div className={styles.codeContainer}>
                <p className={styles.tabsText}>
                  Use any generative model in combination with your data, for
                  example to do Q&A over your dataset.
                </p>
                <div className={styles.codeBlockTitleSmall} />
                <div className={styles.lineBarSmall} />
                <CodeSnippet
                  code={codeExample3}
                  buttonText="Generative Search"
                  buttonClass={styles.generativeButton}
                  outLink="https://console.weaviate.io/console/query#weaviate_uri=https://demo.dataset.playground.semi.technology&graphql_query=%7B%0A%20%20Get%20%7B%0A%20%20%20%20Publication(%0A%20%20%20%20%20%20nearText%3A%20%7B%0A%20%20%20%20%20%20%20%20concepts%3A%20%5B%22fashion%22%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20limit%3A%201%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20_additional%20%7B%0A%20%20%20%20%20%20%20%20certainty%0A%20%20%20%20%20%20%20%20distance%0A%20%20%20%20%20%20%20%20vector%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D"
                />
              </div>
            </Tabs.Content>
            <Tabs.Content className={styles.tabsContent} value="tab4">
              <div className={styles.codeContainer}>
                <p className={styles.tabsText}>
                  Use any generative model in combination with your data, for
                  example to do Q&A over your dataset.
                </p>
                <div className={styles.codeBlockTitleSmall} />
                <div className={styles.lineBarSmall} />
                <CodeSnippet
                  code={codeExample3}
                  buttonText="Generative Search"
                  buttonClass={styles.generativeButton}
                  outLink="https://console.weaviate.io/console/query#weaviate_uri=https://demo.dataset.playground.semi.technology&graphql_query=%7B%0A%20%20Get%20%7B%0A%20%20%20%20Publication(%0A%20%20%20%20%20%20nearText%3A%20%7B%0A%20%20%20%20%20%20%20%20concepts%3A%20%5B%22fashion%22%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20limit%3A%201%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20_additional%20%7B%0A%20%20%20%20%20%20%20%20certainty%0A%20%20%20%20%20%20%20%20distance%0A%20%20%20%20%20%20%20%20vector%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D"
                />
              </div>
            </Tabs.Content>
            <Tabs.Content className={styles.tabsContent} value="tab5">
              <div className={styles.codeContainer}>
                <p className={styles.tabsText}>
                  Use any generative model in combination with your data, for
                  example to do Q&A over your dataset.
                </p>
                <div className={styles.codeBlockTitleSmall} />
                <div className={styles.lineBarSmall} />
                <CodeSnippet
                  code={codeExample3}
                  buttonText="Generative Search"
                  buttonClass={styles.generativeButton}
                  outLink="https://console.weaviate.io/console/query#weaviate_uri=https://demo.dataset.playground.semi.technology&graphql_query=%7B%0A%20%20Get%20%7B%0A%20%20%20%20Publication(%0A%20%20%20%20%20%20nearText%3A%20%7B%0A%20%20%20%20%20%20%20%20concepts%3A%20%5B%22fashion%22%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20limit%3A%201%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20_additional%20%7B%0A%20%20%20%20%20%20%20%20certainty%0A%20%20%20%20%20%20%20%20distance%0A%20%20%20%20%20%20%20%20vector%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D"
                />
              </div>
            </Tabs.Content>
          </div>
        </Tabs.Root>
      </div>
      <div className={styles.buttons}>
        <Link className={styles.buttonGradient} to="/products">
          Learn more about our platform
        </Link>
        <Link className={styles.buttonOutline} to="/products">
          Learn more about pricing
        </Link>
      </div>
    </div>
  );
}
