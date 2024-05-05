import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addService,
    updateService,
    clearForm,
    setServiceName,
    setServicePrice
} from './servicesSlice';

const ServicesForm = () => {
    const dispatch = useDispatch();
    const { editingIndex, serviceName, servicePrice } = useSelector(
        (state) => state.services
    );

    const handleSave = () => {
        if (serviceName.trim() === '' || servicePrice.trim() === '') {
            return;
        }

        const price = parseInt(servicePrice, 10);
        if (isNaN(price)) {
            return;
        }

        const service = { name: serviceName, price };

        if (editingIndex === -1) {
            dispatch(addService(service));
        } else {
            dispatch(updateService({ index: editingIndex, service }));
        }

        dispatch(clearForm());
    };

    return (
        <form className="form">
            <input
                type="text"
                value={serviceName}
                onChange={(e) => dispatch(setServiceName(e.target.value))}
                placeholder="Название услуги"
                required
            />
            <input
                type="number"
                value={servicePrice}
                onChange={(e) => dispatch(setServicePrice(e.target.value))}
                placeholder="Стоимость"
                required
            />
            <button type="button" onClick={handleSave}>
                {editingIndex === -1 ? 'Сохранить' : 'Обновить'}
            </button>
            {editingIndex !== -1 && (
                <button type="button" onClick={() => dispatch(clearForm())}>
                    Отменить
                </button>
            )}
        </form>
    );
};

export default ServicesForm;
