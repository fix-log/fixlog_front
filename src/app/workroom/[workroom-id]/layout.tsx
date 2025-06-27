interface LayoutProps {
    children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
    return (
        <>
            <div>프로젝트 제목</div>
            <nav>
                <ul className="flex gap-4">
                    <li>소개</li>
                    <li>멤버</li>
                    <li>이슈</li>
                    <li>일정</li>
                    <li>관리</li>
                </ul>
            </nav>
            {children}
        </>
    );
}
