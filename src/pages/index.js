import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import data from '../data/artists.json';
import Card from '../components/Card';
import Filter from '../components/Filter';

import { Container, Row, Col } from 'shards-react';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container className="borderBottom">
        <Row>
          <Col
            sm="12"
            lg="3"
            className="paddingNone"
            style={{ overflow: 'hidden' }}
          >
            <div className="borderBottom borderRight block">
              <h2>blackartisans</h2>
              <p className="caption">handmade work by black creators</p>
              <p>
                Creating something by hand is so personal. Within our digital
                age, I’ve grown to appreciate the more tangible art. I created
                this project to collect and celebrate the talent that lives
                within the black community.
              </p>
            </div>
            <div className="borderRight block" style={{ height: '100%' }}>
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
            </div>
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
          {/* <Col sm="12" lg="3">
            <aside>
              <h3>Collections</h3>
              <Filter />
            </aside>
          </Col> */}
          <Col sm="12" lg="12">
            <section>
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
              >
                <Masonry gutter="32px">
                  {data.slice(1).map((artisan, index) => {
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
                  })}
                </Masonry>
              </ResponsiveMasonry>
            </section>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default IndexPage;
