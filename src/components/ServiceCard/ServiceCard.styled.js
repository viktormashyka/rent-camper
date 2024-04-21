import styled from 'styled-components';

export const ServiceCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  max-width: 300px;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const ServiceCardIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const ServiceCardTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
`;

export const ServiceCardDescription = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
`;
