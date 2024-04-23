import {
  ServiceCardContainer,
  ServiceCardIcon,
  ServiceCardTitle,
  ServiceCardDescription,
} from './ServiceCard.styled';
import React from 'react';
import { ReactComponent as UsersSvg } from '../../images/icons/users.svg';
import { ReactComponent as TransmissionSvg } from '../../images/icons/transmission.svg';
import { ReactComponent as RouteSvg } from '../../images/icons/route.svg';
import { ReactComponent as CamperSvg } from '../../images/icons/camper-3.svg';

export const ServiceCard = ({ title, description, serviceType }) => {
  const getIcon = () => {
    switch (serviceType) {
      case 'rental':
        return <CamperSvg />;
      case 'delivery':
        return <RouteSvg />;
      case 'support':
        return <UsersSvg />;
      case 'options':
        return <TransmissionSvg />;
      default:
        return null;
    }
  };
  return (
    <ServiceCardContainer>
      <ServiceCardIcon>{getIcon()}</ServiceCardIcon>
      <ServiceCardTitle>{title}</ServiceCardTitle>
      <ServiceCardDescription>{description}</ServiceCardDescription>
    </ServiceCardContainer>
  );
};
