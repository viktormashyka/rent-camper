import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';
import { ProductList } from 'components/ProductList/ProductList';
import {
  selectCampersError,
  selectCampersIsLoading,
  selectCampersItems,
} from 'store/selectors';
import { YStack, XStack, Subheading } from 'style/common.styled';
import { useEffect, useState } from 'react';
import { fetchCampers } from '../../store/operations';
import { SearchBar } from 'components/SearchBar/SearchBar';

const Favorites = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampersItems);
  const isLoading = useSelector(selectCampersIsLoading);
  const error = useSelector(selectCampersError);
  const [favoriteCampers, setFavoriteCampers] = useState([]);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  useEffect(() => {
    setFavoriteCampers(campers.filter(camper => camper.isFavorite === true));
  }, [campers]);

  return (
    <YStack style={{ gap: 16 }}>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading && <Loader />}
      {!error && !isLoading && campers.length > 0 && (
        <XStack style={{ gap: 64 }}>
          <SearchBar />
          {favoriteCampers > 0 ? (
            <ProductList campers={favoriteCampers} />
          ) : (
            <Subheading>
              You don't have added favorites yet. Choose any from catalog.
            </Subheading>
          )}
        </XStack>
      )}
    </YStack>
  );
};

export default Favorites;
