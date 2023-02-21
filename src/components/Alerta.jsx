function Alerta({tipo, mensaje}) {
  return (
    <div className={`alerta ${tipo}`}>
        <p className='alerta__texto'>{mensaje}</p>
    </div>
  )
}

export default Alerta