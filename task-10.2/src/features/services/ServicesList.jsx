import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editService, deleteService } from './servicesSlice';

const ServicesList = () => {
    const dispatch = useDispatch();
    const { items, filterText } = useSelector((state) => state.services);

    const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <ul className="service-list">
            {filteredItems.map((service, index) => (
                <li key={index}>
                    {service.name} {service.price}
                    <button
                        className="edit-button"
                        onClick={() => dispatch(editService(index))}
                    >
                        Редактировать
                    </button>
                    <button
                        className="delete-button"
                        onClick={() => dispatch(deleteService(index))}
                    >
                        Удалить
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default ServicesList;
