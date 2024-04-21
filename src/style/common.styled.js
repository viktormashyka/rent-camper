import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  padding: 24px;
  gap: 24px;
  border-radius: 20px;
  border: 1px;
`;

export const Stack = styled.div`
  display: block;
`;

export const XStack = styled.div`
  display: flex;
`;

export const YStack = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  display: block;
  width: 290px;
  height: 310px;
  object-fit: cover;
  object-position: center;
`;

export const Heading = styled.h1`
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  text-align: left;
  color: #101828;
`;

export const Subheading = styled.h2`
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  color: #101828;
`;

export const Text = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
`;

export const Button = styled.button`
  display: flex;
  padding: 16px 60px 16px 60px;
  border-radius: 200px;

  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.005em;
  text-align: left;

  background: ${props => (props.disabled ? '#ccc' : '#E44848')};
  color: ${props => (props.disabled ? '#666' : '#FFFFFF')};
`;

export const ButtonSecondary = styled.button`
  display: flex;
  padding: 16px 32px 16px 32px;
  border-radius: 200px;

  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.005em;
  text-align: left;
  background: #fff;
  border-style: solid;
  border-width: 1px;
  border-color: ${props => (props.disabled ? '#47546733' : '#E44848')};
  color: #101828;
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #1018281a;
`;

export const InputField = styled.input`
  padding: 18px;
  background: #f7f7f7;
  border-radius: 10px;

  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #10182899;
`;

export const TextAreaField = styled.textarea`
  padding: 18px;
  background: #f7f7f7;
  border-radius: 10px;

  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #10182899;
`;
