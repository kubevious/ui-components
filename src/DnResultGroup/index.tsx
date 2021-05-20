import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useState } from 'react';
import { DnList } from '../DnList';
import { GroupInfo } from '../DnResults/types';

import styles from './styles.module.css';

export interface DnResultGroupProps {
    groupInfo: GroupInfo;
}

export const DnResultGroup: FC<DnResultGroupProps> = ({ groupInfo }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleToggle = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <details open={isOpen} className={styles.detailsBlock}>
            <summary onClick={handleToggle} className={styles.summaryBlock}>
                {groupInfo.name}

                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} color="#C4C4C4" />
            </summary>
            <DnList items={groupInfo.items} />
        </details>
    );
};
