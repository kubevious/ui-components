import React, { ReactNode } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type SideMenuItem =
| {
      key: string;
      label: string;
      icon?: string;
      faIcon?: IconProp;
      url: string;
      onClick?: never;
  }
| {
      key: string;
      label: string;
      icon?: string;
      faIcon?: IconProp;
      url?: never;
      onClick: () => any;
  };

export interface SideMenuSection {
    name: string;
    items: SideMenuItem[];
}

