import ProductCard from 'components/ProductCard/ProductCard';
import { YStack } from '../../style/common.styled';

export const ProductList = ({ campers }) => {
  return (
    <YStack style={{ width: 888, gap: 32 }}>
      {campers.map(camper => (
        <ProductCard camper={camper} />
      ))}
    </YStack>
  );
};
