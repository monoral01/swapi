import { FC } from "react"
import styles from './PeopleList.module.css';

interface SearchInputProps {
 setFilterQuery: (pageNumber: number, query: string) => void;
}

export const SearchInput: FC<SearchInputProps> = ({setFilterQuery}) => {
    const initialPageNumber = 1;
    return <div className={styles.search}>
        <input
        className={styles.input}
        placeholder="Search"
        onChange={(event) =>
            setFilterQuery(initialPageNumber, event.target.value)
        }
        />
  </div>
}