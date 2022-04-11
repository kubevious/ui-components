import React, { FC } from 'react';
import ReactSelect, { Props } from 'react-select';

export interface Select extends Props {
    hasError?: boolean,
}

export const Select: FC<Props> = ({ hasError, ...props}) => (
    <ReactSelect
        styles={{
            control: (base) => ({
                ...base,
                background: '#2F3036',
                border: (hasError) ? '1px solid #ff5858 !important' : '1px solid #656565 !important',
                outline: 'none',
                height: '40px'
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
                border: '1px solid #656565 !important',
                zIndex: 10000,
            }),
            menuPortal: (base) => ({
                ...base,
                zIndex: 10000,
            }),
            option: (base, props) => ({
                ...base,
                background: props.isFocused || props.isSelected ? 'black' : 'inherit',
                ':active': {
                    background: 'black',
                },
            }),
        }}
        {...props}
    />
);
