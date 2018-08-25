"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import EnglishMainPage from '../components/EnglishMainPage';

test('EnglishMainPage render', () => {

  const component = renderer.create(
    <EnglishMainPage />
  );

  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
    
});
