import React from 'react'
import {render, fireEvent, wait, waitForDomChange} from '@testing-library/react'
import StarWarsCharacters from './StarWarsCharacters'
import {getData as mockGetData} from '../api'



test('does SWC render', async () => {
    jest.mock('../api')
    mockGetData.mockResolvedValueOnce({ id: 1 });
    const {getByText}= render(<StarWarsCharacters/>);
    const prevBtn = getByText(/previous/i);
    const nextBtn = getByText(/next/i);
    fireEvent.click(nextBtn);
    expect(mockGetData).toHaveBeenCalledTimes(1);
    // waitForDomChange();
})
