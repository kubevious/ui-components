import React, { FC } from 'react';
import { ConfirmationDialogComponentProps } from './types';

import { Button } from '../Button';

import styles from './styles.module.css';

export const ConfirmationDialogComponent: FC<ConfirmationDialogComponentProps> = ({ params, onCancel, onConfirm }) => {
    const cancelLabel = params.cancelLabel || 'Cancel';
    const confirmLabel = params.confirmLabel || 'Yes';
    const confirmButtonType = params.confirmButtonType || 'success';

    return (
        <>
            <div className={styles.shadow}/>
            <div className={styles.container}>
                {params.title && <div className={styles.title}>{params.title!}</div>}

                {params.message && <div className={styles.message}>{params.message!}</div>}

                <div>
                    <Button onClick={onCancel} type="ghost" spacingRight>
                        {cancelLabel}
                    </Button>

                    <Button onClick={onConfirm} type={confirmButtonType}>
                        {confirmLabel}
                    </Button>
                </div>
            </div>
        </>
    );
};
