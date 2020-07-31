import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import data from '../data/artists.json';

import Card, { Cards } from '../components/Card';
import { Container, Row, Col } from 'shards-react';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container className="borderBottom">
        <Row>
          <Col sm="12" lg="3">
            <aside>
              <h2>blackartisans</h2>
              <p className="caption">handmade work by black creators</p>
              <p>
                Creating something by hand is so personal. Within our digital
                age, I’ve grown to appreciate the more tangible art. I created
                this project to collect and celebrate the talent that lives
                within the black community.
              </p>
            </aside>
            <aside>
              <h3>Know someone?</h3>
              <p>
                If you know of a black artisan that should be featured here,
                leave me a note at{' '}
                <a
                  href="mailto:hello@aylinmarie.co"
                  target="_blank"
                  rel="noreferrer"
                >
                  hello@aylinmarie.co
                </a>
              </p>
            </aside>
          </Col>
          <Col sm="12" lg="9">
            <section>
              <Card
                style={{ maxWidth: '100%' }}
                key={data[0].name}
                name={data[0].name}
                href={data[0].href}
                description={data[0].description}
                src={data[0].src}
                alt={data[0].alt}
              />
            </section>
          </Col>
        </Row>
      </Container>

      {/* Listing */}
      <Container className="borderBottom">
        <Row>
          <Col sm="12" lg="2">
            <aside>
              <h3>Collections</h3>
              <ul>
                <li>Art</li>
                <li>Home Dec</li>
                <li>LifeStyle</li>
                <li>Food & Drinks</li>
                <li>Prints</li>
              </ul>
            </aside>
          </Col>
          <Col sm="12" lg="10">
            <section>
              <Cards>
                {data.map((artisan, index) => {
                  if (index !== 0) {
                    return (
                      <Card
                        key={artisan.name}
                        name={artisan.name}
                        href={artisan.href}
                        description={artisan.description}
                        src={artisan.src}
                        alt={artisan.alt}
                      />
                    );
                  } else {
                    return false;
                  }
                })}
              </Cards>
            </section>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default IndexPage;
