export default function IndexTopic(props: topicProps) {
  if (props.imageLeft)
    return (
      <section className="index-topic flex shadow-inner">
        <img src={props.image} className="index-topic-image"></img>
        <article>
          <header className="text-2xl font-bold">{props.title}</header>
          <div>{props.text}</div>
        </article>
      </section>
    );
  return (
    <section className="index-topic flex shadow-inner">
      <article>
        <header className="text-2xl font-bold">{props.title}</header>
        <div>{props.text}</div>
      </article>
      <img src={props.image} className="index-topic-image"></img>
    </section>
  );
}

type topicProps = {
  imageLeft: Boolean;
  title: string;
  text: string;
  image: string;
};
