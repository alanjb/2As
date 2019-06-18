const MenuItem = (props: { item: CKMMenuItem }) => {
    const { item } = props;
  
    return (
      <NavItem>
        <NavLink href={item.href} title={item.title}>
          {item.text}
        </NavLink>
      </NavItem>
    );
  };