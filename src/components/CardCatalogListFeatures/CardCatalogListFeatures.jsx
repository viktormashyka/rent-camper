import { Text, XStack } from '../../style/common.styled';
import { CardItem } from './CardCatalogListFeatures.styled';
import { toTitleCase } from 'utils/toTitleCase';

import { ReactComponent as UsersSvg } from '../../images/icons/users.svg';
import { ReactComponent as TransmissionSvg } from '../../images/icons/transmission.svg';
import { ReactComponent as PetrolSvg } from '../../images/icons/petrol.svg';
import { ReactComponent as CutlerySvg } from '../../images/icons/cutlery.svg';
import { ReactComponent as BedSvg } from '../../images/icons/bed.svg';
import { ReactComponent as WindSvg } from '../../images/icons/wind.svg';
import { ReactComponent as ConditionerSvg } from '../../images/icons/air-conditioner.svg';
import { ReactComponent as CDSvg } from '../../images/icons/cd.svg';
import { ReactComponent as RadioSvg } from '../../images/icons/radio.svg';
import { ReactComponent as HobSvg } from '../../images/icons/hob.svg';
import { ReactComponent as TVSvg } from '../../images/icons/tv.svg';
import { ReactComponent as ShowerSvg } from '../../images/icons/shower.svg';
import { ReactComponent as MicrowaveSvg } from '../../images/icons/microwave.svg';
import { ReactComponent as RollPaperSvg } from '../../images/icons/roll-paper.svg';
import { ReactComponent as FreezerSvg } from '../../images/icons/freezer.svg';
import { ReactComponent as GasSvg } from '../../images/icons/gas.svg';
import { ReactComponent as WaterSvg } from '../../images/icons/water.svg';

export const CardCatalogListFeatures = ({ camper }) => {
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
          <Text>AC</Text>
        </CardItem>
      )}
      {camper?.details.hob && camper.details.hob > 0 && (
        <CardItem>
          <HobSvg width="16" height="16" />
          <Text>{camper?.details.hob} hob</Text>
        </CardItem>
      )}
      {camper?.details.airConditioner && camper.details.airConditioner > 0 && (
        <CardItem>
          <ConditionerSvg width="16" height="16" />
          <Text>{camper?.details.airConditioner} air-conditioner</Text>
        </CardItem>
      )}
      {camper?.details.cd && camper.details.cd > 0 && (
        <CardItem>
          <CDSvg width="16" height="16" />
          <Text>CD</Text>
        </CardItem>
      )}
      {camper?.details.radio && camper.details.radio > 0 && (
        <CardItem>
          <RadioSvg width="16" height="16" />
          <Text>Radio</Text>
        </CardItem>
      )}
      {camper?.details.tv && camper.details.tv > 0 && (
        <CardItem>
          <TVSvg width="16" height="16" />
          <Text>TV</Text>
        </CardItem>
      )}
      {camper?.details.shower && camper.details.shower > 0 && (
        <CardItem>
          <ShowerSvg width="16" height="16" />
          <Text>Shower</Text>
        </CardItem>
      )}
      {camper?.details.shower && camper.details.shower > 0 && (
        <CardItem>
          <MicrowaveSvg width="16" height="16" />
          <Text>Microwave</Text>
        </CardItem>
      )}
      {camper?.details.toilet && camper.details.toilet > 0 && (
        <CardItem>
          <RollPaperSvg width="16" height="16" />
          <Text>Toilet</Text>
        </CardItem>
      )}
      {camper?.details.freezer && camper.details.freezer > 0 && (
        <CardItem>
          <FreezerSvg width="16" height="16" />
          <Text>Freezer</Text>
        </CardItem>
      )}
      {camper?.details.gas && camper.details.gas > 0 && (
        <CardItem>
          <GasSvg width="16" height="16" />
          <Text>Gas</Text>
        </CardItem>
      )}
      {camper?.details.water && camper.details.water > 0 && (
        <CardItem>
          <WaterSvg width="16" height="16" />
          <Text>Water</Text>
        </CardItem>
      )}
    </XStack>
  );
};
