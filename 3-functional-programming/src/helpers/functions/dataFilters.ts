import type { SortingByPaymentsOrder, FilterByPostsValue } from '../../../types';
import type { Row } from '../../components';

// ==== FILTERS ====

const filterMoreThen100Posts = (rows: Row[]) => rows.filter(({ posts }) => posts >= 100);
const filterWithoutPosts = (rows: Row[]) => rows.filter(({ posts }) => !posts);

const filteredPosts = (selectedFilters: any[]) => {
    const filteredRows = [];

    return (rows: Row[]) => {
        if (!selectedFilters.length) return rows;

        if (selectedFilters.includes('Without posts')) {
            filteredRows.push(...filterWithoutPosts(rows));
        }

        if (selectedFilters.includes('More than 100 posts')) {
            filteredRows.push(...filterMoreThen100Posts(rows));
        }

        return filteredRows;
    };
};

// ==== SORT ====

const sortPaymentsAsc = (rows: Row[]): Row[] => rows.sort((a, b) => a.lastPayments - b.lastPayments);
const sortPaymentsDesc = (rows: Row[]): Row[] => rows.sort((a, b) => b.lastPayments - a.lastPayments);

const sortByPayments = (sortType: SortingByPaymentsOrder) => {
    return (rows: Row[]) => {
        if (sortType === 'asc') {
            return sortPaymentsAsc(rows);
        } else {
            return sortPaymentsDesc(rows);
        }
    };
};

// ==== SEARCH ====

const isIncludeString = (baseString, searchString): boolean => baseString.toLowerCase().includes(searchString);

const searchByUserInfo = (searchValue: string) => {
    const search = searchValue.toLowerCase();

    return (rows: Row[]) => {
        if (searchValue) {
            return rows.filter(
                ({ username, country, name }) =>
                    isIncludeString(name, search) ||
                    isIncludeString(username, search) ||
                    isIncludeString(country, search),
            );
        } else {
            return rows;
        }
    };
};

//  =======

const compose = (...funcs) => {
    return arr => {
        return funcs.reverse().reduce((acc, func) => func(acc), arr);
    };
};

export const updateDisplayData = (rows, selected): Row[] => {
    return compose(
        sortByPayments(selected.sortingOrder),
        searchByUserInfo(selected.searchValue),
        filteredPosts(selected.filters),
    )(rows);
};
