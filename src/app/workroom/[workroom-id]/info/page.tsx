interface PageProps {
    params: { 'workroom-id': string };
}

export default async function Page({ params }: PageProps) {
    const { 'workroom-id': workroomId } = params;
    return (
        <>
            <div>프로젝트 소개</div>
            <div>프로젝트 id : {workroomId}</div>
        </>
    );
}
