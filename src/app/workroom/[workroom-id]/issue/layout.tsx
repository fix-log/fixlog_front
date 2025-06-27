interface LayoutProps {
    children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
    return (
        <>
            <nav>
                <ul className="flex gap-4">
                    <li>모든 이슈</li>
                    <li>내 이슈</li>
                </ul>
            </nav>
            {children}
        </>
    );
}
