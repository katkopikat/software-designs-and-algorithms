import { useState, useEffect } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

import { Table, Filters, Sort, Search } from './components';
import { getImages, getUsers, getAccounts } from './mocks/api';
import { dataConverter } from './helpers/functions/dataConverter';
import { updateDisplayData } from './helpers/functions/dataFilters';

import styles from './App.module.scss';

import type { Row } from './components';
import type { Image, User, Account, Selected } from '../types';

const defaultData = [];

function App() {
    const [data, setData] = useState<Row[]>(undefined);
    const [displayData, setDisplayData] = useState<Row[]>(undefined);
    const [selected, setSelected] = useState<Selected>({
        filters: [],
        searchValue: '',
        sortingOrder: 'asc',
    });

    useEffect(() => {
        Promise.all([getImages(), getUsers(), getAccounts()])
            .then(([images, users, accounts]: [Image[], User[], Account[]]) => dataConverter(users, accounts, images))
            .then(rows => {
                setData(rows);
                setDisplayData(rows);
            });
    }, []);

    useEffect(() => {
        if (data) {
            const updatedData = updateDisplayData(data, selected);
            setDisplayData(updatedData.length ? updatedData : defaultData);
        }
    }, [data, selected]);

    return (
        <StyledEngineProvider injectFirst>
            <div className="App">
                <div className={styles.container}>
                    <div className={styles.sortFilterContainer}>
                        <Filters selected={selected} updateSelected={setSelected} />
                        <Sort selected={selected} updateSelected={setSelected} />
                    </div>
                    <Search selected={selected} updateSelected={setSelected} />
                </div>
                {displayData?.length ? <Table rows={displayData} /> : <p>Not found</p>}
            </div>
        </StyledEngineProvider>
    );
}

export default App;
