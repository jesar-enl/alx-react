import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const rowstyle = {
    backgroundColor: '#f5f5f5ab',
  };

  const headerstyle = {
    backgroundColor: '#deb5b545',
  };

  return (
    <tr style={rowstyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan="2" style={headerstyle}>
            {textFirstCell}
          </th>
        ) : (
          <Fragment>
            <th style={headerstyle}>{textFirstCell}</th>
            <th style={headerstyle}>{textSecondCell}</th>
          </Fragment>
        )
      ) : (
        <Fragment>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </Fragment>
      )}
    </tr>
  );
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
