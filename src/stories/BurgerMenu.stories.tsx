import { faFileDownload, faFileExport, faFileImport } from '@fortawesome/free-solid-svg-icons';
import { Story } from '@storybook/react';
import React from 'react';
import { BurgerMenu } from '../BurgerMenu';

export default {
    title: 'Burger Menu',
};

export const Default: Story = () => (
    <div style={{ background: '#35373f', display: 'flex', justifyContent: 'end' }}>
        <div style={{ flex: 1 }} />
        <BurgerMenu
            items={[
                {
                    key: 'export',
                    text: 'Export rules',
                    icon: faFileExport,
                    action: () => console.log('Export rules'),
                },
                {
                    key: 'import',
                    text: 'Import rules',
                    icon: faFileImport,
                    action: () => console.log('Import rules'),
                    isUploadFile: true,
                },
                {
                    key: 'replace',
                    text: 'Replace rules',
                    icon: faFileDownload,
                    action: () => console.log('Replace rules'),
                    isUploadFile: true,
                },
            ]}
        />
    </div>
);
