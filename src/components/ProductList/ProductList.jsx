import { ButtonSecondary, Stack, YStack } from '../../style/common.styled';
import { useState } from 'react';
import { ProductCard } from 'components/ProductCard/ProductCard';

export const ProductList = ({ campers }) => {
  const [items, setItems] = useState(4);

  const handleLoadMore = () => {
    setItems(prev => prev + 4);
  };

  return (
    <YStack style={{ width: 888, gap: 32, alignItems: 'center' }}>
      {campers.map((camper, index) => {
        if (index < items) {
          return <ProductCard camper={camper} key={camper?.id} />;
        }
        return null;
      })}
      {campers.length > items && (
        <Stack>
          <ButtonSecondary onClick={handleLoadMore}>Load more</ButtonSecondary>
        </Stack>
      )}
    </YStack>
  );
};
