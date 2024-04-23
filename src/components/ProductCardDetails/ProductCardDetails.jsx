import {
  Image,
  Text,
  Heading,
  XStack,
  Stack,
  YStack,
  ButtonUnderlined,
  Subheading,
} from '../../style/common.styled';
import { useState } from 'react';
import { Features } from 'components/Features/Features';
import { Reviews } from 'components/Reviews/Reviews';
import { ReactComponent as MapPinSvg } from '../../images/icons/map-pin.svg';
import { ReactComponent as RatingSvg } from '../../images/icons/rating.svg';

export const ProductCardDetails = ({ camper }) => {
  const [expandedComponent, setExpandedComponent] = useState(null);

  const toggleComponent = component => {
    if (expandedComponent === component) {
      setExpandedComponent(null);
    } else {
      setExpandedComponent(component);
    }
  };

  return (
    <YStack style={{ padding: 24, gap: 24, borderRadius: 20, borderWidth: 1 }}>
      <YStack style={{ gap: 8, justifyContent: 'flex-start' }}>
        <Heading>{(camper && camper.name) ?? 'Unknown'}</Heading>
        <XStack>
          <XStack style={{ gap: 4, marginRight: 16, alignItems: 'center' }}>
            <RatingSvg width="16" height="16" />
            <Text style={{ color: '#101828' }}>{camper.rating ?? 0}</Text>
            <Text style={{ color: '#101828' }}>
              ({camper.reviews.length ?? 0} Reviews)
            </Text>
          </XStack>
          <XStack style={{ gap: 4, alignItems: 'center' }}>
            <MapPinSvg width="16" height="16" />
            <Text style={{ color: '#101828' }}>
              {camper.location ?? 'Unknown'}
            </Text>
          </XStack>
        </XStack>
        <XStack style={{ gap: 10 }}>
          <Heading>€{camper.price ?? 'Unknown'}</Heading>
        </XStack>
      </YStack>

      <XStack
        style={{
          gap: 16,
          overflowX: 'auto',
          whiteSpace: 'nowrap',
        }}
      >
        {camper.gallery &&
          camper.gallery.length > 0 &&
          camper.gallery.map((image, index) => (
            <Stack
              style={{
                borderRadius: 10,
                overflow: 'hidden',
                width: 290,
                height: 310,
              }}
              key={camper?.name + index}
            >
              <Image
                src={image ? `${image}` : 'https://via.placeholder.com/290x310'}
                alt={`image camper ${camper.name ?? 'Unknown'}`}
              />
            </Stack>
          ))}
      </XStack>

      <Text
        style={{
          color: ' #475467',
          maxHeight: 80,
          overflowY: 'auto',
        }}
      >
        {camper.description ?? 'Description not provided'}
      </Text>

      <YStack style={{ gap: 44 }}>
        <XStack style={{ gap: 40 }}>
          <ButtonUnderlined
            onClick={() => toggleComponent('features')}
            style={{
              borderBottomColor:
                expandedComponent === 'features' ? '#E44848' : 'transparent',
            }}
          >
            <Subheading>Features</Subheading>
          </ButtonUnderlined>
          <ButtonUnderlined
            onClick={() => toggleComponent('reviews')}
            style={{
              borderBottomColor:
                expandedComponent === 'reviews' ? '#E44848' : 'transparent',
            }}
          >
            <Subheading>Reviews</Subheading>
          </ButtonUnderlined>
        </XStack>

        {expandedComponent === 'features' && (
          <YStack>
            <Features camper={camper} />
          </YStack>
        )}

        {expandedComponent === 'reviews' && (
          <YStack>
            <Reviews camper={camper} />
          </YStack>
        )}
      </YStack>
    </YStack>
  );
};
