import './App.css'
import { useState } from 'react'
import Grid from './components/grid'
import Characters from './constants/characters'
import nullsArray from './constants/nullsArray'
import CleanButton from './components/cleanButton'


function App() {

  //создаем хук, в котором будем хранить символ (крестик или нолик), который проставится в ячейку. Т.к. мы должны поочередно заполнять ячейки крестика и ноликами
  const [currentCharacter, setCurrentCharacter] = useState(Characters.circle)

  //создаем хук, в котором будем хранить текущие состояния всех ячеек
  const [fields, setFields] = useState(nullsArray)

  //функция для заполнения ячейки
  const setCharacter = (id) => {

    //если поле уже заполнено, то ничего не делаем
    if (fields[id] !== null) return

    //создаем новый массив, который потом запишем в useState хук
    const newFields = fields.map((field, index) => {
      if (index === id) return currentCharacter

      return field
    })

    //обновляем состояние ячеек
    setFields(newFields)

    //задаем текущий символ, противоположный текущему
    const newCharacter = currentCharacter === Characters.circle
      ? Characters.cross
      : Characters.circle

    //обновляем состояние текущего символа
    setCurrentCharacter(newCharacter)
  }

  //функция для очистки ячеек
  const cleanFields = () => {
    //возвращаем все поля в деолтное состояние
    setFields(nullsArray)
    //возвращаем текущий символ в дефолтный (чтобы после нажатия кнопки первый символ всегда был нолик)
    //PS: долго думал, почему первый символ по итогу - это крестик. Причину нашёл. Вот тебе и задачка :)
    setCurrentCharacter(Characters.circle)
  }

  return (
    <div className='App'>
      <div className='form'>
        <div className='content'>
          <Grid
            setCharacter={setCharacter}
            fields={fields}
          />
        </div>
        <CleanButton cleanFields={cleanFields} />
      </div>
    </div>
  )
}

export default App
