import Link from "next/link";
import styles from './user.module.css';
import Layout from "@/components/Layout";
import {GetStaticProps} from 'next';

interface HomeProps {
  users: Array<any>
}

export default function Users(props: HomeProps) {
  const {users} = props;
  return (
    <Layout pageTitle={'Users'}>
      {users.map(user => (
          <Link href={'/users/' + user.id} key={user.id}>
            <div className={styles.card}>
              <a><p>{user.name}</p></a>
            </div>
          </Link>
      ))}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const URI = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await URI.json();
  return {
    props :{
      users
    }
  }
}
