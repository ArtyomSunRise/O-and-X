import Cell from './cell'
import cellIds from '../constants/cellIds'

//элемент, в котором мы строим сетку из 9-ти ячеек
function Grid({ setCharacter, fields }) {
  return (
    cellIds.map(cellId => {
      return (<Cell
        id={cellId}
        //key нужен для внутренних процессов реакта. Все может работать в данном случае и без него, но в консоли ошибка, если его нет
        key={cellId}
        setCharacter={setCharacter}
        //передадим в текующую ячейку только её состояния, а не все состояния
        fieldState={fields[cellId]}
      />)
    })
  )
}

export default Grid
