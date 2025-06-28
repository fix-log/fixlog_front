export default async function Page() {
    // TODO: 모든 이슈 데이터 가져오기

    return (
        <section>
            {/* 모든 이슈 페이지 */}
            {/* 목업 */}
            <div>
                <h2 className="text-2xl font-bold">프론트엔드</h2>
                <ul className="flex gap-2">
                    <li>
                        <h3>(아이콘) 여운</h3>
                        <div className="border w-48 h-24">이슈 카드1</div>
                        <div className="border w-48 h-24">이슈 카드2</div>
                        <div className="border w-48 h-24">이슈 카드3</div>
                    </li>
                    <li>
                        <h3>(아이콘) 나기</h3>
                    </li>
                    <li>
                        <h3>(아이콘) 수정</h3>
                        <div className="border w-48 h-24">이슈 카드1</div>
                        <div className="border w-48 h-24">이슈 카드2</div>
                        <div className="border w-48 h-24">이슈 카드3</div>
                    </li>
                    <li>
                        <h3>(아이콘) 이운</h3>
                        <div className="border w-48 h-24">이슈 카드1</div>
                        <div className="border w-48 h-24">이슈 카드2</div>
                    </li>
                    <li>
                        <h3>(아이콘) 미니</h3>
                        <div className="border w-48 h-24">이슈 카드1</div>
                    </li>
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-bold">백엔드</h2>
                <ul className="flex gap-2">
                    <li>
                        <h3>(아이콘) 네지</h3>
                        <div className="border w-48 h-24">이슈 카드1</div>
                        <div className="border w-48 h-24">이슈 카드2</div>
                    </li>
                    <li>
                        <h3>(아이콘) 순해</h3>
                        <div className="border w-48 h-24">이슈 카드1</div>
                    </li>
                    <li>
                        <h3>(아이콘) 병프</h3>
                    </li>
                    <li>
                        <h3>(아이콘) 서농</h3>
                        <div className="border w-48 h-24">이슈 카드1</div>
                        <div className="border w-48 h-24">이슈 카드2</div>
                    </li>
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-bold">디자인</h2>
                <ul className="flex gap-2">
                    <li>
                        <h3>(아이콘) 혜진</h3>
                        <div className="border w-48 h-24">이슈 카드1</div>
                        <div className="border w-48 h-24">이슈 카드2</div>
                    </li>
                    <li>
                        <h3>(아이콘) 다고운</h3>
                        <div className="border w-48 h-24">이슈 카드1</div>
                    </li>
                </ul>
            </div>
        </section>
    );
}
