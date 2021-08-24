import React, { ReactNode } from 'react';

export interface IList {
  children: ReactNode;
}

const List = ({ children }: IList) => {
  return <ul>{children}</ul>;
};

export default List;
