import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 500px;
  padding: 0;
  margin: 0;
`;

export const ItemLi = styled.li`
  font-size: large;
  line-height: 1.5;
  font-weight: 700;

  display: flex;
  align-items: center;
`;

export const TextItem = styled.p`
  font-size: 18px;
  line-height: 1.5;
  font-weight: 400;

  outline: 1px solid gray;
  border: none;
  border-radius: 10px;
  padding: 5px;

  &:hover {
    outline: 3px solid yellowgreen;
  }
`;

export const BtnDelete = styled.button`
  font-size: large;
  line-height: 1.5;
  font-weight: 700;
  text-align: center;

  outline: 1px solid gray;
  border: none;
  border-radius: 10px;
  margin-left: auto;
  background-color: yellowgreen;
  color: #fff;
  transform: scale(1);
  transition: transform 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);

  &:hover,
  :focus {
    transform: scale(1.1);
    background-color: #fff;
    color: yellowgreen;
  }
`;
