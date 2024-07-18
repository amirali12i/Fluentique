import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import UserProgressComponent from '../components/UserProgressComponent'; // Adjust the import path as necessary

jest.mock('axios');

describe('UserProgressComponent', () => {
  it('fetches and displays user progress', async () => {
    const mockProgressData = {
      userId: 'user123',
      language: 'German',
      chapter: 'chapter1',
      lesson: 'lesson1',
      score: 85,
      completed: true,
    };

    axios.get.mockResolvedValue({ data: mockProgressData });

    render(<UserProgressComponent />);

    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    expect(axios.get).toHaveBeenCalledWith('/api/progress/user123');
    expect(screen.getByText(`Score: ${mockProgressData.score}`)).toBeInTheDocument();
  });

  // Optionally, more tests here
});
