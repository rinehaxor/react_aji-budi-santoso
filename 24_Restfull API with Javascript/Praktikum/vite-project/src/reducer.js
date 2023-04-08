const initialState = {
  formData: [
    {
      id: 'e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836',
      productName: 'John',
      productCategory: 'Doe',
      productFreshness: 'Doe',
      productPrice: 'Doe',
      image: 'Doe',
      additionalDescription: 'Doe',
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return {
        ...state,
        formData: [...state.formData, action.payload],
      };
    case 'DELETE_DATA':
      return {
        ...state,
        formData: state.formData.filter((data) => data.id !== action.payload),
      };
    case 'EDIT_DATA':
      return {
        ...state,
        formData: state.formData.filter((data) => data.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
