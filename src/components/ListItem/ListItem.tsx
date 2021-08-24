import React, { LiHTMLAttributes, ReactNode } from 'react';

export interface IListItem extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode;
}

const ListItem = ({ children }: IListItem) => {
  return <li>{children}</li>;
};

export default ListItem;
