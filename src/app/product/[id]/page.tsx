export default function page({ params }: { params: { id: string } }) {
  return (
    <section>
      <h1>Product {params.id}</h1>
    </section>
  );
}
