import React from 'react'
import {render, fireEvent, wait} from '@testing-library/react'
import StarWarsCharacters from './StarWarsCharacters'
import {getData as mockGetData} from '../api'
import '@testing-library/jest-dom'
import App from '../App'

jest.mock('../api')


test('does SWC call the api correctly', async () => {
    
    mockGetData.mockResolvedValueOnce({results: [
        {
        name: "Luke Skywalker", height: "173", mass: "77", hair_color: "blond", skin_color: "fair"
        }
    ],
    next: 'stuff',
    previous: 'otherstuff'
    });



    const {getByText, findByText, getByTestId, getAllByText}= render(<StarWarsCharacters/>);
    // const app = render(<App/>);
    
    const prevBtn = getByText(/previous/i);
    const nextBtn = getByText(/next/i);
    const display = getByTestId("character");
    fireEvent.click(nextBtn);
    expect(mockGetData).toHaveBeenCalledTimes(1);
    expect(mockGetData).toHaveBeenCalledWith("https://swapi.co/api/people");
    // waitForDomChange();
    // wait (()=>expect(/anything/i).toBeInDocument());
    // await wait (()=>expect(/luke/i).toBeInDocument());
    await wait(()=> expect(getAllByText(/luke/gi)));

    

})


