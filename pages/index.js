import Button from "../components/Button";
import Link from "../components/Link";
import Infobox from "../components/InfoBox";

export default function HomePage() {
  return (
    <>
      <Button>click me!</Button>
      <Button brokkoli="danger">click me not!</Button>
      <p>
        this is a <Link href="/">styled Link</Link>
      </p>
      <Infobox title="this is a box" message="read is carefully"></Infobox>
      <Infobox title="it worked!" message="success" variant="success"></Infobox>
      <Infobox
        title="Error"
        message="something went wrong"
        variant="error"
      ></Infobox>
    </>
  );
}
