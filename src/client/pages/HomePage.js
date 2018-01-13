import React, { Fragment } from 'react';
import distanceInWords from 'date-fns/distance_in_words';
import distanceInWordsStrict from 'date-fns/distance_in_words_strict';

import LightTheme from '../themes/Light';

import Row from '../components/Row';
import Column from '../components/Column';
import Container from '../components/Container';
import Background from '../components/Background';
import H1 from '../components/H1';
import H2 from '../components/H2';
import P from '../components/P';
import Link from '../components/Link';

import berlinImage from '../../assets/berlin_1.jpeg';

const today = new Date();

const yearsOfExperience = distanceInWordsStrict(
  new Date('2010-06-30'),
  today,
);

const yearsOfReact = distanceInWords(
  new Date('2015-11-10'),
  today,
);

const HomePage = () => (
  <LightTheme>
    <Fragment>
      <Background src={berlinImage} />
      <Container verticalAlign>
        <Row>
          <Column>
            <H1>Victor Quiroz Castro</H1>
            <H2 noMargin>
              Software engineer
            </H2>
            <H2>
              <Link href="https://github.com/victorhqc">@victorhqc</Link>
            </H2>
          </Column>
          <Column>
            <Container
              noMargin
              textAlign="left"
              padding={{
                top: 0,
                bottom: 0,
                right: 20,
                left: 20,
              }}
            >
              <H1>About me</H1>
              <P lead>
                {`
                  I'm a Web Developer with ${yearsOfExperience} of experience with JavaScript
                  and Web Technologies.
                `}
              </P>
              <P lead>
                {`
                  I've been using React.js and Redux (${yearsOfReact} now)
                  with Functional Oriented Programming.
                `}
              </P>
            </Container>
          </Column>
        </Row>
      </Container>
    </Fragment>
  </LightTheme>
);

export default {
  component: HomePage,
};
