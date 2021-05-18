import React, { FC } from 'react';
import ReactSelect, { Props } from 'react-select';

export const Select: FC<Props> = (props) => (
    <ReactSelect
        styles={{
            control: (base) => ({
                ...base,
                background: '#2F3036',
                border: '1px solid #656565 !important',
                outline: 'none',
            }),
            indicatorSeparator: () => ({
                display: 'none',
            }),
            singleValue: () => ({
                color: 'white',
                fontSize: '15px',
                fontFamily: 'Roboto, sans-serif',
            }),
            menu: (base) => ({
                ...base,
                background: '#2F3036',
            }),
            option: (base, props) => ({
                ...base,
                background: props.isFocused || props.isSelected ? 'black' : 'inherit',
            }),
        }}
        {...props}
    />
);
