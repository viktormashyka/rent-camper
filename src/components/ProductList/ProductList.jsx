import { ProductCard } from 'components/ProductCard/ProductCard';
import { ButtonSecondary, Stack, YStack } from '../../style/common.styled';
import { useState } from 'react';

export const ProductList = ({ campers }) => {
  const [items, setItems] = useState(4);

  const handleLoadMore = () => {
    setItems(prev => prev + 4);
  };

  return (
    <YStack style={{ width: 888, gap: 32, alignItems: 'center' }}>
      {campers.slice(0, items).map(camper => (
        <ProductCard camper={camper} />
      ))}
      {campers.length > items && (
        <Stack>
          <ButtonSecondary onClick={handleLoadMore}>Load more</ButtonSecondary>
        </Stack>
      )}
    </YStack>
  );
};
