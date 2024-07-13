import prisma from "@/db";

 async function getUserData() {
  const user = await prisma.user.findFirst({});
  return {
    email: user?.username,
    name: "Sarthak"

  };
 }
export default async function User() {
  const data = await getUserData();
  return <div>
    {data.email}
    {data.name}
  </div>
}