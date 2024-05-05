import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterText } from './servicesSlice';

const ServicesFilter = () => {
    const dispatch = useDispatch();
    const filterText = useSelector((state) => state.services.filterText);

    return (
        <input
            type="text"
            value={filterText}
            onChange={(e) => dispatch(setFilterText(e.target.value))}
            placeholder="Фильтр по названию"
            className="filter"
        />
    );
};

export default ServicesFilter;
