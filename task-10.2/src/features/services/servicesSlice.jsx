import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    editingIndex: -1,
    serviceName: '',
    servicePrice: '',
    filterText: ''
};

const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        addService: (state, action) => {
            state.items.push(action.payload);
        },
        updateService: (state, action) => {
            const { index, service } = action.payload;
            state.items[index] = service;
        },
        deleteService: (state, action) => {
            state.items = state.items.filter((_, i) => i !== action.payload);
            state.editingIndex = -1;
            state.serviceName = '';
            state.servicePrice = '';
        },
        editService: (state, action) => {
            const index = action.payload;
            const service = state.items[index];
            state.editingIndex = index;
            state.serviceName = service.name;
            state.servicePrice = service.price.toString();
        },
        clearForm: (state) => {
            state.editingIndex = -1;
            state.serviceName = '';
            state.servicePrice = '';
        },
        setServiceName: (state, action) => {
            state.serviceName = action.payload;
        },
        setServicePrice: (state, action) => {
            state.servicePrice = action.payload;
        },
        setFilterText: (state, action) => {
            state.filterText = action.payload;
        }
    }
});

export const {
    addService,
    updateService,
    deleteService,
    editService,
    clearForm,
    setServiceName,
    setServicePrice,
    setFilterText
} = servicesSlice.actions;

export default servicesSlice.reducer;
