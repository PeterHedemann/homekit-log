import PropTypes from "prop-types";
import React from "react";

const Table = ({ headers, rows, sortableColumns, onSortableColumnClicked }) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>
              {sortableColumns.includes(index) ? (
                <button onClick={() => onSortableColumnClicked(index)}>
                  {header}
                </button>
              ) : (
                <>{header}</>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, index) => (
              <td key={index}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
Table.propTypes = {
  headers: PropTypes.arrayOf(String),
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  sortableColumns: PropTypes.arrayOf(PropTypes.number)
};

Table.defaultProps = {
  headers: [],
  rows: [],
  sortableColumns: []
};

export default Table;
