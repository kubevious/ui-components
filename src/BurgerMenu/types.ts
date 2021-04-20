import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface BurgerMenuItem {
    text: string
    icon: IconProp
    action: () => void
    isUploadFile?: boolean
}

export interface BurgerMenuProps {
    items: BurgerMenuItem[]
}
