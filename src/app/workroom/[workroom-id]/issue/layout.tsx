import { NavigationItems } from '@/shared/types/navigation';
import Link from 'next/link';

interface LayoutProps {
    params: { 'workroom-id': string };
    children: React.ReactNode;
}

const navItems: NavigationItems = [
    { label: '모든 이슈', href: '/workroom/id/issue/all' },
    { label: '내 이슈', href: '/workroom/id/issue/mine' },
];

export default async function Layout({ params, children }: LayoutProps) {
    const { 'workroom-id': workroomId } = params;

    return (
        <>
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
