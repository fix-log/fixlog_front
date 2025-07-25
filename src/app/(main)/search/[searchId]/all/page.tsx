interface PageProps {
  params: Promise<{ searchId: string }>;
}

export default async function Page({ params }: PageProps) {
  const { searchId } = await params;
  console.log(searchId);

  return <div>전체</div>;
}
