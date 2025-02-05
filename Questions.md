# in summary section, how deeply nested is the list? The summary container should be decorator only or not?

# Proper way of dynamic import of svg's ?

- take them into public/assets and add the this PATH-portion dynamically

# apply dynamic styles in ListItem ?

- Add color property into the data, then
- Write utility classes, and add classnames dynamicly: "className={`${summaryItem} ${styles["skill-" + color]} `}>"

# inline styling in Listitem ?

- use dynamic classname instead

# organizing directories width css modules

- global styles into "style" folder, each component into its own folder along its module.css
