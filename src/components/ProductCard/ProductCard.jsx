import {
  Image,
  Text,
  Heading,
  XStack,
  Stack,
  YStack,
  Button,
} from '../../style/common.styled';
import { ReactComponent as HeartSvg } from '../../images/icons/heart.svg';
import { ReactComponent as MapPinSvg } from '../../images/icons/map-pin.svg';
import { ReactComponent as RatingSvg } from '../../images/icons/rating.svg';

import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CardCatalogList } from 'components/CardCatalogList/CardCatalogList';
import { Modal } from 'components/Modal/Modal';
import { ProductCardDetails } from 'components/ProductCardDetails/ProductCardDetails';
import { updateCamper } from '../../store/operations';

export const ProductCard = ({ camper }) => {
  const [isFavorite, setIsFavorite] = useState(
    () => (camper && camper.isFavorite) ?? false
  );
  const [isOpenModal, setIsOpenModal] = useState(false);

  const dispatch = useDispatch();

  const toggleFavorite = useCallback(() => {
    setIsFavorite(prev => !prev);
    dispatch(
      updateCamper({
        id: camper.id,
        body: { ...camper, isFavorite: !isFavorite },
      })
    );
  }, [camper, dispatch, isFavorite, setIsFavorite]);

  const handleModal = () => {
    setIsOpenModal(prev => !prev);
  };

  if (!camper || !camper.id) {
    return null; // Render nothing if camper is undefined or doesn't have an id
  }

  return (
    <>
      <XStack
        style={{
          padding: 24,
          gap: 24,
          borderRadius: 20,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '#10182833',
        }}
        key={camper.id}
      >
        <Stack
          style={{
            borderRadius: 10,
            overflow: 'hidden',
            width: 290,
            height: 310,
          }}
        >
          <Image
            src={
              camper && camper.gallery && camper.gallery.length > 0
                ? camper.gallery[0]
                : 'https://via.placeholder.com/290x310'
            }
            alt={`image camper ${camper?.name}`}
          />
        </Stack>
        <YStack style={{ width: 526, gap: 24, justifyContent: 'flex-start' }}>
          <YStack style={{ gap: 8 }}>
            <XStack style={{ justifyContent: 'space-between' }}>
              <Heading>{(camper && camper.name) ?? 'Unknown'}</Heading>
              <XStack style={{ gap: 10, alignItems: 'center' }}>
                <Heading>€{(camper && camper.price) ?? 'Unknown'}</Heading>
                <HeartSvg
                  width="24"
                  height="24"
                  onClick={toggleFavorite}
                  style={{
                    stroke: camper && camper.isFavorite ? '#E44848' : '#101828',
                    fill:
                      camper && camper.isFavorite ? '#E44848' : 'transparent',
                  }}
                />
              </XStack>
            </XStack>
            <XStack>
              <XStack style={{ gap: 4, marginRight: 16, alignItems: 'center' }}>
                <RatingSvg width="16" height="16" />
                <Text style={{ color: '#101828' }}>
                  {(camper && camper.rating) ?? 0}
                </Text>
                <Text style={{ color: '#101828' }}>
                  ({(camper && camper.reviews.length) ?? 0} Reviews)
                </Text>
              </XStack>
              <XStack style={{ gap: 4, alignItems: 'center' }}>
                <MapPinSvg width="16" height="16" />
                <Text style={{ color: '#101828' }}>
                  {(camper && camper.location) ?? 'Unknown'}
                </Text>
              </XStack>
            </XStack>
          </YStack>
          <Text
            style={{
              color: ' #475467',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {(camper && camper.description) ?? 'Description not provided'}
          </Text>
          <CardCatalogList camper={camper} />
          <Stack>
            <Button
              style={{ color: '#FFFFFF', background: '#E44848' }}
              onClick={handleModal}
            >
              Show more
            </Button>
          </Stack>
        </YStack>
      </XStack>
      {isOpenModal && (
        <Modal closeModal={handleModal}>
          <ProductCardDetails camper={camper} />
        </Modal>
      )}
    </>
  );
};
