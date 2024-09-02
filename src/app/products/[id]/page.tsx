interface Props {
  params: { id: string };
}

export default function page({ params }: Props) {
  return (
    <section>
      <h1>Product {params.id}</h1>
    </section>
  );
}
