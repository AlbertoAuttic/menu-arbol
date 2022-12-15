import { Treebeard, decorators } from "react-treebeard";
import React, { useState } from "react";
import Folder from "../assets/folder2.svg";
import "./TreeView.css"
import {theme,animations} from "react-treebeard"


const {activeLink,base,header,link,loading,subtree,toggle} = theme.tree.node
activeLink.background="#5a7aaa1a"


animations.toggle=() => ({})

const CustomToggle = () => <img src={Folder} alt="Folder" style={{width:"20px",padding:"4px 10px"}}/>;

const CustomHeader = ({onSelect, style, customStyles, node}) => {
  
  const iconType = node.children ? '' : 'file-text';
  const iconClass = `fa fa-${iconType}`;
  const iconStyle = {marginRight: '5px',fontSize:"20px",padding:"7px 0px" };
  return(
    <div style={style.base} onClick={onSelect}>
      <div style={node.selected ? {...style.title, ...customStyles.header.title} : style.title}>
          <i className={iconClass} style={iconStyle}/>
          {node.name}
      </div>
    </div>
  )
}

const datos = {
    name: "Gestión",
    id: 1,
    toggled: true,
    active: true,
    children: [
        {
            name: "Colegiados",
            id: 2,
            children: [
                { name: "Activos" },
                { name: "Inactivos" },
                { name: "Todos" },
                { name: "Por Áreas" },
                { name: "Por modalidades prof" },
            ],
        },
        {
            name: "Empresas",
            id: 3,
            children: [
              { name: "Activas" },
              { name: "Inactivas" },
              { name: "Todas" }
            ],
        },
        {
            name: "Establecimientos",
            id: 4,
            children: [
              { name: "Activas" },
              { name: "Inactivas" },
              { name: "Establecimientos" },
              { name: "Todas" }
            ],
        },
        {
            name: "Depósito de Medicamentos",
            id: 5,
            children: [{ name: "animations.js" }, { name: "default.js" }],
        },
        {
            name: "Terceros",
            id: 6,
            children: [{ name: "animations.js" }, { name: "default.js" }],
        },
        {
            name: "Envios Pendientes Consejo",
            id: 7,
            children: [{ name: "animations.js" }, { name: "default.js" }],
        },
    ],
   
};

const TreeExample = () => {
    const [data, setData] = useState(datos);
    const [cursor, setCursor] = useState(false);

    const onToggle = (node, toggled) => {
        if (cursor) {
            cursor.active = false;
        }
        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        }
        setCursor(node);
        setData(Object.assign({}, data));
        if(!node.children){
          alert(node.name)
        }
    };

    decorators.Toggle=CustomToggle
    decorators.Header=CustomHeader
    return <Treebeard data={data} onToggle={onToggle} />;
};

export default TreeExample;
