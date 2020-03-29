import React from 'react';
import { render } from '@testing-library/react';
import CurrentCall from './CurrentCall';

test('Current Call is mounted', () => {
  const app = render(<CurrentCall/>);

  console.log("Current Call is working");
});
