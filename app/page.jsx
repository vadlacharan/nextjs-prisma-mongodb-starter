import { auth, signOut } from "@/auth";
import Image from "next/image";

export default async function Home() {

  const session = await auth()

  return (
    <>
    
    </>

  );
}
