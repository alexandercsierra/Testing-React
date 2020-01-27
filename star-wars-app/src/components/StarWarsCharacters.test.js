import React from 'react'
import {render, fireEvent, wait, waitForDomChange} from '@testing-library/react'
import StarWarsCharacters from './StarWarsCharacters'
import {getData as mockGetData} from '../api'

jest.mock('../api')


test('does SWC render', async () => {
    
    mockGetData.mockResolvedValueOnce({results: [{name: "Luke Skywalker", height: "173", mass: "77", hair_color: "blond", skin_color: "fair"}]});



    const {getByText}= render(<StarWarsCharacters/>);
    const prevBtn = getByText(/previous/i);
    const nextBtn = getByText(/next/i);
    fireEvent.click(nextBtn);
    expect(mockGetData).toHaveBeenCalledTimes(1);
    // expect(mockGetData).toHaveBeenCalledWith("https://swapi.co/api/people");
    waitForDomChange();
})


