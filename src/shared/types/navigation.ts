interface NavigationItem {
  name: string;
  href: string;
  content?: string; // 미니님하고 헤더 얘기하고 pathname에 필요한지 확인한뒤 ? 뗄지말지 결정
  icon?: string; // 자물쇠도 아이콘? (string은 임시 타입)
  disabled?: boolean;
}

export type NavigationItems = NavigationItem[];
