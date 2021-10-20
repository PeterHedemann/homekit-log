import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Pagination = ({
  totalNumberOfItems,
  itemsPerPage,
  currentPage,
  onPagingChanged
}) => {
  const [numberOfPages, setNumberOfPages] = useState(
    Math.ceil(totalNumberOfItems / itemsPerPage)
  );

  useEffect(
    () => setNumberOfPages(Math.ceil(totalNumberOfItems / itemsPerPage)),
    [totalNumberOfItems, itemsPerPage]
  );

  const changePage = (forward) => {
    onPagingChanged({
      itemsPerPage,
      currentPage: currentPage + (forward ? 1 : -1)
    });
  };

  const changeItemsPerPage = (event) => {
    let itemsPerPage = +event.currentTarget.value;
    if (itemsPerPage === 0) {
      itemsPerPage = 10;
    }
    onPagingChanged({ itemsPerPage, currentPage });
  };

  return (
    <div>
      Viser side {currentPage} af {numberOfPages}
      <button
        type="button"
        onClick={() => changePage(false)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      <button
        type="button"
        onClick={() => changePage(true)}
        disabled={numberOfPages === currentPage}
      >
        &gt;
      </button>
      <br />
      Vis{" "}
      <input
        type="number"
        name="prPage"
        id="prPage"
        value={itemsPerPage}
        onChange={changeItemsPerPage}
      />
    </div>
  );
};

export default Pagination;

Pagination.propTypes = {
  totalNumberOfItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number
};

Pagination.defaultProps = {
  currentPage: 1
};
