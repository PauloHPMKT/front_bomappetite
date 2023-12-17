import { Board } from './styles';

interface OrderBoardProps {
  icon: string;
  title: string;
}

export const OarderBoard = ({ icon, title }:OrderBoardProps) => {
  return(
    <Board>
      <header>
        <span>{ icon }</span>
        <strong>{ title }</strong>
        <span>(3)</span>
      </header>
    </Board>
  )
}
