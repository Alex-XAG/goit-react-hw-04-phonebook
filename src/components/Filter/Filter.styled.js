import styled from '@emotion/styled';

export const FilterLabel = styled.label`
  font-size: large;
  line-height: 1.5;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const FilerInput = styled.input`
  display: block;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 400;

  outline: 1px solid gray;
  border: none;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 20px;

  &:focus {
    outline: 3px solid yellowgreen;
  }
`;
