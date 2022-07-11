import Layout from "@/components/Layout";
import styles from '@/styles/Blog.module.css';

interface Posts {
  id: number;
  title: string;
  body: string;
}

interface BlogProps {
  dataBlog: Array<Posts>
}

export default function Blog(props: BlogProps) {
  const {dataBlog} = props;
  return (
    <Layout pageTitle={'Blog'}>
      <h1>BLOG PAGE</h1>
      {dataBlog.map(blog => (
        <div key={blog.id} className={styles.card}>
          <p><b>{blog.title}</b></p>
          <p>{blog.body}</p>
        </div>
      ))}
    </Layout>
  )
}


export async function getServerSideProps() {
  const req = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataBlog = await req.json();
  return {
    props : {
      dataBlog
    }
  }
}