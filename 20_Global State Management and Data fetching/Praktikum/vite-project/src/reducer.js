const initialState = {
  formData: [],
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

    default:
      return state;
  }
};

export default reducer;
