import { NavigationItems } from '@/shared/types/navigation';
import Link from 'next/link';

interface LayoutProps {
    params: { 'workroom-id': string };
    children: React.ReactNode;
}

const navItems: NavigationItems = [
    { label: '소개', href: '/workroom/id/info' },
    { label: '멤버', href: '/workroom/id/member' },
    { label: '이슈', href: '/workroom/id/issue' },
    { label: '일정', href: '/workroom/id/schedule' },
    { label: '관리', href: '/workroom/id/admin' },
];

export default async function Layout({ params, children }: LayoutProps) {
    const { 'workroom-id': workroomId } = params;

    return (
        <>
            <div>프로젝트 제목</div>
            <nav>
                <ul className="flex gap-4">
                    {navItems.map(item => (
                        <li key={item.href}>
                            <Link href={item.href.replace('id', workroomId)}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            {children}
        </>
    );
}
