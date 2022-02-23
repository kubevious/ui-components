import { Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Button } from '../Button';
import { PageLink } from './';

export default {
    title: 'PageLink',
};

export const Default: Story = () => (
    <BrowserRouter>
        <div style={{ background: 'grey' }}>
            <div style={{ marginBottom: '1rem' }}>
                <PageLink name="Simple" path="/simple" />
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <PageLink name="With query params" path="/link" searchParams={{ clusterId: '1' }} />
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <PageLink
                    name="With many query params"
                    path="/link"
                    searchParams={{ clusterId: '1', clusterName: 'cluster' }}
                />
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <PageLink
                    path="/link"
                    searchParams={{ clusterId: '1', clusterName: 'cluster' }}
                >
                    <Button>Link button</Button>
                </PageLink>
            </div>


            <div style={{ marginBottom: '1rem' }}>
                <PageLink name="Text Link small size" path="/link" 
                          textSize="small"
                          searchParams={{ clusterId: '1' }} />
            </div>
            <div style={{ marginBottom: '1rem' }}>
                <PageLink name="Text Link normal size" path="/link" 
                          textSize="normal"
                          searchParams={{ clusterId: '1' }} />
            </div>
            <div style={{ marginBottom: '1rem' }}>
                <PageLink name="Text Link large size" path="/link" 
                          textSize="large"
                          searchParams={{ clusterId: '1' }} />
            </div>


            <div style={{ marginBottom: '1rem' }}>
                <PageLink name="Text Link normal size LINK color" path="/link" 
                          textSize="normal"
                          textColor="link"
                          searchParams={{ clusterId: '1' }} />
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <PageLink name="Text Link normal size NORMAL color" path="/link" 
                          textSize="normal"
                          textColor="normal"
                          searchParams={{ clusterId: '1' }} />
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <PageLink name="Text Link XLarge size FADED color" path="/link" 
                          textSize="xlarge"
                          textColor="faded"
                          searchParams={{ clusterId: '1' }} />
            </div>

            <div style={{ marginBottom: '1rem' }}>

            </div>


            <div style={{ marginBottom: '1rem' }}>
                <PageLink name="Simple Href Link" path="/some-path"  />
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <PageLink name="OnClick handler" path="/some-path" 
                    onClick={() => {
                        // alert("HELLO")
                        console.error("LINK CLICKED")
                    }} />
            </div>


            <div style={{ marginBottom: '1rem' }}>
                <PageLink path="https://google.com"  >
                    This is external link to Google
                </PageLink>
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <PageLink path="mailto:support@kubevious.io"  >
                    support@kubevious.io
                </PageLink>
            </div>


        </div>
    </BrowserRouter>
);
