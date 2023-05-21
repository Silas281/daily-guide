import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuote, selectQuote } from './QuotesSlice';

export default function Quote() {

    const dispatch = useDispatch();
    const quote = useSelector(selectQuote);

    // useEffect(() => {
    //     dispatch(fetchQuote());
    // }, [])
    return (
        <div className="quotes">
            <h3 className='quote-title'>Today's Quote</h3>
            <p className='qoute'>Self forgiveness is one of the most unselfish things you can do. Everyone around benefits as you become less demanding, more giving and more forgiving.</p>
        </div>
    )
}
