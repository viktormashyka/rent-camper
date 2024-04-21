import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';
import { ProductList } from 'components/ProductList/ProductList';
import {
  selectCampersError,
  selectCampersIsLoading,
  selectCampersItems,
} from 'store/selectors';
import { XStack, YStack } from 'style/common.styled';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useEffect } from 'react';
import { fetchCampers } from '../../store/operations';

const Catalog = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampersItems);
  const isLoading = useSelector(selectCampersIsLoading);
  const error = useSelector(selectCampersError);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <YStack style={{ gap: 16 }}>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading && <Loader />}
      {!error && !isLoading && campers.length > 0 && (
        <XStack style={{ gap: 64 }}>
          <SearchBar />
          <ProductList campers={campers} />
        </XStack>
      )}
    </YStack>
  );
};

export default Catalog;
