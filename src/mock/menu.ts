import { SideMenuItem, SideMenuSection } from '../SideMenu/types';
import { faBug } from '@fortawesome/free-solid-svg-icons';

export const DEFAULT_SECTIONS : SideMenuSection[] = [
    {
        name: 'Dashboard',
        items: [
            {
                key: 'dashboard',
                label: 'Dashboard',
                icon: '/dashboard.svg',
                url: '/',
            },
        ],
    },
    {
        name: 'Setup',
        items: [
            {
                key: 'clusters',
                label: 'Clusters',
                icon: '/support.svg',
                url: '/clusters',
            },
            {
                key: 'rules',
                label: 'Rules',
                icon: '/dashboard.svg',
                url: '/rules',
            },
            {
                key: 'markers',
                label: 'Markers',
                icon: '/support.svg',
                url: '/markers',
            },
            {
                key: 'font-awesome',
                label: 'Font awesome',
                faIcon: faBug,
                url: '/font-awesome',
            },
        ],
    },
    {
        name: 'Dev tools',
        items: [
            {
                key: 'shared-state-debugger',
                label: 'Shared State Debugger',
                faIcon: faBug,
                onClick: () => console.log('Shared State Debugger'),
            },
        ],
    }
]

export const DEFAULT_FOOTER : SideMenuItem[] = [
    {
        key: 'logout',
        label: 'Log out',
        icon: '/support.svg',
        onClick: () => console.log('Sign out!'),
    },
]