import React, { useEffect, useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import useDebounce from '../../helpers/hooks/useDebounce';

import styles from './Search.module.scss';

interface SearchProps {
    selected?: {};
    updateSelected?: (val) => void;
}

function SearchComponents(props: SearchProps) {
    const { selected, updateSelected } = props;
    const [searchedValue, setSearchedValue] = useState<string>('');
    const debouncedSearchTerm = useDebounce(searchedValue, 300);

    const onChange = value => {
        setSearchedValue(value);
    };

    useEffect(() => {
        updateSelected({ ...selected, searchValue: debouncedSearchTerm });
    }, [debouncedSearchTerm, updateSelected]);

    return (
        <OutlinedInput
            className={styles.input}
            placeholder="Search by country/name/username"
            value={searchedValue}
            type="search"
            onChange={e => onChange(e.target.value)}
            startAdornment={
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
            }
        />
    );
}

function areEqual(prevProps, nextProps) {
    return prevProps.selected.searchValue === nextProps.selected.searchValue;
}

export const Search = React.memo(SearchComponents, areEqual);
