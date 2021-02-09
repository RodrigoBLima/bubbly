export default function Home() {
  function bubbles() {
    let content = [];

    for (let i = 0; i <= 2800; i++) {
      content.push(<span></span>);
    }

    return content;
  }

  return (
    <div>
      <section className="container">{bubbles()}</section>
    </div>
  );
}
