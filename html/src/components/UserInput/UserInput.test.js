import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import UserInput from './UserInput';

test('UserInput mounted', async () => {
  const app = render(<UserInput/>);

  screen.debug(screen.getByText(/submit/i))

  await act(async() => {
    fireEvent.click(screen.getByText(/submit/i))
  })

  console.log("User Input is mounted");
});
