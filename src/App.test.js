import React, { Suspense } from 'react';
import { render, fireEvent, screen, getAllByLabelText } from '@testing-library/react';
import DateTimeChecker from './DateTimeChecker';
import { isValidDateValue } from '@testing-library/user-event/dist/utils';

describe('DateTimeChecker', () => {
  test('renders without error', () => {
    render(<DateTimeChecker />);
  });



  test('UTCID001', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '30' } });
    fireEvent.change(monthInput, { target: { value: '4' } });
    fireEvent.change(yearInput, { target: { value: '2023' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('30/4/2023 is a correct date time');
    expect(successMessage).toBeInTheDocument();
  });

  test('UTCID002', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '31' } });
    fireEvent.change(monthInput, { target: { value: '5' } });
    fireEvent.change(yearInput, { target: { value: '2023' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('31/5/2023 is a correct date time');
    expect(successMessage).toBeInTheDocument();
  });

  test('UTCID003', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '31' } });
    fireEvent.change(monthInput, { target: { value: '4' } });
    fireEvent.change(yearInput, { target: { value: '2023' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('31/4/2023 is NOT a correct date time');
    expect(successMessage).toBeInTheDocument();
  });


  test('UTCID004', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '' } });
    fireEvent.change(monthInput, { target: { value: '1' } });
    fireEvent.change(yearInput, { target: { value: '2023' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('Input data for Day is null');
    expect(successMessage).toBeInTheDocument();
  });

  // test('Defect001', () => {
  //   const {getByLabelText, getByText} = render(<DateTimeChecker/>);
  //   const dayInput = getByLabelText('Day:');
  //   const monthInput = getByLabelText('Month:');
  //   const yearInput = getByLabelText('Year:');
  //   const checkButton = getByText('Check');

  //   fireEvent.change(dayInput, {target:{value:''}});
  //   fireEvent.change(monthInput, {target:{value:'1'}});
  //   fireEvent.change(yearInput, {target:{value:'2023'}});
  //   fireEvent.click(checkButton);

  //   const successMessage = getByText('Input data for day is null');
  //   expect(successMessage).toBeInTheDocument();
  // });


  test('UTCID005', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: 'a' } });
    fireEvent.change(monthInput, { target: { value: '1' } });
    fireEvent.change(yearInput, { target: { value: '2023' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('Input data for Day is incorrect format');
    expect(successMessage).toBeInTheDocument();
  });

  test('UTCID006', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '30' } });
    fireEvent.change(monthInput, { target: { value: '' } });
    fireEvent.change(yearInput, { target: { value: '2023' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('Input data for Month is null');
    expect(successMessage).toBeInTheDocument();
  });

  test('UTCID007', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '30' } });
    fireEvent.change(monthInput, { target: { value: 'bb' } });
    fireEvent.change(yearInput, { target: { value: '2023' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('Input data for Month is incorrect format');
    expect(successMessage).toBeInTheDocument();
  });

  test('UTCID008', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '30' } });
    fireEvent.change(monthInput, { target: { value: '1' } });
    fireEvent.change(yearInput, { target: { value: '' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('Input data for Year is null');
    expect(successMessage).toBeInTheDocument();
  });

  test('UTCID09', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '30' } });
    fireEvent.change(monthInput, { target: { value: '1' } });
    fireEvent.change(yearInput, { target: { value: 'aaaa' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('Input data for Year is incorrect format');
    expect(successMessage).toBeInTheDocument();
  });

  test('UTCID010', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '29' } });
    fireEvent.change(monthInput, { target: { value: '2' } });
    fireEvent.change(yearInput, { target: { value: '2024' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('29/2/2024 is a correct date time');
    expect(successMessage).toBeInTheDocument();
  });

  test('UTCID011', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '29' } });
    fireEvent.change(monthInput, { target: { value: '2' } });
    fireEvent.change(yearInput, { target: { value: '2023' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('29/2/2023 is NOT a correct date time');
    expect(successMessage).toBeInTheDocument();
  });

  test('UTCID012', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '32' } });
    fireEvent.change(monthInput, { target: { value: '1' } });
    fireEvent.change(yearInput, { target: { value: '2023' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('Input data for Day is out of range');
    expect(successMessage).toBeInTheDocument();
  });

  test('UTCID013', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '0' } });
    fireEvent.change(monthInput, { target: { value: '1' } });
    fireEvent.change(yearInput, { target: { value: '2023' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('Input data for Day is out of range');
    expect(successMessage).toBeInTheDocument();
  });

  test('UTCID014', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '30' } });
    fireEvent.change(monthInput, { target: { value: '13' } });
    fireEvent.change(yearInput, { target: { value: '2023' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('Input data for Month is out of range');
    expect(successMessage).toBeInTheDocument();

  });

  test('UTCID015', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '30' } });
    fireEvent.change(monthInput, { target: { value: '0' } });
    fireEvent.change(yearInput, { target: { value: '2023' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('Input data for Month is out of range');
    expect(successMessage).toBeInTheDocument();

  });


})


