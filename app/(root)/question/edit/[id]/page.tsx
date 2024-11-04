interface Props {
  params: {
    id: string;
  };
  searchParams?: string[];
}

const Page = ({ params, searchParams }: Props) => {
  return <div>{params.id}</div>;
};

export default Page;
