import { Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Button, PageLink } from '..';

export default {
    title: 'Button',
    component: Button,
};

export const Default: Story = () => (
    <BrowserRouter>
        <div style={{ background: '#212122', padding: '1rem' }}>
            <div style={{ marginBottom: '1rem' }}>
                <Button type="success">Success</Button>
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <Button type="danger">Danger</Button>
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <Button type="ghost">Ghost</Button>
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <Button type="dark">Dark</Button>
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <Button type="dark" className="custom-class">
                    With custom class name
                </Button>
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <Button type="dark" style={{ background: 'yellow' }}>
                    With custom style
                </Button>
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <Button type="dark" disabled>
                    Disabled
                </Button>
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <Button type="success">
                    <PageLink name="Link" path="/somewhere" />
                </Button>
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <Button spacingRight>With spacing right</Button>
                <Button>Simple button</Button>
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <Button>Simple button</Button>
                <Button spacingLeft>With spacing left</Button>
            </div>
        </div>
    </BrowserRouter>
);
