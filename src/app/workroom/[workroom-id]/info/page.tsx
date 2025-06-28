interface PageProps {
    params: { 'workroom-id': string };
}

export default async function Page({ params }: PageProps) {
    const { 'workroom-id': workroomId } = params;

    // TODO: 프로젝트 소개 데이터 가져오기

    return (
        <section>
            <div>프로젝트 소개</div>
            <div>프로젝트 id : {workroomId}</div>
            <div className="flex gap-2">
                <div>프로젝트 개요</div>
                <div>기술 스택 & 협업 툴</div>
            </div>
            <div>프로젝트 상세 설명</div>
        </section>
    );
}
