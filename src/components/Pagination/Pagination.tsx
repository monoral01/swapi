import { FC, useState } from "react"
import styles from './Pagination.module.css';

interface PaginationProps {
 setFilterQuery: (pageNumber: number, query: string) => void;
 inputValue: string;
 totalPages: number;
}

export const Pagination: FC<PaginationProps> = ({setFilterQuery, inputValue, totalPages}) => {
  const [currentPage, setCurrentPage] = useState(1);
    const filledArray = new Array(totalPages).fill(0);
    return  <div className={styles.pages_bar}>
    {filledArray.map((_, pageNumber) => {
      pageNumber += 1;
      return (
        <span
          onClick={() => {
            setCurrentPage(pageNumber);
            setFilterQuery(pageNumber, inputValue);
          }}
          key={pageNumber}
          className={
            currentPage === pageNumber ? styles.page_current : styles.page
          }
        >
          {pageNumber}
        </span>
      );
    })}
  </div>
}