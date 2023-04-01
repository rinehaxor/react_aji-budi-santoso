const addFormData = (data) => ({
  type: 'ADD_FORM_DATA',
  payload: { ...data, id: new Date().getTime() },
});

const deleteFormData = (index) => ({
  type: 'DELETE_FORM_DATA',
  payload: index,
});

const editFormData = (index, data) => ({
  type: 'EDIT_FORM_DATA',
  payload: {
    index,
    data,
  },
});
