import { BookingForm } from 'components/BookingForm/BookingForm';
import {
  Image,
  Text,
  Heading,
  XStack,
  Stack,
  YStack,
  Button,
  Subheading,
} from '../../style/common.styled';

import { Rating } from 'react-simple-star-rating';

export const Reviews = ({ camper }) => {
  return (
    <XStack style={{ gap: 24 }}>
      <YStack style={{ width: 430, gap: 44 }}>
        {camper.reviews &&
          camper.reviews.map(review => {
            const avatarTitle = review.reviewer_name.slice(0, 1) ?? 'A';
            return (
              <YStack style={{ gap: 24 }}>
                <XStack style={{ gap: 8 }}>
                  <XStack
                    style={{
                      background: '#F2F4F7',
                      borderRadius: '50%',
                      width: 60,
                      height: 60,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Subheading>{avatarTitle}</Subheading>
                  </XStack>
                  <YStack style={{ justifyContent: 'center', gap: 4 }}>
                    <Subheading>{review.reviewer_name ?? 'Anonym'}</Subheading>
                    <Rating
                      initialValue={review.reviewer_rating ?? 0}
                      size={16}
                      readonly
                    />
                  </YStack>
                </XStack>

                <Text>{review.comment}</Text>
              </YStack>
            );
          })}
      </YStack>
      <BookingForm />
    </XStack>
  );
};
