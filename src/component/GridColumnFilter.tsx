import * as React from 'react';
import classNames from 'classnames'
import { iGridColumnFilter } from '../_inc/namespaces';

export class GridColumnFilter extends React.Component<iGridColumnFilter.Props, iGridColumnFilter.State> {
  constructor(props: iGridColumnFilter.Props) {
    super(props);

  }

  public shouldComponentUpdate(nextProps, nextState) {
    let sameProps = false;

    if (
      this.props.columnFilter !== nextProps.columnFilter
    ) {
      sameProps = true;
    }

    return sameProps;
  }


  public render() {
    const {
            columnFilter,
            gridCSS
          } = this.props;

    if (columnFilter === false) return null;

    let filterStyles = {};

    console.log('render');

    return (
      <div
        data-column-filter='true'
        className={classNames(gridCSS.columnFilter)}
        style={filterStyles}
      >
        <a href=''>TEST</a>
        <a href=''>TEST</a>
        <a href=''>TEST</a>
      </div>
    )
  }
}