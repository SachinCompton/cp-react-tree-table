// @flow
import { Component } from 'react';
import type { Node } from 'react';

import type { RowMetadata } from '../model/row';


type Props = {
  grow?: number,
  basis?: string, // <length> | auto

  renderCell: (rowData: any, rowMetadata: RowMetadata, toggleChildren: () => void, updateRowData: (newData: any) => void) => Node,
  className?: string,
};

type State = { };

export default class Column extends Component<Props, State> {

  render() { return null; }
}
