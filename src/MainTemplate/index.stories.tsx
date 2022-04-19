import { Story } from '@storybook/react';
import React from 'react';
import { MainTemplate } from './';
import { app } from '@kubevious/ui-framework';
import {BrowserRouter} from 'react-router-dom';

import { DEFAULT_SECTIONS, DEFAULT_FOOTER } from '../SideMenu/mock';


export default {
    title: 'MainTemplate',
    component: MainTemplate,
};

export const Default: Story = () => {

    return (
        <div style={{ background: 'black', height: '700px', boxSizing: 'border-box', padding: '20px'}}>
            <BrowserRouter>
                <MainTemplate sideMenuHeader={<>
                                                <span style={{ color: '#ffffff'}}>KUBEVIOUS</span>
                                            </>}
                              sideMenuCollapsedHeader={<>
                                                <span style={{ color: '#ffffff'}}>KUBE</span>
                                            </>}
                              sideMenuSections={DEFAULT_SECTIONS}
                              sideMenuFooter={DEFAULT_FOOTER}
                
                />
            </BrowserRouter>
        </div>);

};


export const WithError: Story = () => {

    try
    {
        throw new Error("Something goes wrong");
    }
    catch(reason)
    {
        app.sharedState.set('is_error', true);
        app.sharedState.set('error', reason);
    }

    return (
        <div style={{ background: 'black', height: '700px', boxSizing: 'border-box', padding: '20px'}}>
            <BrowserRouter>
                <MainTemplate sideMenuHeader={<>
                                                <span style={{ color: '#ffffff'}}>KUBEVIOUS</span>
                                              </>}
                              sideMenuCollapsedHeader={<>
                                                <span style={{ color: '#ffffff'}}>KUBE</span>
                                             </>}
                              sideMenuSections={DEFAULT_SECTIONS}
                              sideMenuFooter={DEFAULT_FOOTER}
                
                />
            </BrowserRouter>
        </div>);
        
};
