interface NavigationItem {
    label: string;
    href: string;
    icon?: string; // 자물쇠도 아이콘? (string은 임시 타입)
    disabled?: boolean;
}

export type NavigationItems = NavigationItem[];
