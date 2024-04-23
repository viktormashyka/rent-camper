import { Text, XStack, YStack, Subheading } from '../../style/common.styled';
import { Rating } from 'react-simple-star-rating';
import { BookingForm } from 'components/BookingForm/BookingForm';

export const Reviews = ({ camper }) => {
  return (
    <XStack style={{ gap: 24 }}>
      <YStack style={{ width: 430, gap: 44 }}>
        {camper.reviews &&
          camper.reviews.map((review, index) => {
            const avatarTitle = review.reviewer_name.slice(0, 1) ?? 'A';
            return (
              <YStack style={{ gap: 24 }} key={review?.reviewer_name + index}>
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
