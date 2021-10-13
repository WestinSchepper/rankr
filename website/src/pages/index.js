import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import CodeBlock from '@theme/CodeBlock';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContainer)}>
        <CodeBlock className="language-javascript" originalType="code" mdxType="code">
{`// This is your data
const cars = [
  { make: 'Ford', model: 'Raptor', price: 45000, safetyRating: 5, mpg: 21 },
  { make: 'Audi', model: 'S3', price: 50000, safetyRating: 9, mpg: 29 },
  { make: 'BMW', model: 'M3', price: 60000, safetyRating: 6, mpg: 24 },
  { make: 'Audi', model: 'Q8RS', price: 70000, safetyRating: 10, mpg: 22 },
  { make: 'Mercedes', model: 'AMG', price: 110000, safetyRating: 3, mpg: 18 }
]

// The criterias (low price, high gas mileage, high safety rating)
const criterias = [
  { key: 'price', strategy: 'decreasing' },
  { key: 'mpg', strategy: 'increasing' },
  { key: 'safetyRating', strategy: 'increasing' },
]

Rankr(cars, criterias)
// [
//   { score: 0.9267399267399267, record: { make: "Audi", model: "S3", price: 50000, safetyRating: 9, mpg: 29 },
//   { score: 0.6596736596736597, record: { make: "Audi", model: "Q8RS", price: 70000, safetyRating: 10, mpg: 22 },
//   { score: 0.5810855810855811, record: { make: "BMW", model: "M3", price: 60000, safetyRating: 6, mpg: 24 },
//   { score: 0.5194805194805194, record: { make: "Ford", model: "Raptor", price: 45000, safetyRating: 5, mpg: 21 },
//   { score: 0, record: { make: "Mercedes", model: "AMG", price: 110000, safetyRating: 3, mpg: 18 } }
// ]`}
        </CodeBlock>
        <div className={styles.cta}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/introduction/getting-started">
              Getting Started
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/introduction/quick-start">
              Quick Start
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/api-reference/config">
              API Reference
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.tagline}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
