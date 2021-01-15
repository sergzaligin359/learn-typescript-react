import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { CandidateCardForm } from './CandidateCardForm/CandidateCardForm';
import { CandidateCardProps } from './CandidateCardForm/CandidateCardForm.model';

export const CandidateCard = () => {
  const { id } = useParams<{ id: string }>();
  console.log('id', id);

  const [username, setUsername] = useState<CandidateCardProps>()

  useEffect(() => {
    setUsername({ username: 'Sergey' })
  }, [])

  console.log('username state', username);

  return (

      <div>
          <h1>Candidate card - {id}</h1>
          { username && ( <CandidateCardForm username={ username } />) }
      </div>

  )
}
