import { useParams } from 'react-router-dom';

export const CandidateCard: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log('id', id);
  return (

      <div>
          <h1>Candidate card - {id}</h1>
      </div>

  )
}
