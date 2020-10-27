import React from 'react';

const initialState = {setVisible: () => (true)};
const StoreContext = React.createContext(initialState);

export const StoreProvider = StoreContext.Provider;
export const StoreConsumer = StoreContext.Consumer;

export default StoreContext;