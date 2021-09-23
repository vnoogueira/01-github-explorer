import "../style/repositories.scss";

interface RepositoryItemProps {
  repository: {
    name: string;
    html_url: string;
    full_name: string;
    id: number;
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.full_name}</p>
      <a href={props.repository.html_url}>Acessar Repositório</a>
    </li>
  );
}