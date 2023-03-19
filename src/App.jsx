import { Post } from "./componentes/Post";
import { Header } from "./componentes/Header";
import { Sidebar } from "./componentes/Sidebar";

import styles from "./App.module.css";

import "./global.css";

// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date 
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://this-person-does-not-exist.com/img/avatar-117e952b03d5763a3b8f8dec4bf5f2dd.jpg",
      name: "Liana Felício",
      role: "Tech Lead"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "liana.design/doctorcare" },              
    ],
    publishedAt: new Date('2022-05-03 20:00'),
  },
  {
    id: 1,
    author: {
      avatarUrl: "https://this-person-does-not-exist.com/gen/avatar-11c3f3091ccf342b5c9b7f13eb680d6e.jpg",
      name: "Nuno Seixas",
      role: "Senior Programmer"
    },
    content: [
      { type: "paragraph", content: "Olá, pessoal!" },
      { type: "paragraph", content: "Hoje fiz o desenho funcional do Back-End do nosso próximo projeto prático ⚡" },
      { type: "link", content: "seixas.dev/projetos" },              
    ],
    publishedAt: new Date('2022-05-07 20:00'),
  }
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          { posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                />  
            )
          })
          }
        </main>
      </div>
    </div>
  )
}

