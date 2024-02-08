import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from 'Store/contactsSlice';
import { getStatusFilter } from 'Store/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);
  const handleChange = e => {
    dispatch(getFilterValue(e.target.value));
  };

  return (
    <div className="mb-3">
      <label htmlFor="name" className="form--label">
        Find contact by name
      </label>
      <input
        type="text"
        className="form-control"
        name="filter"
        onChange={handleChange}
        value={filter}
        required
      />
    </div>
  );
};
