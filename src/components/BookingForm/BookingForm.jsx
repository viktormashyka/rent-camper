import {
  Text,
  YStack,
  Button,
  Subheading,
  InputField,
  TextAreaField,
  XStack,
} from '../../style/common.styled';
import { useState } from 'react';

export const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [comment, setComment] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [dateError, setDateError] = useState('');

  const validateName = () => {
    if (!name) {
      setNameError('Name is required');
      return false;
    }
    setNameError('');
    return true;
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('Email is required');
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validateDate = () => {
    if (!date) {
      setDateError('Date is required');
      return false;
    }
    setDateError('');
    return true;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validateName() && validateEmail() && validateDate()) {
      const formData = { name, email, date, comment };
      console.log(formData); // TODO: remove it after adding functionality sending data to backend
      setName('');
      setEmail('');
      setDate('');
      setComment('');
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'date':
        setDate(value);
        break;
      case 'comment':
        setComment(value);
        break;
      default:
        break;
    }
  };

  return (
    <YStack
      style={{
        width: 430,
        gap: 24,
        padding: 24,
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: 'solid',
        borderColor: '#10182833',
      }}
    >
      <YStack style={{ gap: 8 }}>
        <Subheading>Book your campervan now</Subheading>
        <Text>Stay connected! We are always ready to help you.</Text>
      </YStack>
      <YStack style={{ gap: 14 }}>
        <InputField
          type="text"
          placeholder="Name *"
          name="name"
          value={name}
          onChange={handleChange}
          onBlur={validateName}
          error={nameError}
        />
        {nameError && <Text style={{ color: 'red' }}>{nameError}</Text>}
        <InputField
          type="email"
          placeholder="Email *"
          name="email"
          value={email}
          onChange={handleChange}
          onBlur={validateEmail}
          error={emailError}
        />
        {emailError && <Text style={{ color: 'red' }}>{emailError}</Text>}
        <InputField
          type="text"
          placeholder="Booking date *"
          name="date"
          value={date}
          onChange={handleChange}
          onBlur={validateDate}
          error={dateError}
        />
        {dateError && <Text style={{ color: 'red' }}>{dateError}</Text>}
        <TextAreaField
          rows={5}
          placeholder="Comment"
          name="comment"
          value={comment}
          onChange={handleChange}
        />
      </YStack>
      <XStack style={{ alignItems: 'center', gap: 24 }}>
        <Button
          onClick={handleSubmit}
          disabled={
            !name || !email || !date || nameError || emailError || dateError
          }
        >
          Send
        </Button>
        <Text style={{ color: '#10182899' }}>* fields required</Text>
      </XStack>
    </YStack>
  );
};
