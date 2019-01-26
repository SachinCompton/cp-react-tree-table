// @flow
import React, { Component } from 'react';
import type { Node } from 'react';

import type { RowMetadata } from '../model/row';


type Props = {
  grow?: number,
  basis?: string, // <length> | auto

  rowData: any,
  rowMetadata: RowMetadata,
  toggle: () => void,
  update: (newData: any) => void,

  renderCell: (rowData: any, rowMetadata: RowMetadata, toggleChildren: () => void, updateRowData: (newData: any) => void) => Node,
  className?: string,
};

type State = {
  _grow: number,
  _basis: string,
};

export default class ColumnWrapper extends Component<Props, State> {
  state = {
    _grow: 1,
    _basis: 'auto',
  };

  render() {
    const { grow, basis, rowData, toggle, update, rowMetadata, renderCell, className } = this.props;
    const { _grow, _basis } = this.state;

    const flexGrow = (grow != null) ? grow : _grow;
    const flexBasis = (basis != null) ? basis : _basis;

    const baseClass = className ? `cp_tree-table_column ${className}`: 'cp_tree-table_column';
    return (
      <div className={baseClass}
        style={{ ...STYLE_COLUMN, flexGrow: flexGrow, flexBasis: flexBasis }}>
        { renderCell(rowData, rowMetadata, toggle, update) }
      </div>
    );
  }
}

const STYLE_COLUMN = {
  boxSizing: 'border-box',
  position: 'relative',
  overflow: 'hidden',
};
