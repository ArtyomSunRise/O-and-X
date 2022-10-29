function CleanButton({cleanFields}) {

  const onClickHandler = () => {
    cleanFields()
  }

  return (
    <button className='btn' id='btn' onClick={onClickHandler}>Очистить</button>
  )
}

export default CleanButton
