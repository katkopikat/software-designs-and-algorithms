import React, { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import styles from './Sort.module.scss';

interface SortProps {
    selected?: any;
    updateSelected?: (val) => void;
}

export function SortComponent(props: SortProps) {
    const { selected, updateSelected } = props;
    const [checked, setChecked] = useState<'asc' | 'desc'>(selected.sortingOrder);

    const handleChange = value => {
        setChecked(value);
    };

    useEffect(() => {
        updateSelected({ ...selected, sortingOrder: checked });
    }, [checked, updateSelected]);

    return (
        <FormControl className={styles.control} component="fieldset">
            <FormLabel className={styles.label}>Sort by payments</FormLabel>
            <RadioGroup
                className={styles.group}
                aria-label="sorting"
                name="radio-buttons-group"
                onChange={e => handleChange(e.target.value)}
            >
                <FormControlLabel value="desc" control={<Radio checked={checked === 'desc'} />} label="desc" />
                <FormControlLabel value="asc" control={<Radio checked={checked === 'asc'} />} label="asc" />
            </RadioGroup>
        </FormControl>
    );
}

function areEqual(prevProps, nextProps) {
    return prevProps.selected.sortingOrder === nextProps.selected.sortingOrder;
}

export const Sort = React.memo(SortComponent, areEqual);
