import {
  Image,
  Text,
  Heading,
  XStack,
  Stack,
  YStack,
  Button,
  InputField,
} from '../../style/common.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'store/filterSlice';
import { Loader } from 'components/Loader/Loader';
import {
  selectCampersError,
  selectCampersIsLoading,
  selectCampersItems,
  selectFilter,
} from 'store/selectors';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const campers = useSelector(selectCampersItems);
  const isLoading = useSelector(selectCampersIsLoading);
  const error = useSelector(selectCampersError);

  const handleChange = e => {
    return dispatch(changeFilter(e.currentTarget.value));
  };
  return (
    <YStack style={{ width: 360, gap: 24 }}>
      <div>
        <label>
          Find camper by name
          <input
            type="text"
            placeholder="Enter name"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={filter}
            onChange={handleChange}
          />
        </label>
      </div>

      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading && <Loader />}
      <Heading>Location</Heading>
      <InputField />
      <Heading>Vehicle equipment</Heading>
      <Heading>Vehicle types</Heading>
    </YStack>
  );
};
