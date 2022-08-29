import { FC, useState, useEffect } from 'react';
import styles from './assets/styles/App.module.css';
import { People } from './models/types';
import { fetchData } from './services/service';
import { Pagination } from './components/Pagination';
import { Header } from './components/Header';
import { SearchInput } from './components/SearchInput';
import { PeopleList } from './components/PeopleList';

const postPerPage = 10;
const initialPageNumber = 1;

export const App: FC = () => {
  const [peoples, setPeoples] = useState<People[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [totalPages, setTotalPages] = useState(postPerPage);
  
  const setFilterQuery = (pageNumber: number, query: string) => {
    fetchData(pageNumber, query).then((data) => {
      const pagesCountOnRender = Math.ceil(data.count / postPerPage);
      setTotalPages(pagesCountOnRender);
      setPeoples(data.results);
    });
    setInputValue(query);
  };

  useEffect(() => {
    setFilterQuery(initialPageNumber, '');
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <SearchInput setFilterQuery={setFilterQuery}/>
      <PeopleList peoples={peoples} />
      <Pagination setFilterQuery={setFilterQuery} totalPages={totalPages} inputValue={inputValue}/>
    </div>
  );
};
