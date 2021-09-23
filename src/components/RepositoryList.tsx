import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem"
import '../style/repositories.scss';


interface Repository {
  name: string;  
  full_name: string;
  html_url: string;
  id: number;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/vnoogueira/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.id} repository={repository} />
        })}
      </ul>
    </section>
  )
}