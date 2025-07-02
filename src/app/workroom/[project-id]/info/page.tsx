interface PageProps {
  params: Promise<{ 'project-id': string }>;
}

export default async function Page({ params }: PageProps) {
  const { 'project-id': projectId } = await params;
  console.log(projectId);

  // TODO: 프로젝트 소개 데이터 가져오기

  return (
    <section className='flex w-full max-w-[1094px] flex-col items-center gap-26 py-10 md:py-22'>
      <div className='flex w-full flex-col items-center justify-between max-md:gap-26 max-md:px-8 md:flex-row'>
        <div className='flex flex-col gap-8 max-md:w-full md:max-w-[460px]'>
          <h3 className='text-2xl font-[900]'>| 프로젝트 개요</h3>
          <div className='flex flex-col gap-4'>
            <h4 className='text-xl font-[800]'>• 프로젝트 기간</h4>
            <p className='pl-6 text-xl'>
              2025.06.18. 수요일 ~ 2025.09.18. 목요일{' '}
              <span className='text-mainRed'>협의 예정</span>
            </p>
          </div>

          <div className='flex flex-col gap-4'>
            <h4 className='text-xl font-[800]'>• 포지션 구성</h4>
            <div className='flex w-2/3 justify-between'>
              <p className='pl-6 text-xl'>UX/UI 기획</p>
              <span className='text-mainRed text-lg'>1명</span>
            </div>
            <div className='flex w-2/3 justify-between'>
              <p className='pl-6 text-xl'>UX/UI 디자인</p>
              <span className='text-mainRed text-lg'>2명</span>
            </div>
            <div className='flex w-2/3 justify-between'>
              <p className='pl-6 text-xl'>프론트엔드</p>
              <span className='text-mainRed text-lg'>3명</span>
            </div>
            <div className='flex w-2/3 justify-between'>
              <p className='pl-6 text-xl'>백엔드</p>
              <span className='text-mainRed text-lg'>2명</span>
            </div>
            <div className='flex w-2/3 justify-between'>
              <p className='pl-6 text-xl'>PM</p>
              <span className='text-mainRed text-lg'>1명</span>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-8 md:max-w-[460px]'>
          <h3 className='text-2xl font-[900]'>| 기술 스택 & 협업 툴</h3>
          <div className='flex flex-col gap-4'>
            <h4 className='text-xl font-[800]'>• 개발 언어</h4>
            <div className='flex flex-wrap gap-2 pl-6'>
              <Badge name='JavaScript' />
              <Badge name='TypeScript' />
              <Badge name='Python' />
              <Badge name='Java' />
              <Badge name='C#' />
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <h4 className='text-xl font-[800]'>• 기술 스택</h4>
            <div className='flex flex-wrap gap-2 pl-6'>
              <Badge name='Express' />
              <Badge name='Node.js' />
              <Badge name='React' />
              <Badge name='Next.js' />
              <Badge name='AWS' />
              <Badge name='PostgreSQL' />
              <Badge name='Redis' />
              <Badge name='Docker' />
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <h4 className='text-xl font-[800]'>• 디자인 & 협업 툴</h4>
            <div className='flex flex-wrap gap-2 pl-6'>
              <Badge name='Figma' />
              <Badge name='Notion' />
              <Badge name='Slack' />
              <Badge name='Jira' />
              <Badge name='Trello' />
            </div>
          </div>
        </div>
      </div>

      <div className='flex w-full flex-col gap-6 max-md:px-8'>
        <h3 className='text-2xl font-[900]'>| 프로젝트 상세 설명</h3>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore reprehenderit iste
          nostrum accusamus nemo eum porro incidunt deserunt culpa fugiat similique voluptatibus
          nihil modi voluptatem, maxime nam tenetur, placeat assumenda. Magnam, natus. Tempore
          temporibus vitae nesciunt quas facilis error possimus culpa velit repellendus officia cum
          maiores perspiciatis modi, non, eius eligendi a, debitis incidunt quae harum ullam ducimus
          esse. Officia! Aut, modi, obcaecati nihil ad aliquam id recusandae facere enim quam,
          molestias distinctio non. Officia hic obcaecati perferendis molestiae natus enim alias aut
          optio eveniet sapiente. In corrupti qui libero! Reprehenderit voluptate aliquid,
          obcaecati, quas qui, odio velit eos expedita eligendi voluptatem beatae vitae quae eveniet
          placeat consequatur pariatur quam fugit magnam voluptatibus. Quis vitae officiis porro,
          vel qui cumque. Culpa tempora eos ratione impedit aliquid fugiat ea velit recusandae
          quaerat facilis sit quasi cupiditate beatae iusto, ab consequuntur ad similique atque.
          Eius porro consequuntur obcaecati quis laborum aliquam dignissimos. Quod accusantium
          voluptatum labore esse aperiam nisi laboriosam optio explicabo nobis? Adipisci cum
          voluptates natus eveniet. Accusantium, natus ex dolorem sequi eius sunt commodi sint
          voluptate? Qui error a maiores. Itaque incidunt ullam, distinctio dolorum perspiciatis
          neque, officia molestias accusamus, nihil explicabo ab. Suscipit dignissimos optio
          praesentium reprehenderit, ipsum adipisci, sint enim modi dolor quos molestias quisquam
          qui ipsam? Mollitia. Animi saepe adipisci eligendi aspernatur atque cumque nemo pariatur
          assumenda ea, officia dolore quibusdam eos, commodi laborum repudiandae distinctio unde,
          molestiae eius error. Ab dolorum laudantium ipsa voluptate recusandae. Vitae! Voluptas,
          similique velit! Accusamus qui nam et quidem deserunt a quisquam delectus autem,
          consequuntur dignissimos voluptas ipsam. Minima porro quas, eum in corrupti distinctio
          enim voluptatum, veniam, repellat illum facilis? Repellendus soluta eligendi id quis
          deserunt, dolorum, amet aperiam cumque at quas dolor possimus animi repellat, velit facere
          perferendis dignissimos ducimus voluptates fugiat! Incidunt libero culpa mollitia, facere
          non doloremque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
          voluptatum vitae velit cupiditate voluptas saepe nobis expedita, sequi quia aut maxime.
          Amet magnam similique soluta atque aliquam excepturi iusto mollitia? Tempora illo at
          voluptatibus dicta ab, accusantium placeat, totam, ratione laborum nam labore sequi quis
          amet possimus cumque reprehenderit ullam necessitatibus architecto odio consequuntur?
          Eaque rerum tempora quidem quisquam velit? Ullam, fugit earum a iusto cumque animi
          doloremque suscipit porro nam, nostrum quasi ex praesentium ipsam velit accusantium vitae
          quis rem. Quibusdam aperiam quia eius non voluptatum quod repudiandae ipsam! Quae
          architecto ipsum, facilis velit vero facere blanditiis nesciunt aut atque maxime.
          Suscipit, nulla? Sit rem obcaecati tempore fugit, amet velit labore, aperiam perspiciatis
          fuga nobis ab repudiandae accusantium impedit. Quisquam labore illum nihil nisi quia ab
          quas rem eum, rerum cum tempore cupiditate atque error incidunt autem nesciunt quos, iusto
          deleniti quod esse dolorum inventore ad. Nulla, blanditiis minus. Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Quas quos similique blanditiis quam cum ullam quis
          veritatis reprehenderit saepe possimus praesentium dolore quod, ex aut sequi fugit atque
          magni exercitationem. Magni debitis tenetur maiores at laborum voluptatem natus, aliquam
          necessitatibus magnam sint impedit nulla totam aut illo ea eveniet rerum? Itaque rerum
          perferendis quos eaque, suscipit neque expedita dolores voluptatem. Quidem amet
          voluptatibus quas sapiente! Quae aspernatur nisi porro perspiciatis ea, voluptas tenetur
          excepturi laudantium sapiente delectus itaque officiis, expedita maiores quisquam vitae
          error quasi. Dolorum asperiores optio laudantium reprehenderit. Nobis tempore iure nihil
          corporis hic dolore harum quidem repellat consectetur alias similique sit iste animi
          soluta, id dolorum molestias delectus quisquam nulla obcaecati veritatis dolores. Eveniet,
          est! Nam, exercitationem. Esse, distinctio est magni recusandae natus nemo atque excepturi
          vitae nesciunt consequuntur consequatur quos fuga eveniet numquam provident suscipit.
          Accusamus, cupiditate laudantium dolorem itaque modi nostrum molestias alias mollitia
          commodi? Fugit, mollitia cumque sit, distinctio fugiat, consectetur quia alias animi
          explicabo deleniti quaerat optio. Modi, corporis distinctio. Labore praesentium minus
          nobis, debitis at delectus officia voluptatem aut. Necessitatibus, eius iste. Ipsam nisi
          pariatur facere provident perferendis porro, nam est aspernatur atque placeat
          exercitationem quo, deleniti natus dolore, laborum laudantium dicta dolor. Harum doloribus
          corrupti aut quae odit obcaecati ratione dolores. Voluptatem, saepe harum dolor dolorem
          illum culpa? Velit corporis maiores, esse enim, dolor qui ad fugiat quam expedita
          explicabo, impedit mollitia quod fuga eaque. Repellendus corrupti est consectetur
          praesentium quia? Accusantium laboriosam pariatur dolorum quaerat est esse a vel beatae,
          debitis dolore accusamus, id mollitia illum, sint harum aliquam eum itaque. Asperiores
          officiis facilis in facere, earum at incidunt aperiam. Mollitia soluta autem maiores rem
          officiis cumque accusantium animi dolor dolore aut eveniet voluptas, quaerat quod officia
          repellat quidem dignissimos, nemo, nobis obcaecati voluptates accusamus! Inventore numquam
          corporis quibusdam cupiditate. Aperiam assumenda, excepturi, exercitationem incidunt optio
          sunt fugiat laboriosam corrupti vero deserunt sint, porro consectetur! Id tempora atque
          enim voluptatibus explicabo fuga aspernatur excepturi velit accusamus corporis! Sunt, quis
          quidem! Consectetur, error! Sit animi perspiciatis quod saepe iste assumenda? Quia, sunt,
          non qui ipsa tenetur aliquam ipsum neque, exercitationem obcaecati explicabo perspiciatis
          rerum molestiae incidunt dignissimos porro! Asperiores, ab veritatis. Inventore nulla
          repellendus consectetur, similique necessitatibus atque voluptate rerum odio animi ratione
          maiores incidunt asperiores dolor ullam dolores corrupti ipsum assumenda, labore natus.
          Minima debitis dolorem obcaecati deserunt, accusantium magni. Cumque exercitationem
          assumenda asperiores temporibus nesciunt. Quibusdam temporibus culpa magni ea quisquam
          enim ad minima? Possimus commodi in quam excepturi delectus. Necessitatibus praesentium
          voluptatem hic commodi quaerat, voluptas repudiandae impedit. Eum voluptate ut obcaecati
          explicabo accusantium, laborum facere ducimus earum vel enim illo rerum minima nobis
          consequatur, exercitationem nemo? Labore saepe laboriosam natus accusantium sint ex
          numquam! Voluptatum, facilis voluptas. Assumenda voluptates ab at voluptatum qui
          repudiandae fugit et provident, laboriosam tempora dolores placeat, nisi, quasi alias.
          Numquam, tenetur molestias cum, reprehenderit magni aspernatur fugit id, quos ea quasi
          mollitia? Velit hic fugit id laudantium delectus corrupti impedit natus nihil consequuntur
          temporibus maxime vitae animi enim facere obcaecati ut dolorum perspiciatis explicabo illo
          dicta modi, voluptas ullam sunt illum! Possimus. Odit inventore quas ipsa distinctio iste!
          Eum temporibus, soluta impedit dignissimos architecto deleniti doloremque minima illum
          voluptas quas. Maiores autem suscipit pariatur veniam minima deserunt repellendus quos
          inventore odit nostrum? Expedita cupiditate labore eveniet praesentium natus odit dolorum
          doloribus dolores, rem vero tempore distinctio eos totam delectus aspernatur laborum
          exercitationem eligendi earum consectetur similique. Sed impedit vitae amet! Omnis, modi?
          Dicta voluptatem qui velit modi! Deserunt aut deleniti eligendi illum impedit temporibus
          consectetur, ducimus dignissimos quod, voluptate, adipisci provident. Quam qui odit nobis
          illo incidunt temporibus, at corrupti autem esse! Dolorem veniam assumenda ducimus quas
          sequi est expedita sit inventore repudiandae debitis voluptatibus perspiciatis quae,
          nostrum ut maxime ex. Nesciunt ipsam sit iste sunt commodi ratione in est, rem quam!
          Tempore doloribus quas similique iusto, laudantium, facilis consectetur numquam
          repudiandae in illo qui inventore asperiores sunt, aliquid unde dolor molestias ducimus
          voluptas molestiae eum cumque iure. Quasi harum sequi perspiciatis! Modi nostrum aperiam
          dolore quaerat voluptate animi voluptas nam asperiores laudantium quasi deserunt, autem
          consectetur pariatur tempora qui blanditiis officiis. Corporis deleniti architecto nemo?
          Illum repellendus animi enim atque perspiciatis! Veniam exercitationem saepe blanditiis
          pariatur expedita dolorem. Dolor facilis tenetur commodi provident corrupti qui eaque sit
          quidem odio, hic ipsam, doloribus architecto asperiores error iste? Rem hic incidunt
          dignissimos. Architecto. Facilis, quaerat odit. In facere eius numquam voluptatem harum
          officiis dignissimos, ab nemo, non tempore, ratione officia explicabo qui inventore vero
          distinctio sapiente praesentium excepturi iure commodi sunt! Consectetur, saepe.
          Exercitationem impedit non ex dolorem, dignissimos beatae quaerat nam quasi ipsum id saepe
          nemo. Temporibus eius obcaecati dolore numquam ipsam dicta ducimus veritatis ut culpa a,
          ea, quisquam, quaerat excepturi? Labore inventore facere voluptas quibusdam aut placeat
          accusantium ducimus ullam culpa, in, aliquam reprehenderit exercitationem commodi numquam,
          doloribus dicta praesentium ex veritatis hic tempora! Ab id odio ullam ipsam iusto. Labore
          ipsa quaerat, quas, quae porro dolorum iste, eius impedit quam nobis adipisci ea!
          Veritatis, ex deleniti beatae, recusandae totam, impedit id perferendis vel earum
          dignissimos modi deserunt suscipit quod. Eum eos facere quasi ut molestiae! Aperiam,
          similique consequuntur quaerat qui, incidunt praesentium nihil impedit exercitationem
          adipisci ratione, eius corrupti modi commodi laborum voluptates saepe! Voluptatibus
          maiores magnam corrupti similique! Nulla adipisci ducimus autem, ipsam nostrum
          consequatur, unde corrupti assumenda est quia labore repudiandae eius, neque facere. Omnis
          fugiat laboriosam libero laudantium porro, labore quisquam nesciunt eius sapiente.
          Veritatis, atque.
        </div>
      </div>
    </section>
  );
}

// 나중에 공통 컴포넌트에 제대로 (일단 임시)

const Badge = ({ name }: { name: string }) => {
  return (
    <span className='text-mainRed border-mainRed rounded-full border px-3 py-0.5 text-lg'>
      {name}
    </span>
  );
};
