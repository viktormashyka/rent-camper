import { BookingForm } from 'components/BookingForm/BookingForm';
import {
  Text,
  XStack,
  YStack,
  Subheading,
  Separator,
} from '../../style/common.styled';
import { CardCatalogList } from 'components/CardCatalogList/CardCatalogList';

export const Features = ({ camper }) => {
  return (
    <XStack style={{ gap: 24 }}>
      <YStack style={{ width: 430, gap: 44 }}>
        <CardCatalogList camper={camper} />
        <YStack>
          <Subheading>Vehicle details</Subheading>
          <Separator style={{ marginTop: 24, marginBottom: 24 }} />
          <YStack>
            <XStack style={{ justifyContent: 'space-between' }}>
              <Text>Form</Text>
              <Text>{camper.form ?? 'Unknown'}</Text>
            </XStack>
            <XStack style={{ justifyContent: 'space-between' }}>
              <Text>Length</Text>
              <Text>{camper.length ?? 'Unknown'}</Text>
            </XStack>
            <XStack style={{ justifyContent: 'space-between' }}>
              <Text>Width</Text>
              <Text>{camper.width ?? 'Unknown'}</Text>
            </XStack>
            <XStack style={{ justifyContent: 'space-between' }}>
              <Text>Height</Text>
              <Text>{camper.height ?? 'Unknown'}</Text>
            </XStack>
            <XStack style={{ justifyContent: 'space-between' }}>
              <Text>Tank</Text>
              <Text>{camper.tank ?? 'Unknown'}</Text>
            </XStack>
            <XStack style={{ justifyContent: 'space-between' }}>
              <Text>Consumption</Text>
              <Text>{camper.consumption ?? 'Unknown'}</Text>
            </XStack>
          </YStack>
        </YStack>
      </YStack>
      <BookingForm />
    </XStack>
  );
};
