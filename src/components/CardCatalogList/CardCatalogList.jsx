import { Text, XStack } from '../../style/common.styled';
import { CardItem } from './CardCatalogList.styled';
import { toTitleCase } from 'utils/toTitleCase';

import { ReactComponent as UsersSvg } from '../../images/icons/users.svg';
import { ReactComponent as TransmissionSvg } from '../../images/icons/transmission.svg';
import { ReactComponent as PetrolSvg } from '../../images/icons/petrol.svg';
import { ReactComponent as CutlerySvg } from '../../images/icons/cutlery.svg';
import { ReactComponent as BedSvg } from '../../images/icons/bed.svg';
import { ReactComponent as WindSvg } from '../../images/icons/wind.svg';

export const CardCatalogList = ({ camper }) => {
  return (
    <XStack style={{ gap: 8, flexWrap: 'wrap' }}>
      {camper?.adults && (
        <CardItem>
          <UsersSvg width="16" height="16" />
          <Text> {camper.adults} adults</Text>
        </CardItem>
      )}
      {camper?.transmission && (
        <CardItem>
          <TransmissionSvg width="16" height="16" />
          <Text> {toTitleCase(camper.transmission)}</Text>
        </CardItem>
      )}
      {camper?.engine && (
        <CardItem>
          <PetrolSvg width="16" height="16" />
          <Text> {toTitleCase(camper.engine)}</Text>
        </CardItem>
      )}
      {camper?.details.kitchen && camper.details.kitchen > 0 && (
        <CardItem>
          <CutlerySvg width="16" height="16" />
          <Text> Kitchen</Text>
        </CardItem>
      )}
      {camper?.details.beds && (
        <CardItem>
          <BedSvg width="16" height="16" />
          <Text> {camper.details.beds} beds</Text>
        </CardItem>
      )}
      {camper?.details.airConditioner && camper.details.airConditioner > 0 && (
        <CardItem>
          <WindSvg width="16" height="16" />
          <Text> AC</Text>
        </CardItem>
      )}
    </XStack>
  );
};
