import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";


interface User {
  id: string,
  name: string,
  email: string,
  phone: string,
  website: string
}


interface UserDetailProps {
  user: User
}

export default function UserDetail(props: UserDetailProps) {
  const router = useRouter();
  const {id} = router.query;
  const {user} = props;
  return(
    <Layout pageTitle="User Detail">
      <h1>Details user with id : {id}</h1>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const url = await fetch('https://jsonplaceholder.typicode.com/users');
  const res = await url.json();
  const paths = res.map((user: User) => ({
    params: {
      id: `${user.id}`
    }
  }))

  return {
    paths,
    fallback: false
  }
}

interface getStaticPropsType {
  params : {
    id: string
  }
}

export const getStaticProps = async (context: getStaticPropsType) => {
  const id = context.params.id;
  const url = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const user = await url.json();
  return {
    props: {
      user
    }
  }
}
