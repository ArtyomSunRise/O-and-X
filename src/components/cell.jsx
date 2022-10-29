import Characters from '../constants/characters'
import Circle from './circle'
import Cross from './cross'

function Cell({ id, setCharacter, fieldState }) {

  const onClickHandler = item => {
    //вот так берем id элемента, на которой мы нажали. Если не сделать преобразование к number, то id будет string
    setCharacter(+item.target.id)
  }

  return (
    <div className='cell' id={id} onClick={onClickHandler}>
      {
        //в зависимости от текущего состояния ячейки, определенного в хуке fields выводим либо крестик, либо нолик. А если состояние null, то поле ещё не заполнено и не выводим ничего (undefined)
        fieldState === Characters.circle
          ? <Circle />
          : fieldState === Characters.cross
            ? <Cross />
            : undefined
      }
    </div>
  )
}

export default Cell
