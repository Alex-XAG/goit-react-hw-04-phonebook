import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  font-size: large;
  line-height: 1.5;
  font-weight: 700;
`;

export const Input = styled.input`
  font-size: 18px;
  line-height: 1.5;
  font-weight: 400;

  outline: 1px solid gray;
  border: none;
  border-radius: 10px;
  padding: 5px;

  &:focus {
    outline: 2px solid yellowgreen;
  }
`;

export const BtnForm = styled.button`
  font-size: large;
  line-height: 1.5;
  font-weight: 700;
  text-align: center;

  outline: 1px solid gray;
  border: none;
  border-radius: 10px;
  margin-top: 35px;
  background-color: yellow;
  transform: scale(1);
  transition: transform 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: 2px solid yellowgreen;
  }
`;
