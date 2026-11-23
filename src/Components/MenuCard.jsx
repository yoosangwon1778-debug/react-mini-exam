import React from 'react'

const MenuCard = ({ id, emoji, name, votes, onVote, isTop }) => {
  return (
    <li className={isTop ? 'card is-top' : 'card'}>
      <div className="card__emoji">
        {emoji}
      </div>
      <div className="card__name">
        {name}
      </div>
      <div className="card__votes">
        {votes}표
      </div>
      <button type='button' className='card__btn' onClick={() => onVote(id)}>투표하기</button>
    </li>
  )
}

export default MenuCard