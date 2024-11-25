import { useRouter } from "next/router";

export default function Doc() {
  const router = useRouter();
  const { slug } = router.query;
  return <h1>Document: {slug}</h1>;
}
