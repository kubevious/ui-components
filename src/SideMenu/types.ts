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
      condition?: () => boolean;
  }
| {
      key: string;
      label: string;
      icon?: string;
      faIcon?: IconProp;
      url?: never;
      onClick: () => any;
      condition?: () => boolean;
  };

export interface SideMenuSection {
    name: string;
    condition?: () => boolean;
    items: SideMenuItem[];
}

