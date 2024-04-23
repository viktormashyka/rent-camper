import { XStack, YStack } from 'style/common.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';
import { ProductList } from 'components/ProductList/ProductList';
import {
  selectCampersError,
  selectCampersIsLoading,
  selectCampersItems,
} from 'store/selectors';
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
          <ProductList campers={campers} />
        </XStack>
      )}
    </YStack>
  );
};

export default Catalog;
