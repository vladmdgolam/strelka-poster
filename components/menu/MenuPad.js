const MenuPad = ({ items, name, init }) => {
  return (
    <section className={name}>
      {items &&
        Object.entries(items).map(
          ([
            key,
            {
              name,
              props: { description, hotkey, ...props },
            },
          ]) => (
            <div key={key} className="btn btn_control" {...props}>
              {!init && <p>{description}</p>}
              {init && hotkey && <p>{hotkey}</p>}
              {name}
            </div>
          )
        )}
    </section>
  )
}

export default MenuPad
